/**
 * 合并期间数组
 * 数组a=[[4,6], [8,9]]
 * 数组b= [[1,3], [4,5], [6,8], [10,12]]
 * 将数组a合并到数组b中去，要求两个数组的期间不能重叠，
 * 结果：数组ab=[[1,3], [4,5],[6,8],[8,9],[10,12]]
 */

const a = [
  [4, 6],
  [9, 10]
];
const b = [
  [1, 2],
  [3, 5],
  [6, 8],
  [11, 12]
];
console.log("a", a);
console.log("b", b);
const c = merge(a, b);
console.log("c", c);

//  合并数组
function merge(a, b) {
  /*
      需要满足的条件
      1: 当n=0,m.right 是否小于n.left
      2：当n>0,且n<b.length-1,是否n.right < m.left 并且 (n+1).right < m.left
      3: 当n=b.length-1,m.left 是否大于n.right
    */
  for (let i = 0; i < a.length; i++) {
    const currentLeft = a[i][0];
    const currentRight = b[i][1];
    // 可以插入的位置索引
    let index;
    for (let j = 0; j < b.length; j++) {
      if (j === 0) {
        // 1: 当n=0,m.right 是否小于n.left
        if (b[j][0] > currentLeft) {
          index = j;
          break;
        }
      } else if (j > 0 && j < b.length) {
        // 2：当n>0,且n<b.length-1,是否(n-1).right < m.left 并且 n.right < m.left
        // 注意 n-1, n 和n , n+1对循环次数的影响
        if (b[j - 1][1] < currentLeft && b[j][0] > currentRight) {
          index = j;
          break;
        }
      } else if (j === b.length - 1) {
        // 3: 当n=b.length-1,m.left 是否大于n.right
        if (b[j][1] < currentLeft) {
          index = j + 1;
          break;
        }
      }
    }
    b.splice(index, 0, [currentLeft, currentRight]);
  }
}
