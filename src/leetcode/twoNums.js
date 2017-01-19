/**
 * Created by user on 2017/1/19.
 */
var twoSum = function(nums, target) {
    if(!Array.isArray(nums)||nums.length<=2){
        return false;
    }
    let newArray=[];
    for(let i=0;i<nums.length;i++){
        let otherNum=target-nums[i];
        for(let j=0;j<nums.length;j++){
            if(j!=i&&nums[j]==otherNum){
                newArray=(i>j)?[j,i]:[i,j]
            }
        }
    }
    return newArray;
};

twoSum([2, 7, 11, 15],9);