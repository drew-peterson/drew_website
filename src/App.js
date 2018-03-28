import { Layout } from 'antd';
import Header from './components/Header';
import Github from './containers/Github';
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const TOKEN = '4e90aeb509ce87e12cc81dec7d1b49f4092708ae';
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
          <Header />
          <Content>
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
