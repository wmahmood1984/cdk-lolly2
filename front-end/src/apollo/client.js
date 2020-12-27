import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache,HttpLink } from '@apollo/client';

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://kf675oi5zbfaneylahzkkyxnde.appsync-api.eu-west-1.amazonaws.com/graphql',
       fetch, 
       headers: {
        "x-api-key": "da2-py2e6tllbvba3c6j2dta336oru", // ENTER YOUR API KEY HERE
      },
    }),
    cache: new InMemoryCache()
})