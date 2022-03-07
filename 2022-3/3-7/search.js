/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//  统计一个数字在排序数组中出现的次数。
//  示例 1:
//  输入: nums = [5,7,7,8,8,10], target = 8
//  输出: 2
//  示例 2:
//  输入: nums = [5,7,7,8,8,10], target = 6
//  输出: 0

var search = function (nums, target) {
  let indexNum = nums.indexOf(target);
  let res = 0;
  if (indexNum == -1) {
    res;
  } else {
    for (let i = indexNum; i < nums.length; i++) {
      if (target === nums[i]) {
        res = res + 1;
      }
    }
  }
  console.log(res);
  return res;
};

const nums = [5, 8, 8, 8, 8, 10];
const nums1 = [5, 7, 8, 8, 8, 10];

search(nums1, 8);
search(nums, 8);
