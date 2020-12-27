
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "SWAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "swapi",
        // Url to query from
        url: `https://w7aruvroyveh7ip6bglxu4ijti.appsync-api.eu-west-1.amazonaws.com/graphql`,
        headers: {
          "x-api-key": "da2-aiuib7hwarhpjcenp2xbrmdiuu", // ENTER YOUR API KEY HERE
        },

      },
    },
  ],
}
