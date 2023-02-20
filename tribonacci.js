const triR = (n) => {
  if (n === 0 || n === 1 || n === 2) {
    return 1;
  }
  if (n == 3) {
    return 3;
  } else {
    return +triR(n - 1) + +triR(n - 2) + +triR(n - 3);
  }
};
const tri = num => {
    const res = [];
    for (let i = 1; i <= num; i++){
       res.push(triR(i));
    };
    return res
 };
console.log(tri(5));
// console.log(tri(6));
// console.log(tri(2));
// console.log(tri(9));
