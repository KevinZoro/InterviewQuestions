# InterviewQuestions
some questions and answers
***
# Q1:JS 继承有哪几种方式？
首先有两个构造函数Animal,Dog
```javascript
function Animal(){
  this.species = 'animal';
}
      
function Dog(name,color){
  this.name = name;
  this.color = color;
}
```
我们要让Dog继承Animal的属性。
# ANSWER: 
##### 1.构造函数绑定
使用apply或者call方法

```javascript
function Dog(name,color){
   Animal.apply(this,arguments);
  //Animal.call(this,name,color);
  this.name = name;
  this.color = color;
}
    
var lucky = new Dog('lucky','brown');
console.log(lucky.species; // animal'
```
##### 2.prototype模式
```javascript
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
var lucky = new Dog('lucky','Brown');
console.log(lucky.species);
```
 先将Dog的prototype对象指向一个Animal的实例，然后将prototype.constructor指向构造函数Dog，这样就实现了继承


##### 3.直接继承prototype

```javascript
function Animal(){}
Animal.prototype.species = 'animal';

function Dog(name,color){
	this.name = name;
	this.color = color;
};

Dog.prototype = Animal.prototype;
Dog.prototype.constructor = Dog;
var lucky = new Dog('lucky','brown');
console.log(lucky.species);

```
这样做的好处是效率高，速度快，省内存，但是Dog.prototype和Animal.prototype现在指向了同一个对象，修改Dog.prototype会直接修改Animal.prototype。

##### 4.利用空对象作为中介
```javascript
var F = function(){};
F.prototype = Animal.prototype;
Dog.prototype = new F();
Dog.prototype.constructor = Dog;

console.log(Animal.prototype.constructor); //Animal
var lucky = new Dog('lucky','brown');
console.log(lucky.species); // animal
```
##### 5.拷贝继承
```javascript
function extend(Child,Parent){
	var p = Parent.prototype;
	var c = Child.prototype;
	for(var i in p){
		c[i] = p[i];
	}
	c.uber = p;//为子对象留有可以访问父对象的接口
}

function Dog(name,color){}

extend(Dog,Animal);
var lucky = new Dog('lucky','brown');
console.log(lucky.species); //animal
```

***
# Q2:JS 严格模式跟普通模式的区别？

# ANSWER：
##### 1.在js文件中使用'use strict‘进入严格模式
> 　
- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的Javascript做好铺垫。

##### 2.会将拼写错误转成异常
```javascript
'use strict';

var maxNumber = 100;
maxNumbre = 10;//ReferenceError
console.log(maxNumber);
```

##### 3.全局变量显式声明
正常模式中，一个变量未声明直接赋值，默认是全局变量，严格模式中禁止这种用法，全局变量必须显示声明
```javascript
'use strict';
v1 = 1;//error
```

##### 4.禁用with，eval

##### 5.禁止删除声明变量
```javascript
'use strict';

var x;
delete x; //语法错误
```
***

# Q3：V8垃圾回收机制
# ANSWER:

V8使用是垃圾回收器（GC）进行回收，
具体信息可以参考下列文章：
1.[阿里云团队博客](http://alinode.aliyun.com/blog/14)
2.[Segmentfault](http://segmentfault.com/a/1190000000440270)

***

# Q4：web后端缓存策略有哪些？
# ANSWER:

##### 1.利用redis([node-redis](https://github.com/noderedis/node_redis))或 [memcached](https://github.com/3rd-Eden/memcached)
在服务器与数据库之间设置redis数据库作为缓存介质，在需要缓存的请求到达时，先检查redis数据库是否有，使用
```javascript
var redis = require('redis').createClient();
redis.get('key',function (err,reply){
      //logic code
});
```
进行判断，如果不存在，则从对应数据库获取数据，然后将数据写入redis数据库，并设置过期时间。
```javascript
var redis = require('redis').createClient();
redis.set('key','value');
redis.expire('key',1000);//ms
```

##### 2.max-age和cache-control
主要针对静态资源的缓存
```javascript
response.setHeader('Cache-Control','public,max-age=3600');
```

##### 3.etag
从req.headers里取'if-none-match',如果存在且hash值一致，返回304
```javascript
var hashStr = "A hash string.";
var hash = require("crypto").createHash('sha1').update(hashStr).digest('base64');
require("http").createServer(function(req, res){  
    if(req.headers['if-none-match'] == hash){ 
        res.writeHead(304);
        res.end(); 
        return; 
    } 
    res.writeHead(200, { "Etag": hash }) 
    res.write(hashStr); res.end();
}).listen(9999);
```
这样可以在输出没有变化的时候过滤请求，减轻服务器压力。

##### 4.CDN缓存
将图片等数据放在CDN缓存，可以大大减轻自己服务器压力，可以参考这个模块[express-cdn](https://github.com/niftylettuce/express-cdn)

参考资料：
[Web开发后端缓存思路](https://cnodejs.org/topic/55210d88c4f5240812f55408)
[Etag缓存](http://www.cnblogs.com/hustskyking/p/etag-in-node.html)
[缓存策略](http://imweb.io/topic/55c6f9bac222e3af6ce235b9)

***