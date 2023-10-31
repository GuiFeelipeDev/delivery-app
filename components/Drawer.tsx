import Link from "next/link"
import React from "react"
import { BsHouse, BsPieChart } from "react-icons/bs"
import { LuShoppingBag } from "react-icons/lu"

const Divider = () => {
  return <div className="w-full h-[1px] bg-gray-500 my-1"></div>
}

const Drawer = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className="w-full h-screen font-poppins">
      <div className="w-full h-[80px] bg-blue-600 absolute flex p-4 items-center">
        <h2 className="text-white text-2xl">
          Dashboard administrativo - Fast Burger Delivery
        </h2>
      </div>
      <div className="flex">
        <aside className="w-[300px] h-[100vh] pt-[80px] border-gray-500 border-r-[1px]">
          <Link
            href={"/dashboard"}
            className="w-full h-[60px] px-4 flex items-center text-lg gap-6 hover:bg-gray-100 cursor-pointer text-gray-800"
          >
            <span className="text-2xl text-gray-600">
              <BsHouse />
            </span>
            <p>Início</p>
          </Link>
          <Divider />
          <div className="flex flex-col">
            <h3 className="text-xl ml-5 mt-3">Produtos</h3>
            <Link
              href={"/dashboard/produtos"}
              className="w-full h-[60px] px-4 flex items-center text-lg gap-6 hover:bg-gray-100 cursor-pointer text-gray-800"
            >
              <span className="text-2xl text-gray-600">
                <LuShoppingBag />
              </span>
              <p>Produtos</p>
            </Link>
            <div className="w-full h-[60px] px-4 flex items-center text-lg gap-6 hover:bg-gray-100 cursor-pointer text-gray-800">
              <span className="text-2xl text-gray-600">
                <BsPieChart />
              </span>
              <p>Categorias</p>
            </div>
          </div>
        </aside>
        <div className="w-full p-2 h-[100vh] pt-[85px]  overflow-scroll">
          <div>{children}</div>
        </div>
      </div>
    </body>
  )
}

export default Drawer
