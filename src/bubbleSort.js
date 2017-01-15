/**
 * Created by kevin on 2017/1/15.
 */
'use strict';
function bubbleSort(list){
    let len = list.length;
    let flag = true;
    for(let i=0;i<len-1;i++){
        flag=true;
        for (let j=0;j<len-1-i;j++){
            if(list[j]>list[j+1]){
                let temp = list[j];
                list[j]=list[j+1];
                list[j+1]=temp;
                flag=false;
            }
        }
        if(flag) break;
    }
    return list;
}

let start = new Date().getTime();
let list = [2,3,1,7,4,3,2,1,4,6,5];
console.log(bubbleSort(list));
let end = new Date().getTime();
console.log((end-start)/(1000));//0.036ms