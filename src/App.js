import { Layout } from 'antd';
import Header from './components/Header';
import Github from './containers/Github';
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const TOKEN = process.env.REACT_APP_GITHUB;
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  fetchOptions: {
    credentials: 'include'
  },
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: TOKEN ? `Bearer ${TOKEN}` : '' // Github required token
      }
    });
  }
});
const { Content, Footer } = Layout;
// https://medium.com/inspiration-supply/profile-page-design-inspiration-31878d23f906

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Layout>
          <Content>
            <Header />
            <Github />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            2018 Created by Drew Peterson
          </Footer>
        </Layout>
      </ApolloProvider>
    );
  }
}

export default App;
