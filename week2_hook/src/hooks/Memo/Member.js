import React, { memo } from "react";

const Yoonjin = ({ name, age, group }) => {
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
};

export default memo(Yoonjin);
