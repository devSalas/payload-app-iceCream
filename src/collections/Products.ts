import { CollectionConfig } from 'payload/types';

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'email',
  },

  fields: [
    {
      type:"text",
      name:"producto",
      label:"Nombre del producto"
    },
    {
      type:"text",
      name:"precio",
      label:"precio"
    },
    {
      name:"image",
      type:'upload',
      relationTo:'media'
    }
  ],
};

export default Products;