/*
장점:
1.  
    값의 변경이 발생해도 컴포넌트가 다시 렌더링되지 않습니다. 
    useRef로 생성한 변수는 컴포넌트의 재렌더링과 무관하게 동일한 값을 유지함. 
    이는 성능 개선에 도움을 줄 수 있다.

2.
    DOM 요소나 다른 외부 라이브러리와 함께 사용할 때 유용함.
    useRef로 DOM 요소에 접근하면 해당 요소를 직접 조작하거나 참조할 수 있다.
    또한 외부 라이브러리의 인스턴스를 참조하여 원하는 기능을 사용할 수도 있다.
3.
    이전 상태를 유지할 수 있다.
    useState로 상태를 관리하면 상태가 업데이트될 때마다 새로운 값을 가지게 됌.
    그러나 useRef를 사용하여 이전 상태를 유지할 수 있다.
    이는 이전 상태와 현재 상태를 비교해야 할 때 유용함.
4.
    컴포넌트 외부에서 참조 가능함.
    useRef로 생성한 변수는 컴포넌트 외부에서도 참조할 수 있다.
    이는 컴포넌트 간에 상태를 공유하거나 특정 컴포넌트의 인스턴스에 접근해야 할 때 유용함.

단점:
1.
    값의 변경이 발생해도 컴포넌트의 렌더링이 발생하지 않기 때문에 값의 변경을 감지하기 어렵다.
    따라서 useRef를 사용하여 값이 변경되었는지 확인하려면 추가적인 로직을 구현해야 한다.

2.
    컴포넌트 외부에서 참조할 수 있기 때문에 부적절하게 사용할 경우 예기치 않은 문제가 발생할 수 있다. 
    useRef로 생성한 변수는 컴포넌트의 상태를 변경할 수 있으므로 신중하게 사용해야 함.
*/

import React, { useRef } from 'react';

const UseRef = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        // .current를 사용하여 변수의 값을 읽음
        console.log(inputRef.current.value);
    };

    const handleChange = () => {
        // .current를 사용하여 변수의 값을 업데이트
        inputRef.current.value = 'Input값 변환';
    };

    return (
        <div>
            <input ref={inputRef} type='text' />
            <button onClick={handleClick}>값을 읽음 </button>
            <button onClick={handleChange}>변환</button>
        </div>
    );
};

export default UseRef;
