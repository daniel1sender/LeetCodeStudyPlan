/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1; 

    if (n < 0) {
        x = 1 / x; 
        n = -n;  
    }

    let half = myPow(x, Math.floor(n / 2));

    return (n % 2 === 0) ? half * half : x * half * half;
};