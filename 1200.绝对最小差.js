/**
 * @param {number[]} arr
 * @return {number[][]}
 * @descript
 * 给你个整数数组 arr，其中每个元素都 不相同。
 * 请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。
 */



 var minimumAbsDifference = function(arr) {
  let res = [];
  let minAbs = Infinity;
  arr.sort((a, b) => a - b);
  for(let i=0;i<arr.length;i++){
      const first = arr[i];
      const second = arr[i+1];
      const differ = Math.abs(first - second);
      let item = [first, second];
      if(minAbs > differ){
          minAbs = differ;
          res = [item];
      }else if(minAbs == differ){
          res.push(item);
      }
  }
  return res;
};