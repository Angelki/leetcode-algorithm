/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const len = nums.length,
        res = [];
    if (nums.length < 3 || !nums) return [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let low = i + 1,
            high = len - 1;
        while (low < high) {
            const sum = nums[i] + nums[low] + nums[high];
            if (sum === 0) {
                res.push([nums[i], nums[low], nums[high]]);
                while (low < high && nums[high] === nums[high - 1]) high--;
                while (low < high && nums[low] === nums[low + 1]) low++;
                low++;
                high--;
            } else if (sum > 0) {
                high--;
            } else if (sum < 0) {
                low++;
            }
        }
    }
    return res;
};
