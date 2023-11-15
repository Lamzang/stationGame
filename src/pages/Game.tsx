import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Square from "../components/Game/Square";
import Result from "../components/Game/Result";
import {
  line_first_char,
  line_first_station,
  makeGameArray,
} from "../data/preprocessing";
import { useRecoilState } from "recoil";
import { correctState, piecePositionState, scoreState } from "../recoil/atoms";
import { isCorrect } from "../components/Logic/handleScore";

export default function Game() {
  const [correct, setCorrect] = useRecoilState(correctState);
  const [positionArray, setPositionArray] = useRecoilState(piecePositionState);
  const [score, setScore] = useRecoilState(scoreState);
  const squares = [];
  for (let i = 0; i < 9; i++) {
    const x = i % 3;
    const y = Math.floor(i / 3);
    squares.push(<Square key={i} x={x} y={y} />);
  }
  const onClick = () => {
    if (isCorrect(positionArray, correct, line_first_station)) {
      const charArray = line_first_char(line_first_station);
      const correctArr = makeGameArray(line_first_station, charArray);
      setCorrect(correctArr);
      setScore(score + 10);
      setPositionArray([
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
        [1, 1],
        [2, 1],
        [0, 2],
        [1, 2],
        [2, 2],
      ]);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col justify-center items-center w-full h-screen gap-10 bg-gray-200">
        <div style={{ width: "80%", height: "20%" }}></div>
        <div style={{ backgroundColor: "white", width: "60%", height: "60%" }}>
          <div
            className="border-2 flex flex-wrap"
            style={{ width: "100%", height: "100%" }}
          >
            {squares}
          </div>
        </div>

        <div
          className="border-2 flex flex-row bg-gray-300"
          style={{
            width: "80%",
            height: "20%",
          }}
        >
          {<Result x={0} />}
          {<Result x={1} />}
          {<Result x={2} />}
          {<Result x={3} />}
          {<Result x={4} />}
          {<Result x={5} />}
          {<Result x={6} />}
          {<Result x={7} />}
          {<Result x={8} />}
        </div>
        <div
          className="border-2 flex justify-around items-center text-2xl bg-gray-400 font-bold"
          style={{
            width: "80%",
            height: "15%",
          }}
        >
          <div>{score}</div>
          <div>
            <button onClick={onClick}>제출</button>
          </div>
        </div>
        <div style={{ width: "80%", height: "1%" }}></div>
      </div>
    </DndProvider>
  );
}
