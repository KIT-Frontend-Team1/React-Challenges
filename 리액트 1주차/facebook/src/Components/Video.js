import React from "react";
import styles from "../styles/Detail.module.css";
import Like from "./Like";
const VideoContent = ({ text, iframe, logoImg }) => {
  return (
    <main>
      <section className={styles.container}>
        <ul className={styles.list}>
          <li>
            <div className={styles.card}>
              <div className={styles.head}>
                <img className={styles.logo} src={logoImg} alt="광고아이콘" />
                <span className={styles.title}>ootd</span>
                <img src="../images/more.png" alt="더보기 메뉴" />
              </div>
              <div className={styles.text}>{text}</div>
              <div className={styles.body}>
                {/*영상링크 iframe 삽입*/}
                {iframe}
                <div className={styles.text}>
                  <button>더 알아보기</button>
                </div>
              </div>
              <div className={styles.foot}>
                {/* <div className={styles.btnBox}>
                  <img src="../images/happy.png" alt="좋아요" />
                  <span className={styles.btnText}>좋아요</span>
                </div> */}
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

export default VideoContent;
