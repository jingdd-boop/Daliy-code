/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-12 09:52:25
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-12 09:52:25
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let num = nums1.concat(nums2).sort((a, b) => {
    return a - b;
  });

  // console.log(num)

  let len = num.length;
  let tag = num[0];
  if (len % 2 === 0) {
    let index = len / 2;
    tag = (num[index] + num[index - 1]) / 2;
  } else {
    let temp = Math.floor((Math.floor(len / 2) + Math.ceil(len / 2)) / 2);
    tag = num[temp];
  }

  return tag;
};
