import { useRecoilValue } from "recoil";
import { renderPiece } from "./render";
import { piecePositionState } from "../../recoil/atoms";

interface ISquare {
  x: number;
  y: number;
}

export default function Square({ x, y }: ISquare) {
  const piecePos = useRecoilValue(piecePositionState);
  return (
    <div
      className="border-2 flex justify-center items-center"
      style={{ width: "33.3%", height: "33.3%" }}
    >
      {renderPiece(x, y, piecePos[0], "역", 0)}
    </div>
  );
}
