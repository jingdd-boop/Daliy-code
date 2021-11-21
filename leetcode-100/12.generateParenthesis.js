/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-20 12:25:23
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-21 11:13:16
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  const help = (l, r, str) => {
    // n = 3, 每一项的字符长度为3 * 2 6
    if (str.length === n * 2) {
      res.push(str); // 转入res
      return;
    }

    if (l > 0) {
      help(l - 1, r, str + "(");
    }

    if (l < r) help(l, r - 1, str + ")");
  };
  help(n, n, "");
  return res;
};

// 2 2
// 1 2
// 1 1
// 1 0 | 0 1
// 0 0
