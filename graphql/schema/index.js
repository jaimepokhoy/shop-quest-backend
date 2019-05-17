const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Item {
    _id: ID!
    upc: Float!
  }

  type PriceMatchedItem {
    _id: ID!
    upc: Float!
    price: Float
  }

  type RootQuery {
    items: [Item!]!
    priceMatchItems(items: [Item]): [PriceMatchedItem!]!
  }

  schema {
    query: RootQuery
  }
`)