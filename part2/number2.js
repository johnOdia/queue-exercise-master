//Question: Implement a stack using 2 queues

const Queue = require('./number1')

function Stack(){
    this.primaryQueue = new Queue()
    this.secondaryQueue = new Queue()
}

Stack.prototype.push = function(val){
    return this.primaryQueue.enqueue(val)
}

Stack.prototype.pop = function(){
    while (this.primaryQueue.size() > 1) {
        this.secondaryQueue.enqueue(this.primaryQueue.dequeue())
    }
    let bottom = this.primaryQueue.dequeue()

    let temp = this.secondaryQueue
    this.secondaryQueue = this.primaryQueue
    this.primaryQueue = temp

    return bottom
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

stack.pop() //3