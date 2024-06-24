/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
  const arrValues = {
    leftDiagonal: 0,
    rightDiagonal: 0,
  };
  let leftPos = 0;

  const rightPos: { x: number; y: number } = {
    x: 0,
    y: arr[0].length - 1,
  };

  for (let i = 0; i < arr[0].length; i++) {
    if (arr[leftPos][leftPos]) {
      arrValues.leftDiagonal += arr[leftPos][leftPos];
      leftPos++;
    }

    if (arr[rightPos.x][rightPos.y]) {
      arrValues.rightDiagonal += arr[rightPos.x][rightPos.y];
      rightPos.x++;
      rightPos.y--;
    }
  }
  return Math.abs(arrValues.leftDiagonal - arrValues.rightDiagonal);
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
