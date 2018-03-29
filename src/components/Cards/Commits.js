import React from 'react';
import PropTypes from 'prop-types';
import { List, Avatar } from 'antd';
import moment from 'moment';

const Commits = ({ history }) => {
  return (
    <List
      header="Latest Commits:"
      dataSource={history}
      style={{ marginTop: 20 }}
      renderItem={({ node: { message, committedDate } }) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                icon="github"
                style={{ backgroundColor: '#1890ff' }}
                size="large"
              />
            }
            title={message}
            description={moment(committedDate).format('lll')}
          />
        </List.Item>
      )}
    />
  );
};

Commits.propTypes = {
  history: PropTypes.array.isRequired
};
export default Commits;
