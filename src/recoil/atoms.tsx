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
