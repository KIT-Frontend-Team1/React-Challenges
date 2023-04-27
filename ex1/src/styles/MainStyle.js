// styled-components 라이브러리의 사용
import styled from 'styled-components'

export const StyledMain = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  text-align: center;
  padding: 2rem;
  margin: 0 auto;
`

export const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`

export const StyledP = styled.p`
  width: 330px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1462FF;
  border-radius: 10px;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  color: #fff;
  box-shadow: 10px 10px 14px -10px rgba(150,150,150,0.75);
  -webkit-box-shadow: 10px 10px 14px -10px rgba(150,150,150,0.75);
  -moz-box-shadow: 10px 10px 14px -10px rgba(150,150,150,0.75);
`