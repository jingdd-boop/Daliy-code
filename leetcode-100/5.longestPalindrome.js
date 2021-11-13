/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-13 11:28:05
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-13 11:28:24
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }
  let res = "";
  for (let i = 0; i < s.length; i++) {
    help(i, i);
    help(i, i + 1);
  }
  function help(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    // 更新 res
    if (right - left - 1 > res.length) {
      res = s.slice(left + 1, right);
    }
  }
  return res;
};
