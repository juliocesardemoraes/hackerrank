function plusMinus(arr: number[]): void {
  // Write your code here
  const numberType = {
    positive: 0,
    negative: 0,
    zero: 0,
  };

  const responseArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) numberType.negative++;
    if (arr[i] > 0) numberType.positive++;
    if (arr[i] == 0) numberType.zero++;
  }

  console.log((numberType.positive / arr.length).toFixed(6));
  console.log((numberType.negative / arr.length).toFixed(6));
  console.log((numberType.zero / arr.length).toFixed(6));
}
