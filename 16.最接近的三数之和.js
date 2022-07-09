/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 双指针和排序:
// 先排序，否则毫无规律可以进行计算
// 计算sum = a+b+c和target的绝对值差的最小值，设a的下标为i, 定义b的下标为 = i+1, c的下标为len-1
// 当target>sum时：b++，当target<sum时：c--,每次更新sum时，去比较sum和target的绝对值差，得出最接近target的sum值。
 var threeSumClosest = function(nums, target) {
  let res = Infinity;
    // 先按照升序排序；
    nums.sort((a, b)=>a-b);
    for(let i=0;i<nums.length-2;i++){
        let b = i+1;
        let c = nums.length-1;
        let a = nums[i]
        while(b<c){
            let sum = a+nums[b]+nums[c];
            if(target==sum){
                return sum;
            }
            if(Math.abs(target-res)> Math.abs(target-sum)){
                res = sum;
            }
            if(target>sum){
                b += 1;
            }else{
                c -= 1;
            }
        }
    }
    return res;
};