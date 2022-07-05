/**
 * @param {number[]} nums
 * @return {number}
 * 解题思路：动态规划。
 * 用最简单的思路去想，假设只有一家房屋，dp[0]=nums[0];两家房屋，dp[1]=max(dp[0],nums[1]);dp表示能偷到的最大金额
 * 同理：dp[i] = max(dp[i-1], dp[i-2]+nums[i])；
 * 结果求dp[nums.length-1];
 * 空间优化: 考虑每个dp结果只和前两个dp的结果有关，可以使用滚动数组进行空间优化；
 */
 var rob = function(nums) {
    let first = nums[0];
    let second = Math.max(nums[0], nums[1]);
    for(let i=2; i<nums.length;i++){
        const temp = second
        second = Math.max(second,first + nums[i]);
        first = Math.max(temp, first);
    }
    return second || first;
};