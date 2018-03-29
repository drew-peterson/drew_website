import Languages from './Languages';
import Topics from './Topics';
import React, { Component } from 'react';
import moment from 'moment';
import { Card } from 'antd';
const { Meta } = Card;

class _Card extends Component {
  render() {
    const { renderModal, node } = this.props;
    const { name, updatedAt, description, languages, repositoryTopics } = node;

    return (
      <Card
        hoverable
        style={{ marginTop: 16, height: 250 }}
        onClick={() => renderModal(this.props.node)}
        bodyStyle={styles.cardBody}
      >
        <Meta title={name} description={description} />
        <Meta
          style={styles.description}
          description={`last updated: ${moment(updatedAt).format('lll')}`}
        />
        <Topics topics={repositoryTopics.edges} style={styles.topics} />
        {!repositoryTopics.edges.length && (
          <Languages languages={languages.edges} style={styles.languages} />
        )}
      </Card>
    );
  }
}

const styles = {
  topics: {
    marginTop: '10px',
    backgroundColor: '#1890ff',
    color: 'white'
  },
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
