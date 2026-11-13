import { QueryResolvers } from '../generated/graphql';
import { typeDefs } from './typeDefs';

const queryResolvers: QueryResolvers = {
    users: () => {
      return [
        { id: '1', name: 'Ali', email: 'ali@example.com' },
        { id: '2', name: 'Ayşe', email: 'ayse@example.com' },
        { id: '3', name: 'Mehmet', email: 'mehmet@example.com' },
        { id: '4', name: 'Fatma', email: 'fatma@example.com' },
        { id: '5', name: 'Ahmet', email: 'ahmet@example.com' }
      ];
    },
    user: (_, { id }) => {
      // 'id' otomatik olarak string tipinde gelir
      return { id, name: 'Ali', email: 'ali@example.com' };
    },
};

const resolvers = {
  Query: queryResolvers,
};

export { typeDefs, resolvers };