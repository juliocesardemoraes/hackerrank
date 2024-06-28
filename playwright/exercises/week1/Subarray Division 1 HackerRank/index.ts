// D - Desired outcome : EX: I want 4
// M - Number of values that would compose 2

function birthday(s: number[], d: number, m: number): number {
  // Write your code here
  const possibleOutcome: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (i + m > s.length) break;

    let count: number = s[i];
    let nextPos = i + 1;
    let maxcount = m - 1;

    while (maxcount > 0) {
      count += s[nextPos];
      nextPos++;
      maxcount--;
    }

    if (count === d) {
      possibleOutcome.push(count);
      continue;
    }
  }

  return possibleOutcome.length;
}

console.log(birthday([2, 2, 1, 3, 2, 3, 1, 1, 2, 1], 4, 3));
