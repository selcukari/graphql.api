import { ApolloServer } from 'apollo-server';

import { typeDefs as User, resolvers as UserTimeResolvers } from './src/schema/user';
import { typeDefs as Comment } from './src/typeDefs';
import { Resolvers } from './src/schema/generated/graphql';
import { queryResolver as CommentResolvers } from './src/queryResolver';

// Tüm modüllerin typeDefs ve resolvers tanımlarını burada birleştirebilirsiniz
const server = new ApolloServer({
    context: ({ req }) => {
        const defaultContext = {
    language: "tr",
    // dataLoaders: initializeDataLoaders(dataLoaders),
  };
        // İsteğe bağlı olarak, kullanıcı kimlik doğrulaması veya diğer bağlam verilerini burada ekleyebilirsiniz
        return { ...defaultContext, user: "1" };
    },
  typeDefs: [User, Comment],
  resolvers: [UserTimeResolvers, CommentResolvers] as Resolvers, // Tip güvenliği için Resolvers arayüzünü bağlıyoruz
});

const main = () => {
    server.listen({ port: 4000 }).then(({ url }: any) => {
        console.log(`🚀 Sunucu çalışıyor: ${url}`);
    });
};

main();