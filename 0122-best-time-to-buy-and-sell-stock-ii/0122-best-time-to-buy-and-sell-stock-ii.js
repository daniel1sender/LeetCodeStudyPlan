/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let minPrice = Infinity;
    let position;
    let finalProfit = 0

    for (let i = 0; i < prices.length; i++) {
        position = prices[i];
        if (position < minPrice) {
            minPrice = position;
        }

        profit = position - minPrice;
        if (profit > 0) {
            minPrice = position;
            finalProfit += profit;
        }
    }
    return finalProfit;
};