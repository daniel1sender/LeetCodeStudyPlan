/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const n = words.length;
    const result = [];

    for (let i = 0 ; i < n ; i++){
        for (let j=0 ; j <n; j++){
            if (i !==j && words[j].includes(words[i])){
                result.push(words[i]);
                break;
            }
        }
    }
    return result;
};