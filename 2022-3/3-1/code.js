var CQueue = function () {
  this.addStask = [];
  this.delStask = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.addStask.push(value);
  // 这个addStask栈负责新增，push
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  //  delStask 这个栈负责pop，推出
  // 如果delStask的长度大于0 可以继续推
  if (this.delStask.length) {
    return delStask.pop();
  } else {
    // 如果小于等于0
    // 如果 addStask.length > 0的话
    while (this.addStask.length) {
      this.delStask.push(this.addStask.pop());
    }
    if (!this.delStask.length) {
      return -1;
    } else {
      return this.delStask.pop();
    }
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

// 两个栈实现一个队列
// 首先栈的特点，是先进后出   1 2 3 4 5 依次入栈的话  出栈的顺序为 5 4 3 2 1
// 而队列的特点， 是先进先出  1 2 3 4 5  依次出栈的话   出栈顺序 1 2 3 4 5

// 准备两个栈 A： 1 2 3 4 5 入栈到  B： 5 4 3 2 1  B 出栈： 1 2 3 4 5  完成

var obj = new CQueue();
obj.appendTail(4);

var param_2 = obj.deleteHead();

console.log(param_2, "param_2 ");
