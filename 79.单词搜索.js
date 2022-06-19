/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// 回溯 + 深度优先遍历
 var exist = function(board, word) {
  const row = board.length;
  const col = board[0].length;
  // 用来记录经过过的字母
  let visited = new Array(row).fill(false).map(i=>new Array(col).fill(false));
  /**
      i: 当前下一个排查字母的横坐标
      j: 当前下一个排查字母的纵坐标
      index: 当前搜索到单词的第几个索引
   */
  var find = (i,j, index)=>{
      if(!board[i] || !board[i][j] || visited[i][j])return false; // 
      const curLetter = board[i][j];
      let nextLetter = word[index];
      if(curLetter && nextLetter === curLetter){
          // 找到字母，设为经过状态
          visited[i][j] = true;
          // 深度遍历相邻的字母是否可以找到单词
          if(index==word.length-1||find(i-1,j, index+1) || find(i,j+1, index+1) || find(i+1,j, index+1) || find(i,j-1, index+1)){
              return true
          }
          // 回溯字母为未经过状态
          visited[i][j] = false;
      }
      
      return false;
      
  }
  for(let i=0;i<row;i++){
      for(let j=0;j<col;j++){
          // 从单词的第一个字母开始查找
          if(find(i,j, 0)){
              return true;
          }
      }
  }
  return false;
};