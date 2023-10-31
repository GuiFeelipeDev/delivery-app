import ProductsTable from "@/components/ProductsTable"
import React from "react"
import { BsPencil } from "react-icons/bs"

const Produtos = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h2 className="w-full text-3xl font-bold pl-6 mt-4">Produtos</h2>
      <ProductsTable />
    </div>
  )
}

export default Produtos
