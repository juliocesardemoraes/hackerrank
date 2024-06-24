const convertSampleToNumber = (input: string[]) => {
  const arrayInputNum: number[] = [];
  for (let i = 0; i < input.length; i++) {
    arrayInputNum.push(+input[i]);
  }
  return arrayInputNum;
};

export const getSampleInput = (inputString: string, isNum = false) => {
  const arrayInputString = inputString.split(" ");

  if (isNum === true) {
    return convertSampleToNumber(arrayInputString);
  } else {
    return arrayInputString;
  }
};
