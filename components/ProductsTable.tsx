import React from "react"
import { BsPencil } from "react-icons/bs"

const items = [
  {
    name: "Master Burger",
    category: "Lanches",
    price: "19,99",
  },
  {
    name: "Brutuss!!",
    category: "Lanches",
    price: "24,99",
  },
  {
    name: "Baguncinha",
    category: "Lanches",
    price: "11,99",
  },
]

const ProductsTable = () => {
  return (
    <div>
      <table className=" w-[800px] rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white ">
          <tr className="text-left">
            <th className="p-3">Nome</th>
            <th className="p-3">Categoria</th>
            <th className="p-3">Preço</th>
            <th className="p-3" align="right">
              Opções
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-200" : "bg-white"} `}
              >
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">{item.price}</td>
                <td className="p-3" align="right">
                  <BsPencil className="cursor-pointer text-green-700 text-xl" />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable
