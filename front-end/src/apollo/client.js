import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache,HttpLink } from '@apollo/client';

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://w7aruvroyveh7ip6bglxu4ijti.appsync-api.eu-west-1.amazonaws.com/graphql',
       fetch, 
       headers: {
        "x-api-key": "da2-aiuib7hwarhpjcenp2xbrmdiuu", // ENTER YOUR API KEY HERE
      },
    }),
    cache: new InMemoryCache()
})