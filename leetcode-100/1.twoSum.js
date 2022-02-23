/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-09 09:53:58
 * @LastEditors: longjing03
 * @LastEditTime: 2021-12-11 12:14:12
 */
// 解题思路
// 一个数组 nums
// 两个值索引 i，j
// 一个目标值target

// 使用Map对象或者是对象都可以

// 对象注意使用 map[nums[i]] = i 这种方式设定值

// 如果是Map结构就使用 get set的方式

// 总的思路就是，for循环+if判断是否存在对应的值else设置值

// 代码

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      console.log(target - nums[i]);
      return [i, map.get(target - nums[i])];
    } else {
      map.set(nums[i], i);
    }
  }
};
