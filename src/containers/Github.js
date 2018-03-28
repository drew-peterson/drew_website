import React, { Component } from 'react';
import Cards from '../components/Cards';
import GITHUB from '../graphql/Github';
import { Query } from 'react-apollo';
class Github extends Component {
  render() {
    return (
      <Query query={GITHUB}>
        {({ loading, error, data: { repositoryOwner } }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>Error: </p>;
          return <Cards repositories={repositoryOwner.repositories} />;
        }}
      </Query>
    );
  }
}

export default Github;
