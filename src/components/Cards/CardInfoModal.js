import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import Languages from './Languages';
import Topics from './Topics';
import Commits from './Commits';

class CardInfoModal extends Component {
  renderLinks() {
    const { url, homepageUrl } = this.props.data;
    if (homepageUrl) {
      return [
        <Button key="1" href={url} type="primary" target="_blank">
          Github
        </Button>,
        <Button
          key="2"
          href={homepageUrl}
          target="_blank"
          style={{ marginLeft: 10 }}
          type="primary"
        >
          Web
        </Button>
      ];
    }
    return (
      <Button href={url} type="primary" target="_blank">
        Github
      </Button>
    );
  }

  render() {
    const { visible, handleCancel, data } = this.props;
    const {
      description,
      name,
      languages,
      repositoryTopics,
      defaultBranchRef: { target: { history } }
    } = data;
    return (
      <Modal
        title={name}
        visible={visible}
        onCancel={handleCancel}
        footer={this.renderLinks()}
      >
        <p style={styles.description}>{description}</p>
        <Topics topics={repositoryTopics.edges} style={styles.topics} />
        {!repositoryTopics.edges.length && (
          <Languages languages={languages.edges} style={styles.languages} />
        )}
        <Commits history={history.edges} style={styles.commits} />
      </Modal>
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
    marginTop: '20px'
  },
  commits: {
    marginTop: '25px'
  },
  description: {}
};

export default CardInfoModal;
