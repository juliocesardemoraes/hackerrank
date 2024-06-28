"use strict";
/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function timeConversion(s: string) {
  // Write your code here
  // 12:01PM => 12:01
  // 12:01AM => 00:01
  // Write your code here
  const stringSplitted = s.split(":");
  const hours = stringSplitted[0];
  const minutes = stringSplitted[1];
  const seconds = `${stringSplitted[2][0]}${stringSplitted[2][1]}`;
  const amOrPM = `${stringSplitted[2][2]}${stringSplitted[2][3]}`;
  let transformedString = "";
  console.log(hours);

  if (amOrPM === "AM") {
    if (hours == "12") return `00:${minutes}:${seconds}`;

    transformedString = `${hours}:${minutes}:${seconds}`;
  } else {
    if (hours == "12") return `12:${minutes}:${seconds}`;

    transformedString = `${+hours + 12}:${minutes}:${seconds}`;
  }

  return transformedString;
}

const arrayTimer: string[] = [];

for (let i = 0; i < 12; i++) {
  arrayTimer.push(`0${i}:00:00PM`);
}

for (let i = 0; i < 12; i++) {
  arrayTimer.push(`${i}:00:00AM`);
}
for (let i = 0; i < arrayTimer.length; i++) {
  console.log(timeConversion("12:40:22AM"));
}
