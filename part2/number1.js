//Question: Given a doubly linked list, implement a queue

const DoublyLinkedList = require('./modules/doublyLinkedList')

class Queue{
    constructor () {
        this.Queue = new DoublyLinkedList()
    }
    enqueue(value){
        return this.Queue.push(value)
    }
    dequeue(){
        return this.Queue.shift()
    }
    peek(){
        return this.Queue.head.val
    }
    size(){
        return this.Queue.length
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
queue.peek()

module.exports = Queue