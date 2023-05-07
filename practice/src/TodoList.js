// import React, { useState, useRef, useCallback, useEffect, useMemo, memo } from 'react';
import React, { useState, useRef, useCallback, useEffect, useMemo, memo } from 'react';

const TodoList = () => {
  //할 일 목록 usestate 함수 사용
  const [todos, setTodos] = useState([]);
  // completedCount에 완료된 할 일 개수를 저장
  const [completedCount, setCompletedCount] = useState(0);
  //새로운 할 일을 입력하는 input 엘리먼트를 참조하는 객체 유지
  const todoInputRef = useRef(null);

  //새로 추가하는 함수 useCallback 사용 이벤트 핸들러 함수 생성
  const handleAddTodo = useCallback(() => {
    const newTodo = todoInputRef.current.value; //
    if (newTodo.trim() === '') {
      // 할 일이 공백일 경우 추가하지 않고 함수를 종료합니다.
      return;
    }
    //이전 목록에 새로운 할 일을 추가
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    //입력창을 비워줌
    todoInputRef.current.value = '';
  }, []);

  // 할 일을 삭제하는 함수
  const handleRemoveTodo = useCallback((index) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos]; //이전 목록을 복사
      newTodos.splice(index, 1); //해당 인덱스의 목록을 삭제
      return newTodos; // 새로운 목록을 반환함
    });
  }, []);

  //할 일을 완료하는 함수
  const handleCompleteTodo = useCallback((index) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos]; //목록 복사
      newTodos[index] = `✓ ${newTodos[index]}`; //해당 인덱스의 목록 앞에 ✓ 붙여 상태를 완료로 변경
      return newTodos; // 새로운 목록을 반환함
    });
    setCompletedCount((prevCount) => prevCount + 1); // 완료돤 개수를 +1로 증가 시김
  }, []);

  useEffect(() => {
    todoInputRef.current.focus();
  }, []);

  const memoizedTodoList = useMemo(() => {
    return (
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {/* handleRemoveTodo 할 일을 삭제해주는 함수  */}
            {todo} <button onClick={() => handleRemoveTodo(index)}>x</button>
            <button onClick={() => handleCompleteTodo(index)}>Complete</button>
          </li>
        ))}
      </ul>
    );
  }, [todos, handleRemoveTodo, handleCompleteTodo]);

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" ref={todoInputRef} />
      <button onClick={handleAddTodo}>Add</button>
      {memoizedTodoList}
      <p>Completed: {completedCount}</p>
    </div>
  );
};

export default memo(TodoList);
