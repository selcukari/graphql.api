import gql from 'graphql-tag'

export const typeDefs = gql`
  type User @cacheControl(maxAge: 180) {
    """
      user's id.
    """
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
    """
     get all users.
    """
    users: [User!]!
    """
     get user by id.
    """
    user(id: ID!): User
  }
`;