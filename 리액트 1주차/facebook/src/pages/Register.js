import React from "react";
import styles from "../styles/Register.module.css";
const Register = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="../images/facebook-logo.svg" alt="페이스북 로고" />
        </div>
        <div className={styles.card}>
          <div className={styles.header}>
            <h2>새 계정 만들기</h2>
            <p>빠르고 쉽습니다</p>
          </div>
          <div className={styles.body}>
            <form action="">
              <div className={styles.inName}>
                <div>
                  <input type="text" name="lastname" placeholder="성(成)" />
                </div>
                <div>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="이름(성은 제외)"
                  />
                </div>
              </div>
              <div className={styles.inInfo}>
                <div>
                  <input
                    type="text"
                    name="reg_email"
                    placeholder="휴대폰 번호 또는 이메일"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="reg_pass"
                    placeholder="새 비밀번호"
                  />
                </div>
              </div>
              <div className={styles.inAge}>
                <div className={styles.text}>생일</div>
                <div>
                  <select
                    name="birthday_year"
                    className={styles.birthdayYear}
                    title="연도"
                  >
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                  </select>
                  <select
                    name="birthday_month"
                    className={styles.birthdayMonth}
                    title="월"
                  >
                    <option value="1">1월</option>
                    <option value="2">2월</option>
                    <option value="3">3월</option>
                    <option value="12">12월</option>
                  </select>
                  <select
                    name="birthday_day"
                    className={styles.birthdayDay}
                    title="일"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="31">31</option>
                  </select>
                </div>
              </div>
              <div className={styles.inType}>
                <div className={styles.text}>성별</div>
                <div>
                  <div className={styles.inRdo}>
                    <label htmlFor="rdo-1">여성</label>
                    <input
                      type="radio"
                      name="sex"
                      className={styles.rdo1}
                      value="1"
                    />
                  </div>
                  <div className={styles.inRdo}>
                    <label htmlFor="rdo-2">남성</label>
                    <input
                      type="radio"
                      name="sex"
                      className={styles.do2}
                      value="2"
                    />
                  </div>
                  <div className={styles.inRdo}>
                    <label htmlFor="rdo-3">개인 지정</label>
                    <input
                      type="radio"
                      name="sex"
                      className={styles.rdo3}
                      value="3"
                    />
                  </div>
                </div>
              </div>
              <div className="guclassNamee">
                가입하기 버튼을 클릭하면 Facebook의 약관, 데이터 정책 및 쿠키
                정책에 동의하게 됩니다. Facebook으로부터 SMS 알림을 받을 수
                있으며 알림은 언제든지 옵트 아웃할 수 있습니다.
              </div>
              <div className={styles.regist}>
                <button>가입하기</button>
              </div>
              <div className={styles.login}>
                <a href="./ex1_index.html">이미 계정이 있으신가요?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
