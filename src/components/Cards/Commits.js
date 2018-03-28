import React from 'react';
import PropTypes from 'prop-types';
// import { List, Avatar } from 'antd';
import { List } from 'antd';

const Commits = ({ history }) => {
  return (
    <List
      header="Latest Commits"
      dataSource={history}
      renderItem={({ node: { message, committedDate } }) => (
        <List.Item>
          <List.Item.Meta
            // avatar={
            //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            // }
            title={committedDate}
            description={message}
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
