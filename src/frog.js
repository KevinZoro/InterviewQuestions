/**
 * Created by kevin on 2017/1/15.
 */
'use strict';

function Step(floorN){
    let N=Number(floorN);
    if(N<=0){
        console.error("INPUT UNEXPECTED!");
        return 0;
    }
    if(N<=2) return N;

    return Step(N-1)+Step(N-2);
}

function Step2(FloorN){
    let array = [];
    let N = Number(FloorN);
    if(N<=0){
        console.error("INPUT UNEXPECTED!");
        return 0;
    }
    if(N<=2) return N;
    array[0]=1;
    array[1]=2;
    for(let i=2;i<N;i++){
        array[i]=array[i-1]+array[i-2];
    }
    return array[N-1];
}

function Step3(FloorN){
    let N = Number(FloorN);
    if(N<=0){
        console.error("INPUT UNEXPECTED!");
        return 0;
    }
    if(N<=2) return N;
    let first=1;
    let second=2;
    let fn=0;
    for(let i=2;i<N;i++){
        fn=first+second;
        first=second;
        second=fn;
    }
    return fn;
}

//test
console.log(Step(-1));//0
console.log(Step(0));//0
console.log(Step(1));//1
console.log(Step(2));//2
console.log(Step(10));//89
console.time("step1");
console.log(Step(20));//10946
console.timeEnd("step1");//0.756ms

//test2
console.log(Step2(-1));//0
console.log(Step2(0));//0
console.log(Step2(1));//1
console.log(Step2(2));//2
console.log(Step2(10));//89
console.time("step2");
console.log(Step2(20));//10946
console.timeEnd("step2");//0.042ms 可见效率大大提升!

//test3
console.log(Step3(-1));//0
console.log(Step3(0));//0
console.log(Step3(1));//1
console.log(Step3(2));//2
console.log(Step3(10));//89
console.time("step3");
console.log(Step3(20));//10946
console.timeEnd("step3");//0.032ms 可见效率大大提升!
