//Question: Implement a queue using 2 stacks

const Stack = require('./modules/stack')

const Queue = function(){
    this.primaryStack = new Stack()
    this.secondaryStack = new Stack()
}

Queue.prototype.enqueue = function(val){
    return this.primaryStack.push(val)
}

Queue.prototype.dequeue = function(){
    while (this.primaryStack.length > 0) {
        this.secondaryStack.push(this.primaryStack.pop())
    }

    let bottom = this.primaryStack.pop()

    let temp = this.secondaryStack
    this.secondaryStack = this.primaryStack
    this.primaryStack = temp

    return bottom
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue() //3