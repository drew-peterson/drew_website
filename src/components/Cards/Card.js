import Languages from './Languages';
import React, { Component } from 'react';
import moment from 'moment';
import { Card } from 'antd';
const { Meta } = Card;

class _Card extends Component {
  render() {
    const { renderModal, node } = this.props;
    const { name, updatedAt, description, languages } = node;

    return (
      <Card
        hoverable
        style={{ marginTop: 16 }}
        onClick={() => renderModal(this.props.node)}
      >
        <Meta title={name} description={description} />
        <Meta
          style={styles.description}
          description={`last updated: ${moment(updatedAt).format('lll')}`}
        />
        <Languages languages={languages.edges} style={styles.languages} />
      </Card>
    );
  }
}

const styles = {
  languages: {
    marginTop: '10px'
  },
  description: {
    marginTop: '15px',
    fontSize: '10px'
  }
};

export default _Card;
