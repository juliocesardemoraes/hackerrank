function pangrams(s: string): string {
  // Write your code here
  let alphabet = "abcdefghijklmnopqrstuvxz";
  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    alphabet = alphabet.replace(s[i], "");
  }
  return alphabet.length > 0 ? "not pangram" : "pangram";
}

pangrams("qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun");
