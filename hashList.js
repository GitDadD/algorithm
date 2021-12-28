class HashTable {
    constructor() {
        this.storage = [];
        this.count = 0;
        this.limit = 20;
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
        bucket.push([key, val])
        this.count++;
        if (this.count > this.limit * 0.75) {
            this.resize(this.getPrime(this.limit * 2))
        }
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
                setTimeout(() => {

                }, 0)
                return true
            }
        }
        return false
    }
    isEmpty() {
        return !this.count
    }
    resize(newLimit) {
        const oldStorage = this.storage;
        this.storage = [];
        this.count = 0;
        this.limit = newLimit;
        for(let i = 0; i < oldStorage.length; i++) {
            let bucket = oldStorage[i];
            if(!bucket) {
                continue
            }
            for (let m = 0; m < bucket.length; m++) {
                let bucketItem = bucket[i]
                this.put(bucketItem[0], bucketItem[1])
            }
        }
    }
    // 获取质数
    getPrime(num) {
        while(!this.isPrime(num)) {
            num++
        }
        return num
    }
    // 是否是质数
    isPrime(num) {
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if(num % 2 === 0) {
                return false
            }
            return true
        }
    }
}
const hashIns = new HashTable();
