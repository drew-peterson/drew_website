import React, { Component } from 'react';
import styled from 'styled-components';

class Personal extends Component {
  render() {
    return (
      <PersonalWrap>
        <Image src="https://avatars3.githubusercontent.com/u/10780437?v=4" />
        <NameWrap>
          <h2>Drew Peterson</h2>
          <h3>FullStack Javascript Developer</h3>
        </NameWrap>
      </PersonalWrap>
    );
  }
}

const Image = styled.img`
  height: 120px;
  width: 120px;
  background-color: blue;
  border-radius: 50%;
`;
const PersonalWrap = styled.div`
  display: flex;
  align-items: center;
`;
const NameWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  h2 {
    font-size: 36px;
  }

  h3 {
    margin-top: 5px;
  }
`;

export default Personal;
