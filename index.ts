import { ApolloServer } from 'apollo-server';

import { typeDefs as User, resolvers as UserTimeResolvers } from './src/schema/user';
import { typeDefs as Comment } from './src/typeDefs';
import { Resolvers } from './src/schema/generated/graphql';
import { queryResolver as CommentResolvers } from './src/queryResolver';

// Tüm modüllerin typeDefs ve resolvers tanımlarını burada birleştirebilirsiniz
const server = new ApolloServer({
  typeDefs: [User, Comment],
  resolvers: [UserTimeResolvers, CommentResolvers] as Resolvers, // Tip güvenliği için Resolvers arayüzünü bağlıyoruz
});

const main = () => {
    server.listen({ port: 4000 }).then(({ url }: any) => {
        console.log(`🚀 Sunucu çalışıyor: ${url}`);
    });
};

main();