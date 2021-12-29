
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
            } else {
                node = node.right
            }
        }
        return null
    }
    remove(key) {
        let node = this.root
        let parent = null;
        let isLeft = false;
        while(node.key !== key) {
            parent = node
            if (key < node.key) {
                node = node.left
                isLeft = true
            } else {
                node = node.right
                isLeft = false
            }
            if (!node) {
                return false
            }
        }
        // 删除叶子节点
        if (!node.left && !node.right) {
            if (node === this.root) {
                this.root = null
            } else {
                isLeft ? (parent.left = null) : (parent.right = null)
            }
        }
        // 只有右子树
        else if(!node.left){
            if (node === this.root) {
                this.root = this.root.right
            } else {
                isLeft ? (parent.left = node.right) : (parent.right = node.right)
            }
        }// 只有左子树
        else if(!node.right) {
            if (node === this.root) {
                this.root = this.root.left
            } else {
                isLeft ? (parent.left = node.left) : (parent.right = node.left)
            }
        }
        // 左右都有
        else {
            const replaceNode = this.getReplace(node)
            replaceNode.left = node.left
            replaceNode.right = node.right
            if(node !== this.root) {
                isLeft ? (parent.left = replaceNode) : (parent.right = replaceNode)
            }
        }
        return true
    }
    // 寻找替换删除点的后继
    getReplace(removeNode) {
        let parent = removeNode;
        let node = removeNode.right;
        // 如果右侧节点直接就是替换的节点
        if (!node.left) {
            parent.right = node.right
            return node
        }
        while(node.left) {
            parent = node
            node = node.left
        }
        parent.left = node.right
        return node
    }
}

let res = ''
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
ins.insert(30)
// ins.insert(25)
ins.insert(15)
ins.insert(16)
ins.insert(26)
ins.insert(31)
// console.log(ins.data);
ins.preOrderTraversal((key) => {
    res = res + key + '-'
});
// ins.midOrderTraversal((key) => {
//     res = res + key + '-'
// });
// ins.aftOrderTraversal((key) => {
//     res = res + key + '-'
// });
// console.log(ins.min);
// console.log(ins.max);
// console.log(ins.find(13));
console.log(res);
console.log(ins.remove(23));
let res2 = ''
ins.preOrderTraversal((key) => {
    res2 = res2 + key + '-'
});
console.log(res2);