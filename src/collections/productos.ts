import { CollectionConfig } from 'payload/types';

export const Productos: CollectionConfig = {
   slug:"productos",
   fields:[
    {
      type:"text",
      name:"name",
      label:"nombre del producto"
    },
    {
      type:"number",
      name:"precio",
      label:"precio del producto"
    },
    {
      name:"image", 
      type:'upload',
      relationTo:'media'
    }
  ]
};

export default Productos;