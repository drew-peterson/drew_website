import gql from 'graphql-tag';
export default gql`
  {
    repositoryOwner(login: "weeznog") {
      # ... on User {
      #   email
      #   name
      #   url
      #   avatarUrl
      # }
      repositories(first: 40, orderBy: { field: CREATED_AT, direction: DESC }) {
        edges {
          node {
            ... on Repository {
              id
              name
              description
              updatedAt
              repositoryTopics(first: 10) {
                edges {
                  node {
                    topic {
                      id
                      name
                    }
                  }
                }
              }
              languages(first: 10) {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
              url
              homepageUrl
              defaultBranchRef {
                target {
                  commitUrl
                  ... on Commit {
                    history(first: 3) {
                      edges {
                        node {
                          ... on Commit {
                            message
                            committedDate
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
