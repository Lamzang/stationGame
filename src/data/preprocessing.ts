import data from "./station.json";

const dataArray = data.DATA;

export const line_first_station = dataArray
  .filter((station) => station.line_num === "02호선")
  .map((station) => station.station_nm);

export const line_first_char = (array: string[]) => {
  let result: string[] = [];
  for (let i = 0; i < array.length; i++) {
    result = [...result, ...array[i].split("")];
  }
  return result;
};

export const makeGameArray = (correctArray: string[], charArray: string[]) => {
  const randomCorrect =
    correctArray[Math.floor(Math.random() * correctArray.length)].split("");
  console.log(randomCorrect);
  const randomAnything = [];
  for (let i = 0; i < 9 - randomCorrect.length; i++) {
    randomAnything.push(
      charArray[Math.floor(Math.random() * charArray.length)]
    );
  }
  return shuffleArray([...randomCorrect, ...randomAnything]);
};

const shuffleArray = (array: string[]) => {
  const resultArray = [];
  for (let i = 0; i < 9; i++) {
    const ranNum = Math.floor(Math.random() * array.length);
    resultArray.push(array[ranNum]);
    array.splice(ranNum, 1);
  }
  return resultArray;
};
