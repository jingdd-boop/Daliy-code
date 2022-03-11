/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) return []; // 边界值直接返回[]

  const queue = [root], // 将root 放入队列
    res = []; // 存放结果值

  while (queue.length) {
    // 当队列有值的时候
    const node = queue.shift(); // 定义node，也就是遍历到的节点

    res.push(node.val); // push 到存放结果值的res数组里面

    node.left && queue.push(node.left); // 如果节点有left
    node.right && queue.push(node.right); // 如果节点有right
  }

  return res; // 返回res
};

var levelOrder = function (root) {
  if (!root) return [];

  let q = [root],
    res = [];

  while (q.length) {
    const node = q.shift();
    res.push(node.val);

    node.left && q.push(node.left);
    node.right && q.push(node.right);
  }
};
