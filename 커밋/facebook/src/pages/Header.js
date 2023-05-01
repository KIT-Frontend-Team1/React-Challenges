import { useNavigate, Link, useParams } from "react-router-dom";
import styles from "../styles/Main.module.css";
import MenuBar from "../Components/Menubar";
const Header = () => {
  return (
    <>
      <header>
        <div className={styles.headLogo}>
          <Link to="/">
            <img src="../images/facebook-icon.png" alt="페이스북 아이콘" />
          </Link>
          <input type="text" placeholder="Facebook 검색" />
        </div>
        <div className={styles.headNav}>
          <nav>
            <Link to="/main">
              <span className={styles.btnBox}>
                <img src="../images/home.png" alt="홈 바로가기" />
                <span className={styles.btnLine}></span>
              </span>
            </Link>
            <Link to="/main/video">
              <span className={styles.btnBox}>
                <img src="../images/youtube.png" alt="동영상 바로가기" />
                <span className={styles.btnLine}></span>
              </span>
            </Link>
            <Link to="/main/community">
              <span className={styles.btnBox}>
                <img src="../images/people.png" alt="커뮤니티 바로가기" />
                <span className={styles.btnLine}></span>
              </span>
            </Link>

            <Link to="/main/game">
              <span className={styles.btnBox}>
                <img src="../images/game.png" alt="게임 바로가기" />
                <span className={styles.btnLine}></span>
              </span>
            </Link>
          </nav>
        </div>
        <div className={styles.headSide}>
          <span className={styles.btnBox}>
            {/* <img src="../images/menu.png" alt="메뉴" /> */}
            <MenuBar />
          </span>
          <span className={styles.btnBox}>
            <img src="../images/alarm.png" alt="알림" />
          </span>
          <span className={styles.btnBox}>
            <img src="../images/more.png" alt="더보기" />
          </span>
        </div>
      </header>
    </>
  );
};
export default Header;
