function Stack() {
    this.first = null
    this.last = null
    this.size = 0
}

function Node(value) {
    this.value = value
    this.next = null
    this.prev = null;
}

Stack.prototype.push = function (val) {
    let node = new Node(val)

    if (!this.first) {
        this.first = node
        this.last = node
    }
    else {
        this.first.next = node
        this.first.next.prev = this.first
        this.first = node
    }
    this.size++    
    return this.size
}

Stack.prototype.pop = function () {
    const temp = this.first    
    this.last = null
    this.size--    
    return temp.value
}

Stack.prototype.peek = function () {
    return this.first.value
}

Stack.prototype.print = function () {
    while(this.last){
        console.log(this.last.value);
        this.last = this.last.next 
    }  
}

module.exports = Stack