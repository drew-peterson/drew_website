import React from 'react';
import PropTypes from 'prop-types';
import { List, Avatar } from 'antd';
import moment from 'moment';

const Commits = ({ history }) => {
  return (
    <List
      header="Latest Commits"
      dataSource={history}
      renderItem={({ node: { message, committedDate } }) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                icon="github"
                // style={{ backgroundColor: '#87d068' }}
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
