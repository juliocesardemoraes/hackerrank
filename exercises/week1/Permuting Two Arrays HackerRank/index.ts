/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k: number, A: number[], B: number[]): string {
  // Write your code here
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => a - b);
  const sortedArrays =
    A[A.length - 1] > B[B.length - 1]
      ? { higher: A, lower: B }
      : { higher: B, lower: A };

  let backwardsPointer = sortedArrays.higher.length - 1;

  for (let i = 0; i < A.length; i++) {
    if (sortedArrays.higher[backwardsPointer] + sortedArrays.lower[i] < k)
      return "NO";

    backwardsPointer--;
  }

  return "YES";
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9]));

console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]));
