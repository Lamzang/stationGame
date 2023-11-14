import { useDrag } from "react-dnd";

interface IWord {
  id: number;
  text: string;
}

export default function Word({ id, text }: IWord) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "piece",
    item: { id: id, text: text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className="text-3xl text-black flex justify-center items-center"
      style={{
        width: "95%",
        height: "95%",
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      {text}
    </div>
  );
}
