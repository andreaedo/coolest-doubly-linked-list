const Node = require('./listNode.js')

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

 /**
 * Add element as head of the list
 * @param item the element to add
 */
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

/**
* Add element as tail of the list
* @param item value of the element to add
*/
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

/**
* Get the head of the list
* @return data stored in the node, undefined if the list is empty
*/
    getFirst() {
        if (this.head) return this.head.data;
    }

/**
* Get the tail of the list
* @return data stored in the node, undefined if the list is empty
*/
    getLast() {
        if (this.tail) return this.tail.data;
    }

/**
* Remove the head of the list
* @return data stored in the node, undefined if the list is empty
*/
    removeFirst() {
        if (this.head) return this.removeNode(this.head.data);
    }

/**
* Remove the tail of the list
* @return data stored in the node, undefined if the list is empty
*/
    removeLast() {
        if (this.tail) return this.removeNode(this.tail.data);
    }

/**
* Remove a specific element from the list
* @param item value of the element to remove
* @return true if the element is removed, else false
*/
    remove(item) {
        return this.removeNode(item) ? true : false;
    }

/**
* Remove a specific element from the list
* @param item value of the element to remove
* @return data stored in the node, undefined if the list is empty
*/
    removeNode(item) {
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

/**
* Transform the list into an array
* @return array containing values of the nodes
*/
    toArray() {
        return Array.from(this.values());
    }

/**
* Iterates through the elemtents of the list
*/
    *values() {
        let current = this.head;
        while (current) {
            yield current.data;
            current = current.next;
        }
    }


}

module.exports = DoublyLinkedList