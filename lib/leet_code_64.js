// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid) {
  let m = grid.length; //height
  let n = grid[0].length; //width

  let table = new Array(m).fill().map(() => new Array(n).fill(Infinity));  //outer arr of length m, each ele is a new arr of length n 
  table[0][0] = grid[0][0]; //path from top left to top left

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if (j < n - 1) {
        table[i][j + 1] = Math.min(table[i][j] + grid[i][j + 1], table[i][j + 1]);  //deciding right neighbor
      }

      if (i < m - 1) {
        table[i + 1][j] = Math.min(table[i][j] + grid[i + 1][j], table[i + 1][j]);  //deciding down neighbor
      }
    }
  }

  return table[m - 1][n - 1];
}