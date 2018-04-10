import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch'
import { GRAPH_CMS_TOKEN } from '../../app-env'

const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: 'https://api.graphcms.com/simple/v1/cjft6pwpi1lvy0104l8x2nn38',
    headers: {
      Authorization: `Bearer ${GRAPH_CMS_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
})

export default client
