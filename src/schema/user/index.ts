import { QueryResolvers } from '../generated/graphql';
import { typeDefs } from './typeDefs';
import { getUserById, getAllUsers } from '../../repository/user';

const queryResolvers: QueryResolvers = {
  users: () => {
    
    return getAllUsers();
  },
  user: (_, { id }, {user, language}) => {
    console.log(`Kullanıcı ID: ${id}, Context User: ${user}, Language: ${language}`);
    const userData = getUserById(id);

    if (!userData) {
      throw new Error(`Kullanıcı bulunamadı: ${id}`);
    }

    return userData;
  },
};

const resolvers = {
  Query: queryResolvers,
};

export { typeDefs, resolvers };