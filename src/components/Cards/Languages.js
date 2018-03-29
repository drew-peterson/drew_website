import React from 'react';
import { Tag } from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Languages = ({ languages, style }) => {
  return (
    <div>
      {_.map(languages, ({ node: { name, color } }) => {
        return (
          <Tag key={name} color={color} style={style}>
            {name}
          </Tag>
        );
      })}
    </div>
  );
};

Languages.propTypes = {
  languages: PropTypes.array.isRequired
};

export default Languages;
