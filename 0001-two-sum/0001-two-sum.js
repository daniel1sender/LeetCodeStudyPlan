/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const pairIndex = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];

        if (target - currentNum in pairIndex) {
            return [i, pairIndex[target - currentNum]];
        }
        pairIndex[currentNum] = i;
    }
};