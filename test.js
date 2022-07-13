line = readline();
let arr = [];
for (let i = 0; i < line; i++) {
  const time = readline();
  arr.push(time);
}

// arr.sort((a, b)=>{
//     const pre = a.split(":");
//     const next = b.split(":");
//     for (let k = 0; k < pre.length; k++) {
//       if (Number(pre[k]) > Number(next[k])) {
//         return 1
//       } else if (Number(pre[k]) < Number(next[k])) {
//         return -1
//       }
//     }
// })

for (let i = 0; i <arr.length; i++) {
  for (let j = 0; j < arr.length-i-1; j++) {
    const pre = arr[j].split(":");
    const next = arr[j+1].split(":");
    for (let k = 0; k < pre.length; k++) {
      if (Number(pre[k]) > Number(next[k])) {
        change(j + 1, j);
        break;
      } else if (Number(pre[k]) < Number(next[k])) {
        break;
      }
    }
  }
}

function change(i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
for (let i = 0; i < arr.length; i++) {
  print(arr[i])
}
