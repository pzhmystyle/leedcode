/**
 * @param {character[][]} matrix
 * @return {number}
 */

// 暴力破解法：
// 取arr[i][j]坐标, 判断坐标的向右和向下方向为1的最大值坐标（maxi,maxj）;
// 循环遍历maxi和maxj空间的值是否都为1，有0的话更新最大值坐标，没有0则输出面积结果；
var maximalRectangle = function(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    let area = 0;
    for(let i = 0;i<row;i++){
        for(let j=0;j<col;j++){
            const item = matrix[i][j];
            if(item === '1'){
                area = Math.max(1, area);
                let maxi=i;
                let maxj=j;
                while(matrix[i][maxj+1] && matrix[i][maxj+1]==='1'){
                    maxj = maxj+1;
                }
                while(matrix[maxi+1] && matrix[maxi+1][j]==='1'){
                    maxi = maxi+1;
                }
                check(i,j, maxi, maxj);
            }
        }
    }

    function check(i,j, maxi, maxj){
        for(let k=i;k<=maxi;k++){
            for(let l=j;l<=maxj;l++){
                if(matrix[k][l]==='0'){
                    check(i, j, k-1, maxj);
                    check(i, j, maxi, l-1);
                    return;
                }
            }
        }
        area = Math.max((maxi+1-i) * (maxj+1-j), area);
    }
    return area;
};