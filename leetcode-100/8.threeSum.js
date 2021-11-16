/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-16 10:07:06
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-16 10:07:07
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ans = [];
  const len = nums.length;
  if (nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        ans.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] == nums[L + 1]) L++; // 去重
        while (L < R && nums[R] == nums[R - 1]) R--; // 去重
        L++;
        R--;
      } else if (sum < 0) L++;
      else if (sum > 0) R--;
    }
  }
  return ans;
};

// 1.排序
// 2.边界条件，小于3位数就直接返回[];
// 3.三个数相加为0，首先要确定一位i，然后其他两位分别为i+1  len-1
// 4.当i大于0，可以不用比了，因为三个数相加肯定大于0了
// 5.还要注意去重

// 6.sum>0,sum<0,
// 7.sum=0,继续进行，看看还有没有其他符合条件的组
