/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-11 09:55:09
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-11 10:00:58
 */
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let res = [];
    let max = 0;
    for (let i = 0;i < s.length;i++) {
        // 如果存在，截取
        // 如果数组中不存在该字母，将它push到数组中去,更新长度
        let index =  res.indexOf(s[i])
        if (index !== -1) {
            res.splice(0,index + 1);
        } 
        res.push(s[i]); 
        max = Math.max(max,res.length);    
    }
    return max;
};

let s = 'adccdab';
console.log(lengthOfLongestSubstring(s))