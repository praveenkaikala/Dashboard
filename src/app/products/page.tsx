import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
 import { columns } from "./columns"
import { products } from "./columns"
 
  import React from 'react'
import { DataTable } from "./DataTable"
  
 const Tablepage = () => {
    return (
        <div className="container mx-auto py-5">
              <h2 className="text-3xl font-bold tracking-tight p-3">Products</h2>
        <DataTable columns={columns} data={products} />
      </div>
    )
  }
  
  export default Tablepage

    