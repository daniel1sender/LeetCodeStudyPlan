/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//O(log n) is bynary search
var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let arrayIndex = [];
    let newArrayIndex = [];

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {

            nums.forEach((value, index) => {
                if (value === target) arrayIndex.push(index);
            });
            let firstValue = arrayIndex.find((_, index) => index === 0)
            let lastValue = arrayIndex.find((_, index) => index === arrayIndex.length - 1);
            newArrayIndex.push(firstValue, lastValue);
            return newArrayIndex;

        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return [-1, -1];
};