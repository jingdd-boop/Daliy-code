/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-14 11:42:48
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-14 11:42:48
 */

// 注意几个问题：
// 1. 如何把字符串转换成数字
// 2. 运用栈的思想
// 3. 加减直接放，乘除运算完替换栈顶元素

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.trim();
  const stack = [];
  let preSign = "+";
  let num = 0;
  for (let i = 0; i < s.length; ++i) {
    // 将非符号的转为可运算的数字
    if (!isNaN(Number(s[i])) && s[i] !== " ") {
      num = num * 10 + s[i].charCodeAt() - "0".charCodeAt();
      // <!-- num = num * 10 + NUmber(s[i]) -->
    }

    // 遇到不同运算符后的操作
    if (isNaN(Number(s[i])) || i === s.length - 1) {
      switch (preSign) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        default:
          stack.push((stack.pop() / num) | 0);
      }
      preSign = s[i];
      num = 0;
    }
  }
  let ans = 0;
  // 将栈里面的值相加
  while (stack.length) {
    ans += stack.pop();
  }
  return ans;
};
