/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
// 爆破
var findKthBit$1 = function (n, k) {
    //     S1 = "0"
    // 当 i > 1 时，Si = Si-1 + "1" + reverse(invert(Si-1))
    function reverse(str) {
        return [...str]
            .map((s) => (s === '0' ? '1' : '0'))
            .reverse()
            .join('');
    }
    function getS(n) {
        if (n === 1) {
            return '0';
        }
        return getS(n - 1) + '1' + reverse(getS(n - 1));
    }
    return getS(n)[k - 1];
};
