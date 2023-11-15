export const checkMove = (toX: number, toY: number, pieceData: number[][]) => {
  return pieceData.some(([px, py]) => px === toX && py === toY);
};
