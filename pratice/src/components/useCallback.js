/*
장점

성능 최적화
    useCallback을 사용하여 함수를 메모이제이션하면,
    같은 의존성이 유지되는 한 동일한 함수를 재사용할 수 있다. 
    함수가 반복적으로 재생성되는 것을 방지하여 성능을 향상시킬 수 있다.

자식 컴포넌트 최적화
    useCallback을 사용하여 부모 컴포넌트에서 자식 컴포넌트로 전달되는 콜백 함수를
    메모이제이션할 수 있습니다. 이는 자식 컴포넌트가 부모로부터 전달받은 함수를 props로 사용할 때,
    불필요한 재렌더링을 방지하여 애플리케이션 성능을 향상시킴.

단점:

메모리 사용
    useCallback은 함수를 메모리에 저장하여 재사용하므로, 
    메모리 사용량이 늘어날 수 있습니다. 일부 상황에서는 미세한 메모리 오버헤드가 발생할 수 있다.
    하지만 대부분의 경우에는 성능 향상을 위해 메모리 사용량을 희생하는 것이 바람직함.

남용의 위험성
    모든 함수에 useCallback을 적용하는 것은 좋지 않을 수 있습니다.
    일부 함수는 의존성이 변경되더라도 재생성해야 하는 경우가 있다.
    불필요하게 useCallback을 적용하면 코드를 복잡하게 만들 수 있으며,
    오히려 성능을 저하시킬 수 있다.
  */

import React, { useState, useCallback } from 'react';

const UseCallback = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>증가버튼</button>
        </div>
    );
};

export default UseCallback;
