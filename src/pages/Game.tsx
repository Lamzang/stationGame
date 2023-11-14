import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Square from "../components/Game/Square";
import Result from "../components/Game/Result";

export default function Game() {
  const squares = [];
  for (let i = 0; i < 9; i++) {
    const x = i % 3;
    const y = Math.floor(i / 3);
    squares.push(<Square x={x} y={y} />);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col justify-center items-center w-full h-screen gap-20">
        <div>
          <div
            className="border-2 flex flex-wrap"
            style={{ width: "60vw", height: "60vw" }}
          >
            {squares}
          </div>
        </div>

        <div
          className="border-2 flex flex-row"
          style={{ width: "80vw", height: "20vw" }}
        >
          {<Result x={0} />}
          {<Result x={1} />}
          {<Result x={2} />}
          {<Result x={3} />}
        </div>
      </div>
    </DndProvider>
  );
}
