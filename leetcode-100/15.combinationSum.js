/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-24 10:06:16
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-24 10:06:17
 */
// 给你一个数组和一个target值，找出数组中和为target的组合（含多个）

// 回溯

// 递归：

// 一个target一个itemArr(符合相加为target的组合)一个index，
// index === candidates.length 直接返回
// 每次递归，只要target - candidates[index] >= 0 都让target-【某一项的值】candidates[index]
// 如果target = 0，就说明找到了一个组合，将它push到结果数组里面 res.push(itemArr) return;
// 继续寻找下一个组合 dfs(target,itemArr,index + 1);
// target itemArr
// 【2，3，6，7】【7】
// 【2，3，6，7】【5】【2】
// 【2，3，6，7】【3】【2，2】
// 【2，3，6，7】【0】【2，2，3】 res.push(itemArr) √
// 【3，6，7】【7】
// 【3，6，7】【4】【3】
// 【3，6，7】【1】【3，3】×

// 【6，7】【7】
// 【6，7】【1】【6】×

// 【7】【7】
// 【7】【0】【7】res.push(itemArr) √

// 代码

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];

  const dfs = (target, itemArr, index) => {
    if (index === candidates.length) {
      return;
    }

    if (target === 0) {
      res.push(itemArr);
      return;
    }

    dfs(target, itemArr, index + 1);

    if (target - candidates[index] >= 0) {
      dfs(target - candidates[index], [...itemArr, candidates[index]], index);
    }
  };

  dfs(target, [], 0);
  return res;
};
