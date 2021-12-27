class Queue {
    constructor() {
        this.data = []
    }
    get data() {
        return this.data
    } 
    set data() {
    }
    enqueue(...args) {
        this.data.push(...args)
    }
    dequeue() {
        return this.data.shift()
    }
    get front() {
        return this.data[0]
    }
    isEmpty() {
        return !this.data.length
    }
    get size() {
        return this.data.length
    }
    toString(sp = ',') {
        return this.data .join(sp)
    }
}

// 击鼓传花
const drummingFlowers = (names, num) => {
    const queue = new Queue()
    queue.enqueue(...names)
    while(queue.size > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        queue.dequeue() 
    }
    return queue.front
}

// console.log(drummingFlowers(['a', 'b', 'c', 'd', 'e'], 7));
console.log(drummingFlowers(['a', 'b', 'c', 'd', 'e'], 3));

// 队列优先级



 
