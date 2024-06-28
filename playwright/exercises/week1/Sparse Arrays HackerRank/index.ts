/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings: string[], queries: string[]): number[] {
  const repeatablePatterns = new Array(queries.length).fill(0);

  for (let i = 0; i < strings.length; i++) {
    for (let x = 0; x < queries.length; x++) {
      if (strings[i] === queries[x]) repeatablePatterns[x] += 1;
    }
  }
  return repeatablePatterns;
}

matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]);
