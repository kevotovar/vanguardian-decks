import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type VanguardCard {
    id: ID
    name: String
  }

  type Query {
    getVanguardCards: [VanguardCard]
  }
`
