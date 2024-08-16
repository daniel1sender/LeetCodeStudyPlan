/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            //console.log(`i: ${i}`);
            //console.log(`j: ${j}`);
            //console.log(nums[i]);
            //console.log(nums[j]);
            if (i !== j) {
                sum = nums[i] + nums[j];
                if (sum === target) {
                    return [i, j];
                }
            }
        }
    }
};