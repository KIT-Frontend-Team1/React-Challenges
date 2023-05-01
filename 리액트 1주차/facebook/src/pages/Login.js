import React from "react";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.containerBox}>
          <div className={styles.logoBox}>
            <img src="../images/facebooklogo.png" alt="facebook" />
            <h2>
              Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를
              나눠보세요.
            </h2>
          </div>
          <div className={styles.loginBox}>
            <form className={styles.loginForm}>
              <div>
                <input
                  type="text"
                  className={styles.inputEmail}
                  // className="email"
                  name="email"
                  placeholder="이메일 또는 전화번호"
                />
              </div>
              <div>
                <input
                  type="password"
                  className={styles.inputPassword}
                  // className="password"
                  name="password"
                  placeholder="비밀번호"
                />
              </div>
              <div>
                <button
                  onClick={() => {
                    navigate("/main");
                  }}
                  className={styles.loginButton}
                  type="button"
                >
                  로그인
                </button>
              </div>
              <div>
                <a href="">비밀번호를 잊으셨나요?</a>
              </div>
              <div className={styles.divLine}></div>
              <div>
                <a
                  href=""
                  className={styles.regist}
                  onClick={() => {
                    navigate("/Register");
                  }}
                >
                  새 계정 만들기
                </a>
              </div>
            </form>
            <div className={styles.newPage}>
              유명인, 브랜드 또는 비즈니스를 위한 <a href="">페이지 만들기.</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <ul className={styles.footerUl}>
          <li>한국어</li>
          <li>English (US)</li>
          <li>Tiếng Việt</li>
          <li>Bahasa Indonesia</li>
          <li>ภาษาไทย</li>
          <li>Español</li>
          <li>中文(简体)</li>
          <li>日本語</li>
          <li>Português (Brasil)</li>
          <li>Deutsch</li>
        </ul>
        <div className={styles.divLine}></div>
        <ul className={styles.footerUl}>
          <li>가입하기</li>
          <li>로그인</li>
          <li>Messenger</li>
          <li>Facebook Lite</li>
          <li>Watch</li>
          <li>장소</li>
          <li>게임</li>
          <li>Marketplace</li>
          <li>Meta Pay</li>
          <li>Oculus</li>
          <li>Portal</li>
          <li>Instagram</li>
          <li>Bulletin</li>
          <li>기부 캠페인</li>
          <li>서비스</li>
          <li>투표 정보 센터</li>
          <li>개인정보처리방침</li>
          <li>개인정보 보호 센터</li>
          <li>그룹</li>
          <li>정보</li>
          <li>광고 만들기</li>
          <li>페이지 만들기</li>
          <li>개발자</li>
          <li>채용 정보</li>
          <li>쿠키</li>
          <li>AdChoices</li>
          <li>이용약관</li>
          <li>고객 센터</li>
          <li>연락처 업로드 및 비사용자</li>
        </ul>
        <div>Meta © 2023</div>
      </div>
    </>
  );
};

export default Login;
