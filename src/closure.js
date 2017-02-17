/**
 * Created by kevin on 2017/2/17.
 */
for(var i=0;i<10;i++){
    setTimeout(function(i){
        return function(){
            console.log(i);
        };
    }(i),i*1000);
}

//es6
for(let i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i);
    })
}
