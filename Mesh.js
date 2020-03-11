// Function to traverse the matrix

function antiClockwiseSpiralPrint(m, n, arr) {
  let k = 0,
    l = 0;

  /* k - starting row index 
  m - ending row index 
  l - starting column index 
  n - ending column index */

  // initialize the count
  let counter = 0;

  // total number of elements in matrix
  let total = m * n;

  while (k < m && l < n) {
    if (counter == total) break;

    // Print the first column from the remaining columns
    for (let i = k; i < m; ++i) {
      console.log(arr[i][l]);
      counter++;
    }
    l++;

    if (counter == total) break;

    // Print the last row from
    // the remaining rows
    for (i = l; i < n; ++i) {
      console.log(arr[m - 1][i]);
      counter++;
    }
    m--;

    if (counter == total) break;

    // Print the last column
    // from the remaining columns
    if (k < m) {
      for (i = m - 1; i >= k; --i) {
        console.log(arr[i][n - 1]);
        counter++;
      }
      n--;
    }

    if (counter == total) break;

    // Print the first row
    // from the remaining rows
    if (l < n) {
      for (let i = n - 1; i >= l; --i) {
        console.log(arr[k][i]);
        counter++;
      }
      k++;
    }
  }
}

// Driver Code

// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

let len = arr.length;
let wid = arr[0].length;

antiClockwiseSpiralPrint(len, wid, arr);
