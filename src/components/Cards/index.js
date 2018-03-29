import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import Card from './Card';
import CardInfoModal from './CardInfoModal';
import { Row, Col } from 'antd';

class _Cards extends Component {
  state = {
    visible: false,
    data: null
  };

  renderModal(data) {
    this.setState({ visible: true, data });
  }

  renderCards() {
    const { repositories: { edges } } = this.props;
    return _.map(edges, ({ node }) => {
      // have col in card doesnt work for some reason....
      return (
        <Col xs={{ span: 12 }} lg={{ span: 8 }} key={node.id}>
          <Card node={node} renderModal={this.renderModal.bind(this)} />
        </Col>
      );
    });
  }

  render() {
    const { visible, data } = this.state;
    return (
      <Cards>
        <Title>Github Projects</Title>
        <Row gutter={20}>{this.renderCards()}</Row>
        {visible && (
          <CardInfoModal
            visible={visible}
            data={data}
            handleCancel={() => this.setState({ visible: false, data: null })}
          />
        )}
      </Cards>
    );
  }
}

const Cards = styled.div`
  padding: 40px;
`;

const Title = styled.h2`
  margin-bottom: 14px;
  font-size: 28px;
`;
export default _Cards;
