/**
 * 暴力破解
 * @param {number[]} asteroids
 * @return {number[]}
 */
 var asteroidCollision = function(asteroids) {
  let i=0;
  while(i<asteroids.length){
      if(asteroids[i]>=0 && asteroids[i+1]<0){
          if(asteroids[i]>(-asteroids[i+1])){
              asteroids.splice(i+1,1);
          }else if(asteroids[i]<(-asteroids[i+1])){
              asteroids.splice(i,1);
          }else{
              asteroids.splice(i,2);
          }
          i--
      }else{
          i++;
      }
  }
  return asteroids;
};

/**
 * 栈结构
 * @param {number[]} asteroids
 * @return {number[]}
 */
 var asteroidCollision = function(asteroids) {
  const stack = [];
  for(let plant of asteroids){
      let ok = true;
      while(ok && stack.length && stack[stack.length-1]>=0 && plant<0){
          const top = stack[stack.length-1];
          if(top<=-plant){
              stack.pop();
          }
          if(top>=-plant){
              ok=false;
          }
      }
      ok && stack.push(plant);
  }
  return stack;
};