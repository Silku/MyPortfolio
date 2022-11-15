import React from 'react';
import { Container } from '../styles/Container/Container.style';
import { Header, MainHeader } from '../styles/Header/Header.style';
const Home = () => {
  return (
    <>
        <Container>
            <Header>
              <MainHeader>
              </MainHeader>
            </Header>
            <h1>Home</h1>
            <h2>안녕하세요. 프론트엔드 개발자 김태우입니다.</h2>
            <h2>꼼꼼한 성격, 끈기와 책임감이 제 장점입니다.</h2>
        </Container>
    </>

  )
}

export default Home