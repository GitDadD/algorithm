class HashTable {
    constructor() {
        this.storage = [];
        this.count = 0;
        this.limit = 7;
    }
    // 哈希函数
    hashFn(str, size = this.limit) {
        let hashCode = 0;
        // 霍纳算法，来计算哈市Code 用质数37
        for(let i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(str[i])
        }
        return hashCode % size
    }
    put(key, val) {
        const index = this.hashFn(key);
        !this.storage[index] && (this.storage[index] = []);
        let bucket = this.storage[index];

        // 判断是否是修改数据
        for(let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] === key) {
                tuple[1] === val;
                return
            }
        }
        bucket.push([key, value])
        this.count++
    }
    get(key) {
        const index = this.hashFn(key);
        let bucket = this.storage[index] || [];
        // 查找
        for(let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] === key) {
                return tuple[1]
            }
        }
        return - 1
    }
    remove(key) {
        const index = this.hashFn(key);
        let bucket = this.storage[index] || [];
        // 查找删除
        for(let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] === key) {
                bucket.splice(i, 1)
                this.count--
                return true
            }
        }
        return false
    }
    isEmpty() {
        return !this.count
    }
}
const hashIns = new HashTable();
