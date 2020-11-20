function Queue(){
    this.first = null
    this.last = null
    this.size = 0
}

function Node(value){
    this.value = value
    this.next = null
    this.prev = null
}

Queue.prototype.enqueue = function (val) {
    let node = new Node(val)

    if (!this.first) {
        this.first = node
        this.last = node
    }
    else {
        this.last.next = node
        this.last.next.prev = this.last
        this.last = node
    }
    this.size++    
    return this.size
}

Queue.prototype.dequeue = function () {
    let removedNode = this.first
    this.first.next = this.first
    this.first.next.prev = null
    this.size--
    return removedNode.value
}

Queue.prototype.peek = function () {
    return this.first.value
}

Queue.prototype.print = function () {
    while(this.last){
        console.log(this.last.value);
        this.last = this.last.next 
    }  
}