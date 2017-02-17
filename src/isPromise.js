/**
 * Created by kevin on 2017/2/17.
 */

function isPromise(value){
    return value instanceof Promise;
}

var value = new Promise(resolve=>resolve('aaa'));
console.log(isPromise(value));