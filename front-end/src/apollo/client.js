import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache,HttpLink } from '@apollo/client';

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://3ibkqi365jfzvivalopoblzsuq.appsync-api.eu-west-1.amazonaws.com/graphql',
       fetch, 
       headers: {
        "x-api-key": "da2-4e5hpgtowjah5hgajyfh2e7cju", // ENTER YOUR API KEY HERE
      },
    }),
    cache: new InMemoryCache()
})