/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-21 11:12:18
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-21 11:13:18
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2; // nums[i+1]存在

  // 找到那个左边比右边小的数
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  // 如果找到了 就互换
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    [nums[j], nums[i]] = [nums[i], nums[j]];
  }

  let l = i + 1;
  let r = nums.length - 1;

  // 调换的那个元素 右边的进行翻转
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
  return nums;
};
