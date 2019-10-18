const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.heap = new MaxHeap;
		this.maxSize = maxSize || 30;
		this.length = 0; // ***
		this.queue = [];
	}

	push(data, priority) {
		if (this.length == this.maxSize) throw new Error('');

		var node = new Node(data, priority);
		this.length++;
		this.queue.push(node);

		var heap = new MaxHeap();
		heap.push(data, priority);
	}

	shift() {
		if (this.length === 0) throw new Error('');
		this.queue.shift(node);

		this.length--;
		var heap = new MaxHeap();
		heap.pop();
	}

	size() {
		return this.length;
	}

	isEmpty() {
		return true;
	}
}

module.exports = PriorityQueue;
