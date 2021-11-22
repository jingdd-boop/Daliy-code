/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-22 10:19:20
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-22 10:19:21
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 二分查找
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    // 取mid
    const mid = start + ((end - start) >> 1);

    // 如果nums[mid] === target return mid
    if (nums[mid] === target) return mid;

    // 如果 nums[mid] >= nums[start]   说明左边是有序的
    if (nums[mid] >= nums[start]) {
      // 在nums[start] - target -  nums[mid] 区间
      if (target >= nums[start] && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // 在nums[mid] - target -  nums[end] 区间
      if (target >= nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  // 没找到返回-1

  return -1;
};
