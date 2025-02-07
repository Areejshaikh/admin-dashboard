// import { NextApiRequest, NextApiResponse } from "next";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// let cartItems: Product[] = [];

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { product }: { product: Product } = req.body;
//     cartItems.push(product);
//     return res.status(200).json({ message: "Product added to cart", cartItems });
//   } else if (req.method === "GET") {
//     return res.status(200).json(cartItems);
//   }
// }
