class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (!this.left) {
			node.parent = this;
			this.left = node;
		} else if (!this.right) {
			node.parent = this;
			this.right = node;
		}
	}

	removeChild(node) {
		if (this.left === node) {
			this.left = null;
			node.parent = null;
		} else if (this.right === node) {
			this.right = null;
			node.parent = null;
		} else {
			throw new Error('Node is not a child of this node!');
		}
	}

	remove() {
		if (!this.parent) return;
		this.parent.removeChild(this);
	}

	swapWithParent() {
		if (!this.parent) return;
		
		var oldParentRight = this.parent.right;
		var oldParentLeft = this.parent.left;
		var oldParentParent = this.parent.parent;

		var oldChildLeft = this.left;
		var oldChildRight = this.right;

		if (this.parent.parent && this.parent.parent.left === this.parent) {
			this.parent.parent.left = this;
		} else if (this.parent.parent && this.parent.parent.right === this.parent) {
			this.parent.parent.right = this;
		}

		if (this.left) {
			this.left.parent = this.parent;
		}
		if (this.right) {
			this.right.parent = this.parent;
		}
		
		this.parent.parent = this;
		if (this.parent.left && this.parent.left === this) {
			this.left = this.parent;
			this.right = oldParentRight;
			if (this.parent.right) { 
				this.parent.right.parent = this;
			}
			this.parent.right = oldChildRight;
			this.parent.left = oldChildLeft;
		} else if (this.parent.right && this.parent.right === this) {
			this.left = oldParentLeft;
			this.right = this.parent;
			if (this.parent.left) {
				this.parent.left.parent = this;
			}
			this.parent.left = oldChildLeft;
			this.parent.right = oldChildRight;
		} 
		this.parent = oldParentParent;
	}
}

module.exports = Node;
