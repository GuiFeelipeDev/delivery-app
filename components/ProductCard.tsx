import Image from "next/image"
import React from "react"

const ProductCard = () => {
  return (
    <div className="w-[160px] h-[240px] md:scale-110 mt-4 bg-medium-brown rounded-[20px] shadow-xl overflow-hidden flex flex-col font-jolly">
      <Image
        src="/burger.jpg"
        width={160}
        height={110}
        alt="Burger image"
        className="object-cover h-[110px]"
      />
      <div className="w-[160px] h-[160px] mt-[-30px] card_gradient flex flex-col items-center ">
        <h2 className="mt-3 text-3xl ">Baguncinha</h2>
        <p className="text-xl leading-3 text-dark-red">O Clássico</p>
        <p className="text-xl">por apenas</p>
        <h2 className="text-3xl text-dark-brown leading-3">
          <span className="text-xl">R$</span>11,99
        </h2>
        <button
          type="button"
          className="card_button text-2xl rounded-full hover:scale-110"
        >
          Já Quero!
        </button>
      </div>
    </div>
  )
}

export default ProductCard
