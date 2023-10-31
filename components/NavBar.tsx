import React from "react"
import Link from "next/link"
import Image from "next/image"
import { BsCart3 } from "react-icons/bs"
const NavBar = () => {
  return (
    <section
      className={`w-full h-[80px]  flex items-center justify-center absolute top-0 bg-main-brown`}
    >
      <div className="w-[90%] min-w-[340px] flex justify-between items-center">
        <div className="flex cursor-pointer">
          <Link href="/cardapio">
            <Image
              src="/logo.png"
              alt="FastBurger Logo"
              width={70}
              height={70}
            />
          </Link>
          <Link href="/cardapio">
            <div className="main_font flex flex-col leading-none items-center]">
              <Image
                src="/logo-text.svg"
                alt="Fast Burger Delivery"
                width={90}
                height={90}
              />
            </div>
          </Link>
        </div>
        <Link href={"/cardapio/carrinho"}>
          <BsCart3 className={`text-4xl text-medium-brown cursor-pointer`} />
        </Link>
      </div>
    </section>
  )
}

export default NavBar
