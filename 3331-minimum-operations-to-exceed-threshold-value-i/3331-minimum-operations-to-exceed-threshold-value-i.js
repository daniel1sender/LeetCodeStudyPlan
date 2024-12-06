/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === k) {
            let count = nums.filter((num) => num < nums[mid]).length;
            return count;
        } else if (nums[mid] < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

    }
    return left;
};