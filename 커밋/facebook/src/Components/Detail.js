import React from "react";
import styles from "../styles/Detail.module.css";
import Like from "./Like";
//props를 가져올때는 {}로 가져오기
const Detail = ({ mainImg, logoImg, text, name }) => {
  // const { mainImg, logoImg, text, name } = post;
  return (
    <main>
      <section className={styles.container}>
        <ul className={styles.list}>
          <li>
            <div className={styles.card}>
              <div className={styles.head}>
                {/*logoImg*/}
                <img className={styles.logo} src={logoImg} alt="광고아이콘" />
                {/*name*/}
                <span className={styles.title}>{name}</span>
                <img src="../images/more.png" alt="더보기 메뉴" />
              </div>
              {/*text*/}
              <div className={styles.text}>{text}</div>
              <div className={styles.body}>
                {/*mainImg*/}
                <img src={mainImg} alt="광고이미지" />
                <div className={styles.text}>
                  <button>더 알아보기</button>
                </div>
              </div>
              <div className={styles.foot}>
                <Like />
                <div className={styles.btnBox}>
                  <img src="../images/youtube.png" alt="댓글달기" />
                  <span className={styles.btnText}>댓글달기</span>
                </div>
                <div className={styles.btnBox}>
                  <img src="../images/people.png" alt="공유하기" />
                  <span className={styles.btnText}>공유하기</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Detail;
