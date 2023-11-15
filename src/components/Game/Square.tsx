import { useRecoilState, useRecoilValue } from "recoil";
import { renderPiece } from "../Logic/render";
import { correctState, piecePositionState } from "../../recoil/atoms";
import { useDrop } from "react-dnd";
import { checkMove } from "../Logic/checkMove";

interface ISquare {
  x: number;
  y: number;
}

export interface IDrag {
  id: number;
  text: string;
}

export default function Square({ x, y }: ISquare) {
  const [piecePos, setPiecePos] = useRecoilState(piecePositionState);
  const correct = useRecoilValue(correctState);
  const drop = useDrop(
    () => ({
      accept: "piece",
      drop: (item: IDrag) => {
        const newPiecePos = [
          ...piecePos.slice(0, item.id),
          [x, y],
          ...piecePos.slice(item.id + 1),
        ];
        setPiecePos(newPiecePos);
      },
      canDrop: () => !checkMove(x, y, piecePos),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [piecePos]
  );
  return (
    <div
      ref={drop[1]}
      className="border-2 flex justify-center items-center"
      style={{ width: "33.3%", height: "33.3%" }}
    >
      {renderPiece(x, y, piecePos[0], correct[0], 0)}
      {renderPiece(x, y, piecePos[1], correct[1], 1)}
      {renderPiece(x, y, piecePos[2], correct[2], 2)}
      {renderPiece(x, y, piecePos[3], correct[3], 3)}
      {renderPiece(x, y, piecePos[4], correct[4], 4)}
      {renderPiece(x, y, piecePos[5], correct[5], 5)}
      {renderPiece(x, y, piecePos[6], correct[6], 6)}
      {renderPiece(x, y, piecePos[7], correct[7], 7)}
      {renderPiece(x, y, piecePos[8], correct[8], 8)}
    </div>
  );
}
