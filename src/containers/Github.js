import React, { Component } from 'react';
import Cards from '../components/Cards';
import GITHUB from '../graphql/Github';
import { Query } from 'react-apollo';
import { Icon } from 'antd';
class Github extends Component {
  render() {
    return (
      <Query query={GITHUB}>
        {({ loading, error, data: { repositoryOwner } }) => {
          if (error) return <p>An error occured: {error}</p>;
          if (loading) {
            return (
              <div style={{ textAlign: 'center', marginTop: 40 }}>
                <Icon type="loading" style={{ fontSize: 40 }} />
              </div>
            );
          }
          return <Cards repositories={repositoryOwner.repositories} />;
        }}
      </Query>
    );
  }
}

export default Github;
