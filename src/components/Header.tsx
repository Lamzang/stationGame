import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      className="absolute border-2"
      style={{ width: "100vw", height: "15vw" }}
    >
      <Link to={"/"}>
        <div className="flex justify-center items-center h-full text-3xl">
          Station Game
        </div>
      </Link>
    </div>
  );
}
