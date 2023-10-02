import React from "react"
import Image from "next/image"

const PromoProductCard = () => {
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
        <h2 className="mt-3 text-3xl ">Master Burger</h2>
        <p className="text-xl leading-3">
          <span className="text-md">de R$</span>
          24,99
        </p>
        <p className="text-xl">por incríveis</p>
        <h2 className="text-3xl text-light-red leading-3">
          <span className="text-xl">R$</span>19,99
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

export default PromoProductCard
