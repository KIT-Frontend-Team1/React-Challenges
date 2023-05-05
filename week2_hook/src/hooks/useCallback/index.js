import { useState, useCallback, useEffect } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  // 새로운 함수 생성
  // const handleClick = () => {
  //   setCount(count + 1);
  //   console.log("count");
  // };

  // const handleClick2 = () => {
  //   setNumber(number + 1);
  //   console.log("number");
  // };

  // useEffect(() => {
  //   console.log("handleClick만 변경되어야함");
  // }, [handleClick]);
  // state가 변경되어 렌더링 될 때마다 handleClick함수를 계속 생성하므로 UseCallback함수를 계속 불러오므로 state에서 number배열도 계속 변경이되어 불러와지므로 handleClick2를 수행해도 useEffect가 실행된다
  // 이런 경우 불필요한 함수의 계속되는 생성으로 성능에 문제가 생길 수 있다.

  // 캐싱된 함수의 사용으로 필요한 것만 불러오자
  const handleClick = useCallback(() => {
    setCount(count + 1);
    console.log("count");
  }, [count]);

  const handleClick2 = useCallback(() => {
    setNumber(number + 1);
    console.log("number");
  }, [number]);

  useEffect(() => {
    console.log("handleClick 변경됨");
  }, [handleClick]);

  return (
    <div>
      <h2>useCallback 예시1</h2>
      <p>Count: {count}</p>
      <p>Number: {number}</p>
      <button onClick={handleClick}>클릭1</button>
      <button onClick={handleClick2}>클릭2</button>
      <p></p>
      <hr />
    </div>
  );
};

export default UseCallback;
