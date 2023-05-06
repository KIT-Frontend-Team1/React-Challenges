import React, { useState } from 'react';
/*useState*/
//중요한 데이터를 변수대신 넣음
// const [state, setState] = useState();

const Hook = () => {
    let [food, setFood] = useState(['카레', '우동', '돈까스']);
    return (
        <>
            <div style={{ fontSize: 100 }}>{food}</div>
            <button
                onClick={() => {
                    let copyFood = [...food]; // 원본을 건드리는건 좋지 않으므로 스프레드 연산자로 복사
                    copyFood[2] = '라멘'; // food의 2번인덱스 '돈까스'를 라멘으로 바꿈
                    setFood(copyFood); // 변경함수의 넣으면 끝!
                }}
                style={{ width: '100px', height: '100px', marginLeft: '250px' }}
            >
                라멘으로 변경버튼
            </button>
        </>
    );
};

export default Hook;
