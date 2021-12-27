class SingleLinkList {
    constructor() {
        this.head = null
        this.length = 0
    }
    get data() {
        return this.head
    }
    append(data) {
        const node = new CreatedNode(data);
        if (!this.length) {
            this.head = node;
        } else {
            let curNode = this.head;
            while (curNode.next) {
                curNode = curNode.next
            }
            curNode.next = node
        }
        this.length += 1
    }
    toString(sp = ' ') {
        let res = ''
        let curNode = this.head;
        while (curNode) {
            res = res + sp + curNode.data
            curNode = curNode.next
        }
        return res.slice(1)
    }
    insert(pos, data) {
        if(pos < 0 || pos + 1 > this.length) {
            // throw new Error('位置数据异常')
            return
        }
        const node = new CreatedNode(data);
        if(pos === 0) {
            node.next = this.head
            this.head = node
        } else {
            let curNode = this.head
            let idx = 0
            while(idx < pos - 1) {
                curNode = curNode.next
            }
            node.next = curNode.next
            curNode.next = node
        }
        this.length++
        return true
    }
    get(pos) {
        if(pos === 0) {
            return this.head.data
        } else if(pos >= this.length || pos < 0){
            return
        } else {
            let curNode = this.head
            let index = 0;
            while(index++ < pos) {
                curNode = curNode.next
            }
            return curNode.data
        }
    }
    get size () {
        return this.length
    }
    update(pos, data) {
        if(pos === 0) {
            this.head.data = data;
        } else if(pos >= this.length || pos < 0){
            return
        } else {
            let curNode = this.head
            let index = 0;
            while(index++ < pos) {
                curNode = curNode.next
            }
            curNode.data = data
        }
    }
    indexOf(data) {
        let curNode = this.head
        let index = 0
        while(curNode.data !== data) {
            curNode = curNode.next
            index++
        }
        return curNode ? index : -1
    }
    removeAt(pos) {
        if ((pos >= this.length || pos < 0)) {
            return
        }
        if (pos === 0) {
            this.head = this.head.next
        } else {
            let curNode = this.head
            let index = 0;
            while(index++ < pos - 1) {
                curNode = curNode.next
            }
            curNode.next = curNode.next.next
            return true
        }
        this.length--
    }
    remove(data) {
        if (this.head.data === data) {
            this.head = this.head.next;
        }
        let curNode = this.head
        let perNode = null
        while(curNode && curNode.data !== data) {
            perNode = curNode
            curNode = curNode.next
        }
        if (curNode) {
            perNode.next = curNode.next
            this.length--
        }
    }
    isEmpty() {
        return !this.length
    }
}
// 创建节点
class CreatedNode {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

const linkIns = new SingleLinkList()
linkIns.append('aaaa')
linkIns.append('bbbb')
linkIns.append('cccc')
linkIns.insert(1, 'ddd')
// linkIns.insert('eee', 1)
console.log(linkIns.toString());
console.log(linkIns.get(1));
linkIns.update(1, 'ddeee')
console.log(linkIns.toString());
console.log(linkIns.indexOf('bbbb'));
console.log(linkIns.removeAt(linkIns.size - 2));
console.log(linkIns.toString());
console.log(linkIns.remove('aaaa'));
console.log(linkIns.toString());
console.log(linkIns.data);