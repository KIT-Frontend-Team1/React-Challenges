import { useEffect, useState } from "react";

const ExternalData = () => {
  const [members, setMembers] = useState([]);

  // 외부 데이터 가져오기 예시, 한 번만 받아올 때 [] 빈배열로 전달
  useEffect(() => {
    fetch(`data/members.json`)
      .then((res) => res.json())
      .then((memberData) => {
        console.log("르세라핌 멤버 정보를 네트워크에서 받아옴");
        setMembers(memberData);
      });

    // 컴포넌트가 없어질 때 정리해야한다면? (메모리 정리, 소켓 네트워크 닫아줄 때)
    // useEffect의 return으로 cleanup 해주어야함
    return () => {
      console.log("받아온 데이터 ClenUp");
    };
  }, []);

  return (
    <div>
      <ul className="memberUl">
        {members.map((memberData) => (
          <li key={memberData.id} className="memberLi">
            <p>이름 : {memberData.name}</p>
            <p>생년월일 : {memberData.birthday}</p>
            <p>키 : {memberData.height}</p>
          </li>
        ))}
      </ul>
      <br />
    </div>
  );
};

const UseEffect = () => {
  const [showData, setShowData] = useState(true);
  const handleClick = () => {
    setShowData((show) => !show);
  };
  return (
    <div>
      <h2>useEffect 예시3</h2>
      <p>⭐ 외부 데이터 가져오기 ⭐</p>
      {showData && <ExternalData />}
      <button onClick={handleClick}>show member</button>
    </div>
  );
};

export default UseEffect;
