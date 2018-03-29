import React, { Component } from 'react';
import styled from 'styled-components';
import { device } from '../common';

class Personal extends Component {
  render() {
    return (
      <PersonalWrap className="personalWrap">
        <Image src="https://avatars3.githubusercontent.com/u/10780437?v=4" />
        <NameWrap>
          <h2>Drew Peterson</h2>
          <h3>Full-Stack Javascript Developer</h3>
        </NameWrap>
      </PersonalWrap>
    );
  }
}

const Image = styled.img`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  @media ${device.laptop} {
    height: 120px;
    width: 120px;
  }
`;
const PersonalWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    align-items: center;
    flex-direction: row;
  }
`;
const NameWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10px;
  @media ${device.tablet} {
    text-align: left;
    margin-top: 0;
    margin-left: 20px;
  }

  h2 {
    color: white;
    font-size: 25px;
    @media ${device.laptop} {
      font-size: 36px;
    }
  }

  h3 {
    color: white;
    font-weight: normal;
    @media ${device.laptop} {
    }
  }
`;

export default Personal;
