/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr: number[]): number[] {
  // Write your code here
  const arrResult = Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    arrResult[number] += 1;
  }
  return arrResult;
}
