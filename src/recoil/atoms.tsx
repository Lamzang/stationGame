import { atom } from "recoil";

export const piecePositionState = atom({
  key: "piecePositionState",
  default: [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [0, 2],
    [1, 2],
    [2, 2],
  ],
});

export const scoreState = atom({
  key: "scoreState",
  default: 0,
});

export const correctState = atom({
  key: "correctState",
  default: ["역", "삼", "역", "삼", "역", "삼", "역", "삼", "역"],
});
