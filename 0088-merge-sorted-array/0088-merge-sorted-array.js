/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let j = 0;
    nums1.forEach((value, index) => {
        if (value === 0) {
            for (let i = j; i < nums2.length; i++) {
                nums1[index] = nums2[i];
                break;
            }
            j++;
        };
    });
    const l = nums1.length;
    for (let i = 0; i < l - 1; i++) {
        for (let j = 0; j < l - i - 1; j++) {
            if(nums1[j] > nums1[j + 1]){
                const temp = nums1[j];
                nums1[j] = nums1[j + 1];
                nums1[j + 1] = temp;
            }
        }
    }
};