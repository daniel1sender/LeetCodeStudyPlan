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

            arrayIndex.forEach((value, index) => {
                if (index === 0 || index === arrayIndex.length - 1) {
                    newArrayIndex.push(value);
                }
            });

            if (newArrayIndex.length === 1) {
                newArrayIndex.push(newArrayIndex[0]);
            }
            return newArrayIndex;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return [-1, -1];

};