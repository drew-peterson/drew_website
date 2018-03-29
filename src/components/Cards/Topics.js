import React from 'react';
import { Tag } from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Topic = ({ topics, style }) => {
  return (
    <div>
      {_.map(topics, ({ node: { topic: { name, id } } }) => {
        return (
          <Tag key={id} style={style}>
            {name}
          </Tag>
        );
      })}
    </div>
  );
};

Topic.propTypes = {
  topics: PropTypes.array.isRequired
};

export default Topic;
