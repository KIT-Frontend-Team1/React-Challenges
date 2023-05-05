import { useRef, useState } from "react";
import "../../App.css";

// 1. 변수 관리, useRef를 사용하여 이전 값을 저장하는 참조 예시
// useState처럼 이벤트 발생시 화면이 계속 렌더링 된다면 성능향상에 좋지 않다.
// useRef를 이용하여 Ref 안에 저장된 값을 변화하지 않고 유지한 뒤 useState에서 상태 변경시 변경되어 저장된 값만 불러온다
const UseRef = () => {
  const [render, setRender] = useState(false);
  const countRef = useRef(0);
  let countVar = 0;

  console.log("➡️렌더링 후 Ref:", countRef.current);
  console.log("➡️렌더링 후 Var:", countVar);

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref up > ", countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log("Var up > ", countVar);
  };

  const doRender = () => {
    setRender(!render);
  };

  return (
    <div>
      <h2>useRef 예시 - 2</h2>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>

      <div>
        <button onClick={increaseRef}>Ref up</button>
        <button onClick={increaseVar}>Var up</button>
        <button onClick={doRender}>Render</button>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default UseRef;
