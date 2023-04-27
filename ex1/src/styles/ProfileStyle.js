// styled-components 라이브러리의 사용
import styled from 'styled-components'

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 330px;
  height: 300px;
  text-align: center;
  padding: 1rem;
  margin: 1rem auto;
  background-color: #ebebeb;
  border-radius: 20px;
  margin-bottom: 1rem;
  box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.21);
  -webkit-box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.21);
  -moz-box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.21);
`
export const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`

export const StyledP = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`

export const StyledSpan = styled.span`
  position: absolute;
  right: 5%;
  bottom: 5%;
  background-color: #1462ff;
  width: 80px;
  height: 25px;
  line-height: 1.8;
  border-radius: 12px;
  font-size: 14px;
  color: #fff;
`

export const Star = styled.span`
  display: flex;
  align-items: center;
`

export const Btn = styled.button`
  line-height: 0px;
  font-size: 1rem;
`