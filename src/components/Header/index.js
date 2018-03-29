import React, { Component } from 'react';

import Personal from './Personal';
import Contact from './Contact';
import { device } from '../common';
import imgLg from './wallpaperLg.png';
import imgSm from './wallpaperSm.jpeg';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <Hero imgLg={imgLg} imgSm={imgSm} className="hero">
        <HeaderWrap>
          <Personal />
          <Border />
          <Contact />
        </HeaderWrap>
      </Hero>
    );
  }
}

const Hero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-size: cover;
  position: relative;
  z-index: 1;
  height: 50vh;
  background: ${({ imgSm }) => `url(${imgSm}) no-repeat center`};
  @media ${device.laptop} {
    background: ${({ imgLg }) => `url(${imgLg}) no-repeat 0% 60%`};
    height: 50vh;
  }
  &:after {
    content: '';
    height: 100%;
    width: 100%;
    z-index: -1;
    background: rgba(0, 0, 0, 0.45);
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const HeaderWrap = styled.div`
  margin-top: auto;
  padding: 15px;
  @media ${device.laptop} {
    padding: 20px 40px;
  }
`;

const Border = styled.div`
  background-color: white;
  height: 1px;
  width: 100%;
  margin: 15px 0;
  @media ${device.laptop} {
    margin: 20px 0;
  }
`;

export default Header;
