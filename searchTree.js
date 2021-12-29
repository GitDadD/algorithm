
class CreatedNode {
    constructor(key, val) {
        this.key = key;
        // this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }
    get data() {
        return this.root
    }
    insert(key) {
        let newNode = new CreatedNode(key)
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode) {
        // 插左边
        if (newNode.key <= node.key) {
            node.left ? this.insertNode(node.left, newNode) : (node.left = newNode)
        } else { // 插右边
            node.right ? this.insertNode(node.right, newNode) : (node.right = newNode)  
        }
    }
    // 先序遍历(根左右)
    preOrderTraversal (handle) {
        return this.preOrderTraversalNode(this.root, handle)
    }
    preOrderTraversalNode(node, handle) {
        handle(node.key)
        if(node.left) {
            this.preOrderTraversalNode(node.left, handle)
        } 
        if(node.right){
            this.preOrderTraversalNode(node.right, handle)
        }
    }
    // 中序遍历(左根右)
    midOrderTraversal(handle) {
        return this.midOrderTraversalNode(this.root, handle)
    }
    midOrderTraversalNode(node, handle) {
        if(node.left) {
            this.midOrderTraversalNode(node.left, handle)
        } 
        handle(node.key)
        if(node.right){
            this.midOrderTraversalNode(node.right, handle)
        }
    }
    // 后序遍历(左右根)
    aftOrderTraversal(handle) {
        return this.aftOrderTraversalNode(this.root, handle)
    }
    aftOrderTraversalNode(node, handle) {
        if(node.left) {
            this.aftOrderTraversalNode(node.left, handle)
        } 
        if(node.right){
            this.aftOrderTraversalNode(node.right, handle)
        }
        handle(node.key)
    }
    // 获取最小值
    get min() {
        if (!this.root) {
            return null
        }
        let node = this.root;
        while(node.left) {
            node = node.left
        }
        return node.key
    }
    // 获取最大值
    get max() {
        if (!this.root) {
            return null
        }
        let node = this.root;
        while(node.right) {
            node = node.right
        }
        return node.key
    }
    find(key) {
        let node = this.root
        while(node) {
            if (node.key === key) {
                return {
                    key: node.key
                    //    value: ''
                }
            }
            if (key < node.key) {
                node = node.left
            }
            if (key > node.key) {
                node = node.right
            }
        }
        return null
    }
}

res = ''
const ins = new BinarySearchTree()
ins.insert(11)
ins.insert(7)
ins.insert(8)
ins.insert(9)
ins.insert(3)
ins.insert(13)
ins.insert(5)
ins.insert(4)
ins.insert(23)
ins.insert(1)
ins.insert(25)
ins.insert(15)
ins.insert(16)
// console.log(ins.data);
// ins.preOrderTraversal((key) => {
//     res = res + key + '-'
// });
// ins.midOrderTraversal((key) => {
//     res = res + key + '-'
// });
ins.aftOrderTraversal((key) => {
    res = res + key + '-'
});
console.log(ins.min);
console.log(ins.max);
console.log(ins.find(13));
console.log(res);