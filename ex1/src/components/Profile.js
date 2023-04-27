import { React, useState } from 'react'; // hook함수 useState 사용
import * as S from '../styles/ProfileStyle' // styled-component 라이브러리 사용
import { faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons"; // fontawesome 라이브러리 사용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css';

const Profile = ({name, image, isNew}) => {
  // hook함수 useState 사용
  const [count, setCount] = useState(0);
  const [bookmark, setBookmark] = useState(false);
  const handleCount = () => {
    setCount(prev => prev + 1)
  }
  const handleBookmark = () => {
    setBookmark(!bookmark);
  }
  return (
    <S.StyledProfile>
      <S.StyledP>Profile Image</S.StyledP>
      <S.StyledImage src={image}/>
      <S.Star>
        <S.Btn onClick={handleCount}>{name} <FontAwesomeIcon icon={faThumbsUp} /> {count} </S.Btn>
        <div className='bookmarkIcon' onClick={handleBookmark} >
          {/* js 문법 삼항 연산자 사용, 별모양 아이콘 클릭시 class add, remove해주어 북마크 기능처럼 컬러 변경 */}
          {bookmark ? (<button className='colorOn'><FontAwesomeIcon icon={faStar} /></button>) : (<button><FontAwesomeIcon icon={faStar} /></button>)}
        </div>
      </S.Star>
      {/* && js 문법 사용, isNew가 true일 때만 StyledSpan태그가 보여진다. */}
      {isNew && <S.StyledSpan>신규회원</S.StyledSpan>}
    </S.StyledProfile>
  )
}

export default Profile