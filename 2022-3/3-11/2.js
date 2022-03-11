/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let q = [root],
    res = [];
  while (q.length) {
    let arr = [];
    let size = q.length; // 这一层的length
    while (size--) {
      // 将这一层的一个个push
      let cur = q.shift();
      arr.push(cur.val);
      cur.left && q.push(cur.left);
      cur.right && q.push(cur.right);
    }
    res.push(arr);
  }
  return res;
};
