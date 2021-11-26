/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-26 11:24:06
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-26 11:24:06
 */
// 解题思路
// 1，2，3
// 1 123
// 2 123
// 3 123

// 1.每次取到一个数组的项，都有三个子节点，（因此需要排除重复的子节点）
// 2.增加一个对象（相当于使用map去判定它是否重复）
// 3.递归 最开始为一个空数组，啥也没有，
// 4.遍历数组，path.push(num)，并且使用tagMap去记录它已经选择了，不用再重复选择

// 代码

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let tagMap = {};

  function dfs(path) {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }

    for (const num of nums) {
      if (tagMap[num]) continue;
      path.push(num);
      tagMap[num] = true;
      dfs(path);
      path.pop(num);
      tagMap[num] = false;
    }
  }

  dfs([]);
  return res;
};
// 1,2,3
// 1,3,2

// 2,1,3
// 2,3,1

// 3,1,2
// 3,2,1
