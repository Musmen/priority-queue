const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.heap = new MaxHeap;
		this.maxSize = maxSize || 30;
	}

	push(data, priority) {
		if (this.size() >= this.maxSize) throw new Error('You already reached max size of queue!');
		this.heap.push(data, priority);
	}

	shift() {
		if (this.isEmpty()) throw new Error('Queue is already empty!');
		return this.heap.pop();
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
