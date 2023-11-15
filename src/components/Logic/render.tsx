import Word from "../Game/Word";

export const renderPiece = (
  x: number,
  y: number,
  [pieceX, pieceY]: number[],
  text: string,
  id: number
) => {
  if (x === pieceX && y === pieceY) {
    return <Word id={id} text={text} />;
  }
};
