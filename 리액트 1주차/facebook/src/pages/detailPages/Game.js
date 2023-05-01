import React from "react";
// import Detail from "../../Components/쿠키런";
import Detail from "../../Components/Detail";
import Header from "../Header";
const Game = () => {
  const GameArr = [
    {
      id: 1,
      name: "쿠키런",
      mainImg: "/images/쿠키런메인.png",
      logoImg: "/images/쿠키런로고.png",
      text: `[원스토어]선착순 쿠폰 이벤트! ✨✓ 기간: 3/30(목)~3/31(금) 오전 11시, 오후 5시 ✓ 보상: 선착순 할인 쿠폰 랜덤 배포(15%, 25% 중 1종 지급)
      ✓ 참여 방법: 원스토어 실행 - 추천탭 클릭 - 상단 배너 중
      [두근두근 어떤 쿠폰이 나올까?] 배너 클릭`,
    },
    {
      id: 2,
      name: "배틀그라운드",
      mainImg: "/images/배그메인.jpeg",
      logoImg: "/images/배그로고.jpeg",
      text: "최후의 치킨을 위해, 빠른 이동이 필요할 때가 있죠! 신규 스킬: 에어 보드 등장🔥🛹에어 보드를 타고 전장을 빠르게 이동해 보세요!",
    },
  ];
  return (
    <>
      <Header />
      {GameArr.map((post) => {
        return (
          <Detail
            key={post.id}
            name={post.name}
            mainImg={post.mainImg}
            logoImg={post.logoImg}
            text={post.text}
          />
        );
      })}
    </>
  );
};

export default Game;
