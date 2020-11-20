function Node(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
}

function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

DoublyLinkedList.prototype.push = function (val) {
    let node = new Node(val)

    if (!this.head) {
        this.head = node
        this.tail = node
    }
    else {
        this.tail.next = node
        this.tail.next.prev = this.tail
        this.tail = node
    }
    this.length++
    return this
}

DoublyLinkedList.prototype.pop = function () {
    let current = this.head;
    let removedNode = this.tail
    if (!this.head) return

    while (current) {
        if (current.next === null) {
            current.prev.next = null
            this.tail = current.prev
            this.length--
        }
        current = current.next
    }
    return removedNode.val
}

DoublyLinkedList.prototype.unshift = function (val) {
    const node = new Node(val)
    if (!this.head) {
        this.head = node
        this.tail = node
    }
    else {
        let currentHead = this.head
        currentHead.prev = node
        this.head = node
        this.head.next = currentHead
        this.head.prev = null
    }
    this.length++
    return this
}

DoublyLinkedList.prototype.shift = function () {
    const removedNode = this.head
    if (!this.head) return undefined
    else if (this.length === 1) this.head = null
    else {        
        this.head = this.head.next
        this.head.prev = null
    }
    this.length--
    return removedNode.val
}

DoublyLinkedList.prototype.set = function (index,val) {
    let indexCounter = -1
    let current = this.head

    while(current){
        indexCounter++
        if(index === indexCounter) current.val = val
        current = current.next
    }
}

DoublyLinkedList.prototype.get = function (index) {
    let indexCounter = -1
    let current = this.head

    while(current){
        indexCounter++
        if(index === indexCounter) return current.val 
        current = current.next
    }
    return null
}

DoublyLinkedList.prototype.insert = function (index,val) {
    const node = new Node(val)
    let indexCounter = -1
    let current = this.head

    while(current){
        indexCounter++
        if(index === indexCounter){
            node.prev = current.prev
            current.prev.next = node
            current.prev = node
            node.next = current
        }
        current = current.next
    }
    this.length++ 
}

DoublyLinkedList.prototype.remove = function (index) {
    let indexCounter = -1
    let current = this.head

    while(current){
        indexCounter++
        if(index === indexCounter){
            current.prev.next = current.next
            current.next.prev = current.prev
        }
        current = current.next
    }
    this.length--
    return null
}

DoublyLinkedList.prototype.reverse = function () {
    let current = this.head
    while(current){
        let temp = current.prev
        current.prev = current.next
        current.next = temp
        current = current.prev
    }
    let temp = this.tail
    this.tail = this.head
    this.head = temp    
}

module.exports = DoublyLinkedList