import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import Languages from './Languages';
import Commits from './Commits';

class CardInfoModal extends Component {
  renderLinks() {
    const { url, homepageUrl } = this.props.data;
    if (homepageUrl) {
      return [
        <Button key="1" href={url} type="primary">
          Github
        </Button>,
        <Button
          key="2"
          href={homepageUrl}
          style={{ marginLeft: 10 }}
          type="primary"
        >
          Web
        </Button>
      ];
    }
    return <Button href={url}>Github</Button>;
  }

  render() {
    const { visible, handleCancel, data } = this.props;
    const {
      description,
      name,
      languages,
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
        <Languages languages={languages.edges} style={{ marginTop: '20px' }} />
        <Commits history={history.edges} style={styles.commits} />
      </Modal>
    );
  }
}

const styles = {
  languages: {
    marginTop: '25px'
  },
  commits: {
    marginTop: '25px'
  },
  description: {}
};

export default CardInfoModal;
