// 2. react에서 memo를 import
import { useState, memo } from "react";

// 3. 사용 함수 앞에 memo만 붙여주면 React.memo 사용할 수 있다.
// 4. React.memo는 고차 컴포넌트로써 인자로 자식 컴포넌트를 넣어주면 최적화된 컴포넌트를 반환해주는 것
// 5. peops를 체킹하여 변화가 없으면 렌더링하지 않고 이전 렌더링 된 컴포넌트의 결과를 재사용하는 것이다 props가 변경할 때만 렌더링을 해주는 것
const Yoonjin = memo(({ name, age, group }) => {
  console.log("💃 Yoonjin 컴포넌트도 렌더링됨");
  return (
    <div
      style={{ border: "1px solid #72dec0", width: "90%", marginTop: "1rem" }}
    >
      <p>소속 그룹: {group}</p>
      <p>이름: {name}</p>
      <p>
        나이: <span style={{ fontWeight: "bold" }}>{age}</span> 세
      </p>
    </div>
  );
});

const Lesserafim = () => {
  const [albumStock, setAlbumStock] = useState(50000);
  const [memberAge, setMemberAge] = useState(23);

  // 1. incrementAlbumStock 실행시 state의 상태 변경으로 인해 Lesserafim 컴포넌트가 렌더링되어 자식 컴포넌트인 Yoonjin 또한 렌더링이 된다(콘솔 메세지로 확인 가능) => 자식 컴포넌트인 Yoonjin은 렌더링 될 필요가 없으므로 memo를 사용하여 렌더링을 방지하여 최적화해보자
  const incrementAlbumStock = () => {
    setAlbumStock(albumStock + 10);
  };

  const incrementMemberAge = () => {
    setMemberAge(memberAge + 1);
  };

  console.log("🔥 Lesserafim 컴포넌트가 렌더링됨");

  return (
    <div>
      <h2>React.memo 예시</h2>
      <div
        style={{
          border: "1px solid #ff4995",
          paddingBottom: "1rem",
          width: "400px",
        }}
      >
        <h3>소속회사: HYBE Ent.</h3>
        <p>
          UNFORGIVEN 앨범 판매량 :{" "}
          <i style={{ fontWeight: "bold" }}>{albumStock}</i>{" "}
        </p>
        <button onClick={incrementAlbumStock}>앨범 판매량 +10</button>
        <button onClick={incrementMemberAge}>나이 증가</button>
        <Yoonjin name={"허윤진"} age={memberAge} group={"Lesserafim"} />
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Lesserafim;
