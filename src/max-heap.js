const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	push(data, priority) {
		var node = new Node(data, priority);
		if (!this.root) {
			this.root = node;
		}
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.length++;
	}

	pop() {
		this.length--;

		this.detachRoot();
	}

	detachRoot() {
		this.root = null;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.length;
	}

	isEmpty() {
		return (!this.length);
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	insertNode(node) {
		
	}

	shiftNodeUp(node) {
		node.swapWithParent();
		node.swapWithParent();
	}

	shiftNodeDown(node) {
		node.swapWithParent();
	}
}

module.exports = MaxHeap;
