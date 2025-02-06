export default{
    name: "order",
    title: "Order",
    type: "document",
    fields: [
     {
        name: "firstName",
        title: "First Name",
        type: "string",
      },
      {
        name: "lastName",
        title: "Last Name",
        type: "string",
      },
      {
        name: "address",
        title: "Address",
        type: "string",
      },
      {
        name: "city",
        title: "City",
        type: "string",
      },
    {
        name: "zipCode",
        title: "Zip Code",
        type: "string",
      },
      {
        name: "phone",
        title: "Phone",
        type: "number",
      },
      {
        name: "email",
        title: "Email",
        type: "boolean",
      },
      {
        name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Completed', value: 'completed' },
          { title: 'Disatch', value: 'dispatch' },
        ],
      }
      },
      {
        name: 'cartItems',
        title: 'Cart Items',
        type: 'array',
        of: [
          { type: 'reference' ,to : {type: 'product'}}]
      }
    ],
  };
  