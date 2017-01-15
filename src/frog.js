/**
 * Created by kevin on 2017/1/15.
 */
'use strict';

function Step(floorN){
    let N=Number(floorN);
    if(N<=0){
        // console.error("INPUT UNEXPECTED!");
        return 0;
    }
    if(N<=2) return N;

    return Step(N-1)+Step(N-2);
}

//test
console.log(Step(-1));
console.log(Step(0));
console.log(Step(1));
console.log(Step(2));
console.log(Step(10));
console.log(Step(20));