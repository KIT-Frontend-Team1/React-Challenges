import styles from "../styles/Detail.module.css";
import React, { useState } from "react";
const Like = () => {
  const [like, setLike] = useState(0);
  const onClickLike = () => {
    let newLike = like + 1;
    setLike(newLike);
  };
  return (
    <div className={styles.btnBox}>
      <div onClick={onClickLike}>
        <img src="../images/happy.png" alt="좋아요" />
        <span className={styles.btnText}>좋아요 {like}개</span>
      </div>
    </div>
  );
};
export default Like;
