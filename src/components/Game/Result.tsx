import { useRecoilState } from "recoil";
import { piecePositionState } from "../../recoil/atoms";
import { useDrop } from "react-dnd";
import { renderPiece } from "./render";

interface IResult {
  x: number;
}

interface IDrag {
  id: number;
  text: string;
}

export default function Result({ x }: IResult) {
  const [piecePos, setPiecePos] = useRecoilState(piecePositionState);
  const [{ isOver, canDrop }, drop] = useDrop(
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
      ref={drop}
      className="border-2 flex justify-center items-center"
      style={{ width: "25%", height: "100%" }}
    >
      {renderPiece(x, -1, piecePos[0], "역", 0)}
    </div>
  );
}
