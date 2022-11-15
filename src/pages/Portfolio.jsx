import React from 'react'
import CarouselFade from '../components/CarouselFade'
import { Container } from '../styles/Container/Container.style'
import { CarouselStyle } from '../styles/Portfolio/Carousel.style'
const Portfolio = () => {
  return (
    <>
      <Container>
        <h1>Portfolio</h1>
        <CarouselStyle>
          <CarouselFade/>
        </CarouselStyle>
      </Container>
    </>

  )
}

export default Portfolio