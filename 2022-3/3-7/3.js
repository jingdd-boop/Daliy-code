/**
 * @param {number[]} nums
 * @return {number}
 */

//  一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
//  示例 1:
//  输入: [0,1,3]
//  输出: 2
//  示例 2:
//  输入: [0,1,2,3,4,5,6,7,9]
//  输出: 8

var missingNumber = function (nums) {
  let res = 0;
  let len = nums.length;
  if (len <= 2) {
    return nums[0] === 1 ? 0 : nums[0] + 1;
  }
  for (let i = 0; i < len; i++) {
    console.log(nums[i + 1], nums[i]);
    if (nums[i + 1] - nums[i] !== 1) {
      console.log(nums[i], "00");
      res = nums[i] + 1;
      break;
    } else {
      if (nums[0] > 0) {
        res = nums[0] - 1;
      } else {
        res = nums[len - 1] + 1;
      }
    }
  }
  console.log(res);
  return res;
};

const arr = [0, 1, 2];
missingNumber(arr);
