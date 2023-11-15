export default function HowTo() {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ backgroundColor: "gray", width: "100%", height: "100vh" }}
    >
      <div style={{ width: "100%", height: "15%" }}></div>
      <div className="border-2 w-3/5 h-3/5 bg-white rounded-3xl flex flex-col justify-around items-center">
        <div>게임하는 법</div>
        <div>1. 서울 지하철 2호선을 기준으로 역을 찾으면 된다!</div>
        <div>2. 역을 찾았으면 드래그해서 정답지에 두어라!</div>
        <div>{`3. 끝에 역은 생략해야 한다 ex) 강남역 -> 강남 `}</div>
      </div>
      <div style={{ width: "100%", height: "1%" }}></div>
    </div>
  );
}
