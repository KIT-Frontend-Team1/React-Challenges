import { Fragment, useState, useRef, useEffect } from "react";

const UseState = () => {
  // useState 초기값에 객체를 넣어 상태 변경을 한번에 관리할 수 있다.
  const [person, setPerson] = useState({
    name: "Sakura",
    age: 25,
  });

  const inputRef = useRef();

  // 첫 화면 렌더링 시 input요소에 자동으로 focus되게 [] 빈배열을 전달
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // input 값 변경하는 함수
  // 이벤트 객체 e는 input 요소에 입력된 값 (value)을 추출
  // setPerson을 사용하여 상태(person)를 업데이트 하는데 spread연산자를 사용하여 person 객체의 모든 속성을 복사한 후 name 속성만 변경된 값을 할당한다.
  const handleChangeName = (e) => {
    const { value } = e.target;
    setPerson({ ...person, name: value });
    console.log(e.target.value);
  };

  // 클릭시 person.age +1씩 증가하여 UI에 업데이트되어 렌더링하는 함수
  const handleChangeAge = () => {
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    console.log("렌더링되는 중");
    // setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    // setPerson({ ...person, age: person.age + 1 });
    // setPerson({ ...person, age: person.age + 1 });
  };

  // reset 버튼을 누르면 name => 이름을 입력하세요, age => 25 으로 초기화되는 함수
  const handleResetInput = () => {
    setPerson({ name: "이름을 입력하세요", age: 25 });
  };

  // DOM 요소에 직접 접근할 때
  const handleFocusInput = () => {
    inputRef.current.focus(); // focus 효과
    inputRef.current.value = ""; // input 값 비워주기
  };

  return (
    <Fragment>
      <h2>useState와 useRef 예시</h2>
      <input value={person.name} onChange={handleChangeName} ref={inputRef} />
      {/* input에 대한 참조값 ref를 넣어줌 */}
      <button onClick={handleChangeAge}>age Add +1</button>
      <button onClick={handleResetInput}>Input value Reset</button>
      <button onClick={handleFocusInput}>Focus Input</button>
      <p>
        Hello <span className="person">{person.name}!</span> You are{" "}
        <span className="person">{person.age}</span>
      </p>
      <hr />
    </Fragment>
  );
};

export default UseState;
