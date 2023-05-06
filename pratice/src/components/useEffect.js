/*
장점:
    부수 효과 처리
    useEffect를 사용하면 컴포넌트의 렌더링 사이클에서 부수 효과를 처리할 수 있다.
    API 호출, 데이터 가져오기, 상태 업데이트, DOM 조작, 이벤트 등 다양한 작업을 수행할 수 있다.

    useEffect는 선언적인 방식으로 부수 효과를 처리함.
    컴포넌트의 부수 효과를 명확하게 표현할 수 있다.

단점:

    잠재적인 성능 이슈
    useEffect는 컴포넌트의 모든 렌더링마다 실행될 수 있다.
    이는 부수 효과가 불필요하게 자주 실행되어 성능 이슈를 야기할 수 있다.
    의존성 배열을 올바르게 관리하여 부수 효과가 필요한 때에만 실행되도록 제어해야 함.

    클린업 처리의 번거로움
    useEffect를 사용하여 부수 효과를 처리하면 클린업 작업을 수행해야 할 때가 있다. 
    이는 추가적인 코드 작성과 유지보수를 필요로 하며,
    잊어버리거나 부실하게 처리할 경우 메모리 누수나 예상치 못한 동작이 발생할 수 있다.
*/

import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Cmounted');
        // cleanup 함수
        return () => {
            console.log('unmounted');
        };
    }, []);

    useEffect(() => {
        console.log('Count updated:', count);
    }, [count]);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>증가버튼</button>
        </div>
    );
};

export default UseEffect;
