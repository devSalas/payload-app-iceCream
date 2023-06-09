import { buildConfig } from 'payload/config';
import path from 'path';
import TodoLists from './collections/TodoLists';
import Users from './collections/Users';
import Products from './collections/Products';
import Media from './collections/Media';
import Productos from './collections/productos';


export default buildConfig({
  serverURL: `https://ice-cream-y9pb.onrender.com:${process.env.PORT}`,  
  admin: {
    user: Users.slug,
  },
  collections: [TodoLists, Users,Products,Media,Productos],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
