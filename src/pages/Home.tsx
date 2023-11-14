import { Link } from "react-router-dom";
import { colors } from "../theme/color";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col gap-10">
        <Link to={"/game"}>
          <div
            className="w-60 rounded-xl h-20 border-2 flex justify-center items-center text-2xl"
            style={{
              backgroundColor: `${colors.line_two_color}`,
              color: "white",
            }}
          >
            {"Game Start"}
          </div>{" "}
        </Link>
        <Link to={"/how-to"}>
          <div
            className="w-60 h-20 rounded-xl border-2 flex justify-center items-center text-2xl"
            style={{
              backgroundColor: `${colors.line_three_color}`,
              color: "white",
            }}
          >
            {"How to"}
          </div>
        </Link>
      </div>
    </div>
  );
}
