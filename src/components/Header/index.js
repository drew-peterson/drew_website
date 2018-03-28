import React, { Component } from 'react';

import Personal from './Personal';
import Contact from './Contact';
import img from './wallpaper.png';

import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <Hero src={img}>
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
  height: 45vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderWrap = styled.div`
  border: 1px solid
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
