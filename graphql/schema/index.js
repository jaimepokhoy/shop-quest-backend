const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Item {
    _id: ID!
    upc: Int!
  }

  type RootQuery {
    items: [Item!]!
  }

  schema {
    query: RootQuery
  }
`)