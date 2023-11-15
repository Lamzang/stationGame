import { line_first_char, makeGameArray } from "../../data/preprocessing";

export const makeArray = (array: string[]) => {
  const charArray = line_first_char(array);
  return makeGameArray(array, charArray);
};

export const isCorrect = (
  positionArray: number[][],
  correctArray: string[],
  stationArray: string[]
) => {
  console.log(positionArray);
  let resultArray = ["", "", "", "", "", "", "", "", ""];
  for (let i = 0; i < 9; i++) {
    if (positionArray[i][1] === -1) {
      resultArray[positionArray[i][0]] = correctArray[i];
    }
  }
  resultArray = resultArray.filter((char) => char !== "");
  const resultString = resultArray.join("");
  console.log(resultString);
  if (stationArray.includes(resultString)) {
    return true;
  }
  return false;
};
