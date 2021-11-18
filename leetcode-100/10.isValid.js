/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-18 09:49:43
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-18 09:49:44
 */
/**
 * @param {string} s
 * @return {boolean}
 */

// s = "{[]}"
// 遇到‘{’  stack = [}]
// 遇到‘[’  stack = [},]]
// 遇到‘]’  stack.pop = ']' = ']‘,stack = ['}']
// 遇到‘]’  stack.pop = '}' = '}‘

var isValid = function (s) {
  let stack = []; // 使用栈
  for (let str of s) {
    if (str === "(") {
      stack.push(")");
    } else if (str === "[") {
      stack.push("]");
    } else if (str === "{") {
      stack.push("}");
    } else {
      if (str !== stack.pop()) return false; // 出栈的不等于str false
    }
  }
  return stack.length > 0 ? false : true;
};
