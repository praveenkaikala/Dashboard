"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
interface Products {
  productname: string;
  price: string;
  totalorders: number; // Changed to number for total orders
  revenue: number;
};

export const products: Products[] = [
  {
    productname: "Product A",
    price: "$29.99",
    totalorders: 150,
    revenue: 4498.50,
  },
  {
    productname: "Product B",
    price: "$49.99",
    totalorders: 200,
    revenue: 9998.00,
  },
  {
    productname: "Product C",
    price: "$19.99",
    totalorders: 300,
    revenue: 5997.00,
  },
  {
    productname: "Product D",
    price: "$99.99",
    totalorders: 50,
    revenue: 4999.50,
  },
  {
    productname: "Product E",
    price: "$9.99",
    totalorders: 400,
    revenue: 3996.00,
  },
  {
    productname: "Product F",
    price: "$39.99",
    totalorders: 120,
    revenue: 4798.80,
  },
  {
    productname: "Product G",
    price: "$59.99",
    totalorders: 180,
    revenue: 10798.20,
  },
  {
    productname: "Product H",
    price: "$89.99",
    totalorders: 70,
    revenue: 6299.30,
  },
  {
    productname: "Product I",
    price: "$24.99",
    totalorders: 250,
    revenue: 6247.50,
  },
  {
    productname: "Product J",
    price: "$74.99",
    totalorders: 90,
    revenue: 6749.10,
  },
  {
    productname: "Product K",
    price: "$14.99",
    totalorders: 320,
    revenue: 4796.80,
  },
  {
    productname: "Product L",
    price: "$44.99",
    totalorders: 110,
    revenue: 4948.90,
  },
  {
    productname: "Product M",
    price: "$64.99",
    totalorders: 140,
    revenue: 9098.60,
  },
  {
    productname: "Product N",
    price: "$34.99",
    totalorders: 210,
    revenue: 7347.90,
  },
  {
    productname: "Product O",
    price: "$54.99",
    totalorders: 160,
    revenue: 8798.40,
  },
  {
    productname: "Product P",
    price: "$79.99",
    totalorders: 80,
    revenue: 6399.20,
  }
];

  

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: "productname",
    header: "Product Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "totalorders",
    header: "Total Orders",
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
  },
]


  
