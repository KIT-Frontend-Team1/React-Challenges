import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  //   // 랜더링 될때마다 매번 실행됨
  //   useEffect(() => {
  //     console.log("랜더링 🍕");
  //   });

  //   // 마운팅 + count가 변화할때마다 실행됨
  //   useEffect(() => {
  //     console.log("count 🍔");
  //   }, [count]);

  //   // 마운팅 + name이 변경될때마다 실행됨
  //   useEffect(() => {
  //     console.log("name 🍟");
  //   }, [name]);

  useEffect(() => {
    console.log("마운팅 🌭");
  }, []);

  return (
    <>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange}></input>
      <span>name: {name}</span>
    </>
  );
}
export default App;
