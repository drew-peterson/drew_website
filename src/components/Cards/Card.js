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
        style={{ marginTop: 16, height: 200 }}
        onClick={() => renderModal(this.props.node)}
        bodyStyle={styles.cardBody}
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
    marginTop: 'auto',
    fontSize: '10px'
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
};

export default _Card;
