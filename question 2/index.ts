/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function miniMaxSum(arr: number[]): void {
  arr.sort();
  const minMax = {
    min: 0,
    max: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) minMax.min += arr[i];
    if (i > 0) minMax.max += arr[i];
  }
  console.log(`${minMax.min} ${minMax.max}`);
}
