import React, { useState } from "react";
import styles from "../styles/MenuBar.module.css";

const MenuBar = () => {
  //width는 sidebar의 너비
  const width = 280;
  const [isOpen, setIsOpen] = useState(false);
  const [xPosition, setX] = useState(width);

  //버튼클릭시 토글
  const onClickToggleSide = () => {
    if (xPosition > 0) {
      setX(0);
      setIsOpen(true);
    } else {
      setX(width);
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <img
        role="button"
        onClick={onClickToggleSide}
        src="../images/menu.png"
        alt="더보기"
      />
      <div
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translateX(${+xPosition}px)`,
        }}
      >
        <span className={styles.btnBox}>
          <img
            role="button"
            onClick={onClickToggleSide}
            src="../images/close.png"
            alt="더보기"
          />
        </span>
        <ul className={styles.content}>
          <li>팔로잉</li>
          <li>언어</li>
          <li>뉴스피드 기본 설정</li>
          <li>계정 설정</li>
          <li>코드 생성기</li>
          <li>고객 센터</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
