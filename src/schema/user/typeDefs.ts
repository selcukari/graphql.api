import gql from 'graphql-tag'

export const typeDefs = gql`
type User @cacheControl(maxAge: 180) {
  id: ID!
    """
    user's name.
    """
  name: String!
    """
    The user's email.
    """
  email: String!
}

type Query {
  users: [User!]!
  user(id: ID!): User
}`;