import { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // 원시타입, state가 변경되어도 같은 값으로 인식하므로 number에 state 변경시 darkMode의 useEffect가 일어나지 않는다.
  // const darkMode = isDark ? "Dark Mode" : "Light Mode";

  // 그러나 객체 타입이라면?
  // const darkMode = {
  //   mode: isDark ? "Dark Mode" : "Light Mode",
  // };

  // useMemo로 해결해보자!, App 컴포넌트가 렌더링 되었을 때 darkMode가 다시 초기화 되는 것을 막아주는 것
  // useMemo로 darkMode를 memoization(저장)해두고 isDark가 변경될 때만 useEffect가 실행되도록 한다.
  const darkMode = useMemo(() => {
    return {
      mode: isDark ? "Dark Mode" : "Light Mode",
    };
  }, [isDark]);

  useEffect(() => {
    console.log("useEffect 호출 굉장히 무거운 작업");
  }, [darkMode]);
  // 의존성 배열에 darkMode만 넘겨주었는데 number state에도 useEffect가 실행된다! 그 이유는? 객체 타입이므로

  // number에서 onChange가 일어난다면 UseMemo 함수가 재호출되는데 이때 darkMode는 객체로서 UseMemo 함수를 재호출할 때마다 객체의 주소값이 달라지므로 계속해서 재할당 받는 것이다.

  return (
    <div>
      <h2>useMemo 예시1</h2>
      <h3>1) 숫자 증감 인풋</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>--------------------------------------------------</p>
      <h3>2) Dark or Light</h3>
      <p>
        What's Mode?{" "}
        <span
          style={{
            backgroundColor: isDark ? "black" : "beige",
            color: isDark ? "white" : null,
          }}
        >
          {darkMode.mode}
        </span>
      </p>
      <button onClick={() => setIsDark(!isDark)}>Mode Change</button>
      <p></p>
      <hr />
    </div>
  );
};

export default UseMemo;
