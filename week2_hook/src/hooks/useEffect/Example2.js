import { useEffect, useState } from "react";
// 5초 타이머 기능, cleanup
const Example2 = () => {
  const [time, setTime] = useState(parseInt(5)); // 초기값 5초

  // time값이 변경될 때마다 실행되며, setInterval 함수를 통해 1초마다 time값이 -1씩 줄어들어 UI에 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) setTime((prevTime) => prevTime - 1);
    }, 1000);

    // clenup, 언마운트(timer의 if 조건에 맞지 않을 때 즉, time이 0이 될 때) 될 때 clearInterval로 timer를 중지한다.
    return () => {
      clearInterval(timer);
      // console.log({ time });
    };
  }, [time]);

  // time값이 변경될 때마다 실행되는데 time이 0이 될 때 콘솔을 실행한다.
  useEffect(() => {
    if (time === 0) {
      console.log("타이머 종료");
    }
  }, [time]);

  return (
    <div>
      <h2>useEffect 예시2</h2>
      <p>⭐ 언마운트, 클린업의 경우 ⭐</p>
      <p>⏰5초 타이머</p>
      <p>0 : 0{time}</p>
      <hr />
    </div>
  );
};

export default Example2;
