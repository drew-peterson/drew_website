import React, { Component } from 'react';

import Personal from './Personal';
import Contact from './Contact';
import { device } from '../common';
import img from './wallpaperLg.png';
import styled from 'styled-components';

console.log(device);

class Header extends Component {
  render() {
    return (
      <Hero src={img} className="hero">
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
  background: ${({ src }) => `url(${src}) no-repeat 0% 60%`};
  background-size: cover;
  position: relative;
  z-index: 1;
  height: 45vh;
  @media ${device.laptop} {
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
  padding: 20px 40px;
`;

const Border = styled.div`
  background-color: white;
  height: 1px;
  width: 100%;
  margin: 20px 0;
`;

export default Header;
