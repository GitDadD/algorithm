/**
 * 图论
 * 
 * 术语
 * 
 *  顶点：
 *  边：
 *  相邻顶点：
 *  度： 相邻顶点的数量
 *  路径：
 *      1、简单路径：不包含重复的节点
 *      2、回路：从一个顶点出发又回到同一个顶点
 *  无向图：没有方向， 互相可以走通
 *  有向图：有方向，只单向出发
 *  无权图：边没有权重，不代表什么意义（行走路线规划不好规划）
 *  带权图： 边有一定权重（距离长度， 距离算钱）
 * 
 *  表示
 *  
 *  
 */
const { Queue } = require('./queue.js')
class Graph {
    constructor() {
        this.vertexes = []; // 顶点
        this.edges = new Map(); // 边
    }
    get vertexesList() {
        return this.vertexes
    }
    // 添加点
    addVertexes(v) {
        this.vertexes.push(v)
        this.edges.set(v, [])
    }
    bulkAddVertexes(arr) {
        if(Array.isArray(arr)) {
            for (let i = 0; i < arr.length; i++) {
                this.addVertexes(arr[i])
            }
        }
    }
    // 添加边
    addEdge(v1, v2) {
        if (!this.edges.get(v1) || !this.edges.get(v2)) {
            return false
        }
        this.edges.get(v1).push(v2)
        this.edges.get(v2).push(v1)
        return true
    }
    toString() {
        return this.vertexes.reduce((acc, o) => {
            return acc = acc + o + '->' + this.edges.get(o).join(' ') + '\n'
        }, '')
    }
    initStatus() {
        return this.vertexes.reduce((acc, o) => {
            acc[o] = 'white';
            return acc
        }, {})
    }
    // 广度优先搜索
    BFS(initV, handler) {
        // 初始化状态
        let colors = this.initStatus();

        // 创建队列
        const queueIns = new Queue();
        queueIns.enqueue(initV)
        // console.log(this.edges);
        let v, vList
        while(!queueIns.isEmpty()) {
            v = queueIns.dequeue()
            vList = this.edges.get(v)
            colors[v] = 'grey'
            vList.forEach(o => {
                if (colors[o] === 'white') {
                    queueIns.enqueue(o)
                    colors[o] = 'grey'
                }
            })
            handler(v)
        }
    }
    // 深度优先搜索
    DFS(initV, handler) {
        const colors = this.initStatus();
        this.dfsView(initV,colors,  handler)
    }
    dfsView(v, colors, handler) {
        colors[v] = 'grey'
        handler(v)
        this.edges.get(v)?.forEach(o => {
            if (colors[o] === 'white' ) {
                this.dfsView(o, colors, handler)
            }
        })
        colors[v] = 'block';
    }
}



const ins = new Graph()
ins.bulkAddVertexes(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'])
ins.addEdge('A', 'B')
ins.addEdge('A', 'C')
ins.addEdge('A', 'D')
ins.addEdge('C', 'D')
ins.addEdge('C', 'G')
ins.addEdge('D', 'G')
ins.addEdge('D', 'H')
ins.addEdge('B', 'E')
ins.addEdge('B', 'F')
ins.addEdge('E', 'I')
// console.log(ins.toString());
let res = ''
// ins.BFS(ins.vertexesList[0], (v) => {
//     res += v + '--'
// })
ins.DFS(ins.vertexesList[0], (v) => {
    res += v + '--'
})
console.log(res);

