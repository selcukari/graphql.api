import gql from 'graphql-tag'

export const typeDefs = gql`
type User @cacheControl(maxAge: 180) {
  id: ID!
  name: String!
  email: String!
}

type Query {
  users: [User!]!
  user(id: ID!): User
}`;