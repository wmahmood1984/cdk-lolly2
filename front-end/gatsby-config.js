
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
        url: `https://kf675oi5zbfaneylahzkkyxnde.appsync-api.eu-west-1.amazonaws.com/graphql`,
        headers: {
          "x-api-key": "da2-py2e6tllbvba3c6j2dta336oru", // ENTER YOUR API KEY HERE
        },

      },
    },
  ],
}
