import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  // src/schema/ altındaki tüm klasörlerde bulunan typeDefs.ts dosyalarını otomatik okur
  schema: './src/schema/**/typeDefs.ts',
  generates: {
    // Üretilen tüm tipleri tek bir dosyada toplar
    './src/schema/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers'
      ],
      config: {
        useIndexSignature: true, // Apollo Server vb. resolver tipleriyle tam uyum sağlar
      }
    }
  }
};

export default config;