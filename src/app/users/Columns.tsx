"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
interface Customer {
    name: string;
    email: string;
    lastOrder: string; // You can adjust this type to Date if needed
    method: 'PayPal' | 'Credit Card' | 'Bank Transfer' | 'Bitcoin'; // Add more methods as needed
  };
  
  export const customers: Customer[] = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      lastOrder: "2024-06-01T14:30:00Z",
      method: "Credit Card",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      lastOrder: "2024-06-02T10:15:00Z",
      method: "PayPal",
    },
    {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      lastOrder: "2024-06-03T08:45:00Z",
      method: "Bank Transfer",
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      lastOrder: "2024-06-04T12:00:00Z",
      method: "Bitcoin",
    },
    {
      name: "David Wilson",
      email: "david.wilson@example.com",
      lastOrder: "2024-06-05T16:20:00Z",
      method: "Credit Card",
    },
    {
      name: "Olivia Martinez",
      email: "olivia.martinez@example.com",
      lastOrder: "2024-06-06T09:00:00Z",
      method: "PayPal",
    },
    {
      name: "James Garcia",
      email: "james.garcia@example.com",
      lastOrder: "2024-06-07T11:30:00Z",
      method: "Bank Transfer",
    },
    {
      name: "Sophia Hernandez",
      email: "sophia.hernandez@example.com",
      lastOrder: "2024-06-08T15:45:00Z",
      method: "Bitcoin",
    },
    {
      name: "William Lee",
      email: "william.lee@example.com",
      lastOrder: "2024-06-09T13:25:00Z",
      method: "Credit Card",
    },
    {
      name: "Isabella King",
      email: "isabella.king@example.com",
      lastOrder: "2024-06-10T07:40:00Z",
      method: "PayPal",
    },
    {
      name: "Alexander Lewis",
      email: "alexander.lewis@example.com",
      lastOrder: "2024-06-11T10:10:00Z",
      method: "Bank Transfer",
    },
    {
      name: "Mia Walker",
      email: "mia.walker@example.com",
      lastOrder: "2024-06-12T14:55:00Z",
      method: "Bitcoin",
    },
    {
      name: "Ethan Young",
      email: "ethan.young@example.com",
      lastOrder: "2024-06-13T09:35:00Z",
      method: "Credit Card",
    },
    {
      name: "Ava Hall",
      email: "ava.hall@example.com",
      lastOrder: "2024-06-14T16:50:00Z",
      method: "PayPal",
    },
    {
      name: "Lucas Allen",
      email: "lucas.allen@example.com",
      lastOrder: "2024-06-15T11:05:00Z",
      method: "Bank Transfer",
    },
    {
      name: "Charlotte Wright",
      email: "charlotte.wright@example.com",
      lastOrder: "2024-06-16T12:20:00Z",
      method: "Bitcoin",
    }
  ];
  

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrder",
    header: "LastOrder",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
]


  
