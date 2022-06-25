/**
 * @param {character[][]} matrix
 * @return {number}
 */
//  该题目才有暴力破解，需要找到规律是:
//  最大正方形的面积为取一个点，他的右下对角线所能构成的最大正方形的全部节点是否为1
//  是的话更新面积的最大值，不是的话计算最大正方形i-1和j-1的递归；
var maximalSquare = function(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let max = 0;
  for(let i = 0;i<row;i++){
      for(let j=0;j<col;j++){
          const point = matrix[i][j]
          if(point==='1'){
              max = Math.max(max, 1)
              check(i,j,i,j)
          }
      }
  }
  function check(i,j,pointi,pointj){
      if(i>=row || j>=col || matrix[i][j]==="0"){
          return;
      }
      let flag = true;
      for(let k=pointi;k<i;k++){
          if(matrix[k][j]==="0"){
              flag = false;
              return
          }
      }
      for(let k=pointj;k<j;k++){
          if(matrix[i][k]==="0"){
              flag = false;
              return
          }
      }
      if(flag){
          const base = i-pointi+1;
          max = Math.max(max, Math.pow(base,2))
          check(i+1,j+1,pointi, pointj);
      }
  }
  return max;
};