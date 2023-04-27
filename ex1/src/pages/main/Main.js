import React from 'react';
import { Link } from 'react-router-dom'
import * as M from '../../styles/MainStyle'
import '../../App.css'

const Main = () => {
  return (
    <React.Fragment>
      <M.StyledMain style={{background: 'rgb(241, 243, 249)'}}>
        <M.StyledH1>🔥페어 1팀의 리액트 1주차 과제입니다🔥</M.StyledH1>
        <M.StyledP>
          <Link to='/yeseul' className='linkPadding'>GO TO YESEUL's PAGE 👉</Link>
        </M.StyledP>
        <M.StyledP>
          <Link to='/seungyong'>GO TO SEUNGYOUNG's PAGE 👉</Link>
        </M.StyledP>
        <M.StyledP>
          <Link to='/jaewon'>GO TO JAEWON's PAGE 👉 </Link>
        </M.StyledP>
      </M.StyledMain>
    </React.Fragment>
  )
}

export default Main