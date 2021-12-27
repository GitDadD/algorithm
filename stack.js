class Stack {
    constructor() {
        this.stackArr = []
    }
    push(item) {
        this.stackArr.push(item)
    }
    pop() {
        return this.stackArr.pop()
    }
    get length () {
        return this.stackArr.length
    }
    get peek(){
        return this.stackArr[this.stackArr.length - 1]
    }
    toString() {
        return this.stackArr.reduce((str, item)=> (str + item), '')
    } 
}

// let stackIns = new Stack()
// stackIns.push(1)
// stackIns.push(2)
// stackIns.push(3)
// stackIns.push(4)
// stackIns.push(5)
// console.log(stackIns.stackArr);

// stackIns.pop()
// stackIns.pop()
// stackIns.pop()
// console.log(stackIns.stackArr);
// console.log(stackIns.peek);
// console.log(stackIns.toString());
// 10进制转2进制
const decToBin = (decNum) => {
    let stackIns2 = new Stack()
    
    while(decNum > 0) {
        stackIns2.push(decNum % 2)
        decNum = Math.floor(decNum / 2)
    }
    console.log(stackIns2.stackArr);
    let res = ''
    const length = stackIns2.stackArr.length;
    for(let i = 0; i < length; i++) {
        res += stackIns2.pop()
    }
    return res
}
console.log(decToBin(10));
