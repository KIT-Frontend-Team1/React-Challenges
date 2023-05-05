import { useEffect, useState } from "react";

const Example1 = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUp = () => {
    setCount((prev) => prev + 1);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // 1. 렌더링 될 때마다 업데이트 모두 실행
  // useEffect(() => {
  //   console.log("상태 변화가 있을 시 모두 렌더링");
  // });

  // // 2. 마운트(첫 화면 렌더링) + count가 업데이트 될 때만 실행
  // useEffect(() => {
  //   console.log("count 업데이트로 인한 렌더링");
  // }, [count]);

  // // 2. 마운트(첫 화면 렌더링) + name이 업데이트 될 때만 실행
  // useEffect(() => {
  //   console.log("name 업데이트로 인한 렌더링");
  // }, [name]);\

  // 3. 마운트 될 때만 실행 [] 빈배열 전달
  useEffect(() => {
    console.log("첫 화면만 딱 한 번 렌더링");
  }, []);

  return (
    <div>
      <h2>useEffect 예시1</h2>
      <p>⭐ 마운트, 업데이트의 경우 ⭐</p>
      <span>count: {count}</span>
      <button onClick={handleCountUp}>add +1</button>
      <input type="text" value={name} onChange={handleNameChange} />
      <span>이름: {name}</span>
      <p></p>
      <hr />
    </div>
  );
};

export default Example1;
