/**
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.windowSize = size;
  this.queue = [];
  this.sum = 0;
  this.head = 0;
  this.currentSize = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.queue.push(val);
  this.sum += val;
  this.currentSize += 1;

  if(this.queue.length > this.windowSize) {
    this.sum -= this.queue[this.head];
    this.head += 1;
    this.currentSize = this.windowSize;
  }

  return this.sum / this.currentSize;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */