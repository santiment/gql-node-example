import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import 'cross-fetch/polyfill'
 
const client = new ApolloClient({
  uri: 'https://sanbase.stage.internal.santiment.net/graphql'
})

 
client.query({
  query: gql`
    query allProjectsGQL {
      allProjects {
        name
      }
    }
  `,
})
  .then(data => console.log(data))
  .catch(error => console.error(error))
