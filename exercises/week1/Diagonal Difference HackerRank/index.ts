function diagonalDifference(arr: number[][]): number {
  // Write your code here
  let rightSum = 0;
  let leftSum = 0;
  let leftPos = 0;
  let rightPosX = 0;
  let rightPosY = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    // Sum values
    rightSum += arr[rightPosX][rightPosY];
    leftSum += arr[leftPos][leftPos];

    // Update positions
    leftPos++;
    rightPosX++;
    rightPosY--;
  }
  return Math.abs(rightSum - leftSum);
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

// linha x coluna

// 0,0 1,1 2,2

// 0,2 1,1 2,0

console.log(diagonalDifference(array));

// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is
