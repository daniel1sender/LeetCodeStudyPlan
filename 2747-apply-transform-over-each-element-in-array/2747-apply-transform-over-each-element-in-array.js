/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let returnArray = []
    for (let i = 0; i < arr.length; i++) {
        returnArray[i] = fn(arr[i], i);
    }
    return returnArray
};