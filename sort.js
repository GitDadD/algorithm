const arr = [1, 2, 3, 5, 8, 2, 5, 2, 43, 45, 2, 12, 0]
// 冒泡
const bubbleSort = (arr) => {
    if (!Array.isArray(arr)) {
        return false
    }
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 1; i <= j; i++) {
            if (arr[i] < arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
            }
        }
    }
    return arr
}
console.log(bubbleSort(arr));
// 选择
function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let cueIdx = i
        for (let j = i; j < arr.length; j++) {
            if(arr[j] < arr[cueIdx]) {
                cueIdx = j
            }
        }
        [arr[i], arr[cueIdx]] = [arr[cueIdx], arr[i]]
    }
    return arr
}
console.log(selectSort(arr));
// 插入排序
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const curD = arr[i]
        let j = i
        while (arr[j - 1] > curD && j > 0) {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = curD
    }
    return arr
}
console.log(insertSort(arr));
