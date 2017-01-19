/**
 * Created by user on 2017/1/19.
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let noRepeatArray=[];
    for(let i=0;i<s.length;i++){
        if(noRepeatArray.indexOf(s[i])==-1){
            noRepeatArray.push(s[i]);
        }
    }
    let len=noRepeatArray.length;
    for(let j=len;j>0;j--){
        
    }
};

let test="abcabcbb";
lengthOfLongestSubstring(test);