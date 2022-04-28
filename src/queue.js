const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue extends ListNode {
  constructor(...args) {
    super(...args)
  }

  getUnderlyingList() {
    return this.next
  }

  enqueue(value) {
    let node = new ListNode(value);
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  dequeue() {
    const del = this.next.value;
    this.next = this.next.next;
    return del
  }
}



module.exports = {
  Queue
};
