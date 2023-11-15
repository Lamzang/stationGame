import { useRecoilState, useRecoilValue } from "recoil";
import { correctState, piecePositionState } from "../../recoil/atoms";
import { useDrop } from "react-dnd";
import { renderPiece } from "../Logic/render";
import { IDrag } from "./Square";

interface IResult {
  x: number;
}

export default function Result({ x }: IResult) {
  const [piecePos, setPiecePos] = useRecoilState(piecePositionState);
  const correct = useRecoilValue(correctState);
  const drop = useDrop(
    () => ({
      accept: "piece",
      drop: (item: IDrag) => {
        const newPiecePos = [
          ...piecePos.slice(0, item.id),
          [x, -1],
          ...piecePos.slice(item.id + 1),
        ];
        setPiecePos(newPiecePos);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [piecePos]
  );
  return (
    <div
      ref={drop[1]}
      className=" flex justify-center items-center"
      style={{ width: "11.1%", height: "100%" }}
    >
      {renderPiece(x, -1, piecePos[0], correct[0], 0)}
      {renderPiece(x, -1, piecePos[1], correct[1], 1)}
      {renderPiece(x, -1, piecePos[2], correct[2], 2)}
      {renderPiece(x, -1, piecePos[3], correct[3], 3)}
      {renderPiece(x, -1, piecePos[4], correct[4], 4)}
      {renderPiece(x, -1, piecePos[5], correct[5], 5)}
      {renderPiece(x, -1, piecePos[6], correct[6], 6)}
      {renderPiece(x, -1, piecePos[7], correct[7], 7)}
      {renderPiece(x, -1, piecePos[8], correct[8], 8)}
    </div>
  );
}
