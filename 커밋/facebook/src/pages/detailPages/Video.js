import React from "react";
import Header from "../Header";
import VideoContent from "../../Components/Video";
const Video = () => {
  const VideoArr = [
    {
      id: 1,
      logoImg: "/images/ootd.jpeg",
      text: "수지 찾으러 오는 학과 [숭실대 건축학부] | 전과자 ep.20 수지 있어요? 음대생 수지 찾는 질문에 영원히 시달리는 건축학부 👀 📚 매일 전과하는 남자 [전과자] 📚 매주 목요일 오후 6시",
      iframe: (
        <iframe
          width="500"
          height="360"
          src="https://www.youtube.com/embed/QnKLXUHjIHo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 2,
      logoImg: "/images/딩고로고.jpeg",
      text: "볼빨간사춘기(BOL4)의 킬링보이스를 라이브로!-나만 봄, 여행, 나의 사춘기에게, Seoul, Love story, 우주를 줄게, 썸 탈꺼야, 좋다고 말해 | 딩고뮤직",
      iframe: (
        <iframe
          width="500"
          height="315"
          src="https://www.youtube.com/embed/u_nc-t4oHfw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 3,
      logoImg: "/images/jtbc로고.jpeg",
      text: "[퍼센트] '근로자의 날' 누가 쉬고 못 쉬나…법이 갈라놓은 노동자들 / JTBC 뉴스룸",
      iframe: (
        <iframe
          width="500"
          height="315"
          src="https://www.youtube.com/embed/MRKeOfyaG9g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ];
  return (
    <>
      <Header />
      {VideoArr.map((video) => {
        return (
          <VideoContent
            key={video.id}
            logoImg={video.logoImg}
            text={video.text}
            iframe={video.iframe}
          />
        );
      })}
    </>
  );
};

export default Video;
