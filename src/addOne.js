/**
 * Created by kevin on 2017/2/17.
 */
function sum(){
    var len =arguments.length;
    if(len===0) return 0;
    else{
        let result=0;
        for(let i=0;i<len;i++){
            result+=arguments[i];
        }
        return result;
    }
}
console.log(sum());
console.log(sum(1));
console.log(sum(1,2,3));

//使用sum实现结果+1
var addOne = sum.bind(null,1);

console.log(addOne());
console.log(addOne(1));
console.log(addOne(1,2,3));
