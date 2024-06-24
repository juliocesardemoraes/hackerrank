/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
function lonelyinteger(a: number[]): number {
  const numbers: any = {};

  for (let i = 0; i < a.length; i++) {
    const number = a[i];
    console.log("type", typeof numbers[number]);
    if (typeof numbers[number] == "undefined") {
      numbers[number] = 1;
    } else {
      delete numbers[number];
    }
  }
  console.log(numbers);

  let uniqueInt: any = 0;

  for (const [key, value] of Object.entries(numbers)) {
    uniqueInt = key;
  }

  return uniqueInt;
}

//TEST
//console.log(lonelyinteger([0, 0, 1, 2, 1]));
