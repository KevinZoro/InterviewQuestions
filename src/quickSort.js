/**
 * Created by kevin on 2017/1/15.
 */
'use strict';

function quickSort(list) {
    let len = list.length;
    if(len<=1){
        return list;
    }
    let midLen = Math.floor(len/2);
    let midValue = list.splice(midLen,1);

    let rightList=[];
    let leftList=[];

    for(let i=0;i<len;i++){
        if(list[i]){
            if(list[i]>=midValue){
                rightList.push(list[i]);
            }else{
                leftList.push(list[i])
            }
        }
    }
    return quickSort(leftList).concat(midValue,quickSort(rightList));
}


let list = [2,3,1,7,4,3,2,1,4,6,5];
let start = new Date().getTime();
console.log(quickSort(list));
let end = new Date().getTime();
console.log((end-start)/(1000));//0.029ms