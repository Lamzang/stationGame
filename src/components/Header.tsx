import { Link } from "react-router-dom";
import { colors } from "../theme/color";

export default function Header() {
  return (
    <div
      className="absolute border-2"
      style={{
        width: "100%",
        height: "15%",
        backgroundColor: `${colors.line_four_color}`,
      }}
    >
      <Link to={"/"}>
        <div className="flex justify-center items-center h-full text-3xl font-bold">
          Station Game
        </div>
      </Link>
    </div>
  );
}
