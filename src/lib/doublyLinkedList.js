const Node = require('./listNode.js')

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addFirst(item) {
        let node = new Node(item);

        if (!this.tail) {
            this.tail = node;
        }
        if (this.head) {
            node.next = this.head;
            this.head.prev = node;
        }
        this.head = node;
    }

    addLast(item) {
        let node = new Node(item);

        if (!this.head) {
            this.head = node;
        }
        if (this.tail) {
            node.prev = this.tail;
            this.tail.next = node;
        }
        this.tail = node;
    }

    getFirst() {
        if (this.head) return  this.head.data;
    }

    getLast() {
        if (this.tail) return this.tail.data;
    }

    removeFirst() {
        if (this.head) return this.remove(this.head.data);
    }

    removeLast() {
        if (this.tail) return this.remove(this.tail.data);
    }

    wasRemoved(item) {
        return this.remove(item) ? true : false;
    }

    remove(item) {
        let current = this.head;
        while (current) {
            if (current.data === item) {
                if (current == this.head && current == this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current == this.head) {
                    this.head = this.head.next
                    this.head.prev = null
                } else if (current == this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                return current.data;
            }
            current = current.next
        }
    }

    toArray() {
        return Array.from(this.values());
     }

    *values() {
        let current = this.head;
        while (current) {
            yield current.data;
            current = current.next;
        }
    }


}

module.exports = DoublyLinkedList