const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	push(data, priority) {
		var node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.length++;
	}

	pop() {
		if (!this.length) return;

		this.length--;
		var result = this.detachRoot();
    this.restoreRootFromLastInsertedNode(result);
    this.shiftNodeDown(this.root);

    return result.data;
	}

	detachRoot() {
		var root = this.root;
		this.root = null;
		if (this.parentNodes.indexOf(root) > -1) this.parentNodes.shift();
		return root;
	}

	restoreRootFromLastInsertedNode(detached) {
		if (!this.parentNodes.length) return;

		var newRoot = this.parentNodes.pop();
		
		if (newRoot.parent === detached) {
			this.parentNodes.unshift(newRoot);
		} else if (this.parentNodes.indexOf(newRoot.parent) === -1) {
			this.parentNodes.unshift(newRoot.parent);
		}
		newRoot.remove();
		if (detached.left && detached.left !== newRoot) newRoot.appendChild(detached.left);
		if (detached.right && detached.right !== newRoot) newRoot.appendChild(detached.right);
		this.root = newRoot;
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
		this.parentNodes.push(node);

		if (!this.root) {
			this.root = node;
		} else {
			this.parentNodes[0].appendChild(node);
		}

		if (this.parentNodes[0].left && this.parentNodes[0].right) {
			this.parentNodes.shift();
		}
	}

	shiftNodeUp(node) {
		if (!node.parent) {
			this.root = node;
			return;
		}
		if (node.priority > node.parent.priority) {
			var nodeIndex = this.parentNodes.indexOf(node);
			var parentIndex = this.parentNodes.indexOf(node.parent);
			this.parentNodes[nodeIndex] = node.parent;
			this.parentNodes[parentIndex] = node;
			node.swapWithParent();
			this.shiftNodeUp(node);
		}
	}

	shiftNodeDown(node) {
		if (!node) return;
		
		var left = 0;
		var right = 0;

		if (node.left) left = node.left.priority;
		if (node.right) right = node.right.priority;

		if (Math.max(left,right) > node.priority) {
			if (left > right) {
				this.shiftNodeUp(node.left);
				this.shiftNodeDown(node);
			} else {
				this.shiftNodeUp(node.right);
				this.shiftNodeDown(node);
			}
		}
	}
}

module.exports = MaxHeap;
