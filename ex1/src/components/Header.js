import React from 'react';
import styled from 'styled-components';
import { faSeedling, faCircleHalfStroke, faMagnifyingGlass  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 4rem;
  margin: 0 auto;
`
const HeaderStyled = styled.header`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20%;
  border-bottom: 1px solid #333;
`
const Title = styled.div`
  display: flex;
  align-items: center;
`
const Span = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 1rem;
`
const Btn = styled.button`
  cursor: pointer;
`

const BtnNew = styled.button`
  border: 1px solid #333;
  cursor: pointer;
  border-radius: 20px;
  padding: 0.5rem 1rem;
`

const Right = styled.div`
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <Title>
          <FontAwesomeIcon icon={faSeedling} style={{height: '1.5rem', color: '#444'}} />
          <Span>Yeseul's Page</Span>
        </Title>
        <Right>
          <Btn><FontAwesomeIcon icon={faCircleHalfStroke} style={{height: '1.25rem', color: '#333'}} /></Btn>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{height: '1.25rem', color: '#333'}} />
            <Link to='/'>
              <BtnNew>새 글 작성</BtnNew>
            </Link>
        </Right>
      </HeaderStyled>
    </Container>
  )
}

export default Header