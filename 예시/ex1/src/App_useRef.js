import React, { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}`);
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="username"></input>
      <button onClick={login}>로그인</button>
    </>
  );
}
export default App;
