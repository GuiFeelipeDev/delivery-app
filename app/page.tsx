import ProductCard from "@/components/ProductCard"
import PromoProductCard from "@/components/PromoProductCard"
import Image from "next/image"

export default function Home() {
  return (
    <main className="w-full flex justify-center p-4">
      <section className="flex flex-col items-center w-full">
        <p className="text-md font-poppins text-dark-brown">
          Satisfação em cada mordida!
        </p>
        <h1 className="font-jolly text-5xl text-dark-brown ">
          <span className="text-dark-red">Promos</span> de Hoje
        </h1>
        <div className="w-full flex justify-center items-center gap-2 sm:gap-8 ">
          <PromoProductCard />
          <PromoProductCard />
        </div>
        <h1 className="font-jolly text-5xl text-dark-brown mt-4">
          Nossos <span className="text-dark-red">Lanches</span>
        </h1>
        <p className="text-md font-poppins text-dark-brown">
          Muito bons por sinal...
        </p>
        <div className="w-full flex justify-center items-center gap-2 sm:gap-8 ">
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </main>
  )
}
