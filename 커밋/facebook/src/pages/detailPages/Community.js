import React from "react";
import Header from "../Header";
import Detail from "../../Components/Detail";
const Community = () => {
  const CommunityArr = [
    {
      id: 1,
      name: "뉴진스",
      mainImg: "/images/뉴진스메인.jpeg",
      logoImg: "/images/뉴진스로고.jpeg",
      text: "NEW JEANS becomes the first 4th generation K-Pop act to earn an entry on Billboard Hot 100 at #96 with “Ditto.” CONGRATULATIONS GIRLS 💕",
    },
    {
      id: 2,
      name: "토리든",
      mainImg: "/images/토리든메인.jpeg",
      logoImg: "/images/토리든로고.jpeg",
      text: "#NEW #화해특가 #50% 밸런스풀 시카 진정 마스크 런칭 기념!오직 화해에서만 만나볼 수 있는 10매💚오르락 내리락 거리는 피부 에는부드럽게 밀착되어 수분+진정 한방에 케어해주는…",
    },
    {
      id: 3,
      name: "에듀윌",
      mainImg: "/images/sample-image.jpg",
      logoImg: "/images/edu_icon.png",
      text: "🔥기간한정 특별 이벤트🔥 초시생 필수템, 만화입문서 무료배포! #합격자수 1위 # 에듀윌 # 공인중개사",
    },
    {
      id: 4,
      name: "공차",
      mainImg: "/images/공차메인.jpg",
      logoImg: "/images/공차로고.jpg",
      text: " 스탬프 3배 적립을 기다렸다면?? 지금 공차에서 당근 신메뉴마시고 스탬프 X3배 적립 받자👌 ⠀ ✋매장 가기 전 멤버십 앱 다운은 필수! 프로필 링크에서 공차멤버십 앱 다운받고, 트리플 스탬프 적립 받으세요💕 ",
    },
  ];
  return (
    <>
      <Header />
      {CommunityArr.map((post) => (
        <Detail
          key={post.id}
          name={post.name}
          mainImg={post.mainImg}
          logoImg={post.logoImg}
          text={post.text}
        />
      ))}
    </>
  );
};

export default Community;
