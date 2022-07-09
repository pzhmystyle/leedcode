/**
 * @param {number} n
 * @return {number}
 */
 var nextGreaterElement = function(n) {
  const str = n.toString();
  let newArr = str.split('');
  let reference = str[str.length-1];
  let referenceIdx = str.length-1;
  for(let i = str.length-2; i>=0; i--){
      if(Number(str[i])<Number(reference)){
          reference = str[i];
          referenceIdx = i;
          let minAbs = Infinity;
          let moveNum = str[i];
          let moveNumIdx = i;
          for(let j=i+1; j<str.length;j++){
              const differ = Math.abs(reference-str[j]);
              if(reference < str[j] && differ < minAbs){
                  minAbs = differ;
                  moveNum = str[j]
                  moveNumIdx = j;
              }
          }
          newArr[referenceIdx] = moveNum;
          newArr[moveNumIdx] = reference;
          const tail = newArr.slice(referenceIdx+1).sort((a, b)=> a-b);
          newArr.splice(referenceIdx+1)
          newArr = newArr.concat(tail)
          return Number(newArr.join('')) <=2147483647?Number(newArr.join('')):-1;
      }else{
          reference = str[i];
          referenceIdx = i;
      }
  }
  return -1;
};