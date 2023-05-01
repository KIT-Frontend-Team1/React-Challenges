import React from "react";
import Header from "./Header";
import Detail from "../Components/Detail";
const Main = () => {
  const MainArr = [
    {
      id: 1,
      name: "에듀윌",
      mainImg: "/images/sample-image.jpg",
      logoImg: "/images/edu_icon.png",
      text: "🔥기간한정 특별 이벤트🔥 초시생 필수템, 만화입문서 무료배포! #합격자수 1위 # 에듀윌 # 공인중개사",
    },
    {
      id: 2,
      name: "공차",
      mainImg: "/images/공차메인.jpg",
      logoImg: "/images/공차로고.jpg",
      text: " 스탬프 3배 적립을 기다렸다면?? 지금 공차에서 당근 신메뉴 마시고 스탬프 X3배 적립 받자👌⠀ ✋매장 가기 전 멤버십 앱 다운은 필수! 프로필 링크에서공차멤버십 앱 다운받고, 트리플 스탬프 적립 받으세요💕 ",
    },
    {
      id: 3,
      name: "쿠키런",
      mainImg: "/images/쿠키런로고.png",
      logoImg: "/images/쿠키런메인.png",
      text: `[원스토어]선착순 쿠폰 이벤트! ✨✓ 기간: 3/30(목)~3/31(금) 오전 11시, 오후 5시 ✓ 보상: 선착순 할인 쿠폰 랜덤 배포(15%, 25% 중 1종 지급)
      ✓ 참여 방법: 원스토어 실행 - 추천탭 클릭 - 상단 배너 중
      [두근두근 어떤 쿠폰이 나올까?] 배너 클릭`,
    },
  ];
  return (
    <>
      <Header />
      {MainArr.map((post) => {
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

export default Main;
