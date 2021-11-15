/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-15 09:55:12
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-15 09:55:12
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j; ) {
    // 双指针
    let minHeight = height[i] < height[j] ? height[i++] : height[j--];

    // 最后得到的面积
    let area = (j - i + 1) * minHeight;

    //  取最大
    max = Math.max(max, area);
  }
  return max;
};
