"use client"

import Image from "next/image"
import { BsTrashFill, BsWhatsapp } from "react-icons/bs"
import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { LuChevronsUpDown } from "react-icons/lu"
import { AiOutlineCheck } from "react-icons/ai"
import { RadioGroup } from "@headlessui/react"

const payment = [
  { name: "Pix" },
  { name: "Crédito" },
  { name: "Debito" },
  { name: "Dinheiro" },
]

const adress = [
  {
    name: "Casa",
    street: "Rua dos Motoristas",
    district: "Cavalhada III",
    number: "290",
    reference: "Casa Azul de Esquina",
  },
  {
    name: "Trabalho",
    street: "Rua São João",
    district: "Cavalhada II",
    number: "912",
    reference: "UNEMAT",
  },
]

const Cart = () => {
  const [selected, setSelected] = useState(payment[0])
  const [radioSelected, setRadioSelected] = useState(adress[0])
  return (
    <section className="max-w-[500px] w-full p-4 min-w-[320px] flex flex-col items-center font-jolly">
      <h1 className="text-6xl text-dark-brown ">
        Pedido <span className="text-dark-red">Diliça</span>
      </h1>
      <div className="w-full min-h-[200px] bg-medium-brown rounded-[20px] mt-2 p-2 gap-1 flex flex-col items-center">
        {["Master Burger", "BRUTUS!!!"].map((item, index) => {
          const isRound = index === 0 ? "rounded-t-[20px]" : ""
          return (
            <div
              className={"overflow-hidden flex w-full " + isRound}
              key={index}
            >
              <div className="min-w-[120px] min-h-[120px] relative">
                <Image
                  src="/burger.jpg"
                  width={120}
                  height={120}
                  alt="Foto de um hamburger"
                />
                <div className="absolute right-0 top-0 w-[20px] h-[120px] cart_gradient"></div>
              </div>
              <div className="w-full h-[120px] bg-light-brown p-2 ">
                <div className="flex w-full justify-between items-center ">
                  <h2 className="text-3xl">{item}</h2>
                  <BsTrashFill className="text-2xl text-dark-red cursor-pointer hover:scale-110" />
                </div>
                <p className="text-xl leading-3 text-dark-red">quantidade:</p>
                <div className="flex w-full justify-between items-center">
                  <div className="text-5xl flex items-center gap-1">
                    <span className="cursor-pointer hover:scale-110">-</span>
                    <span className="font-poppins text-2xl mt-2 bg-medium-brown rounded-[5px] p-1 min-w-[40px] text-center">
                      10
                    </span>
                    <span className="cursor-pointer hover:scale-110">+</span>
                  </div>
                  <div className="">
                    <p>Subtotal:</p>
                    <h3 className="text-4xl leading-3">
                      <span className="text-2xl ">R$</span>39,98
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <button
          type="button"
          className="card_button py-1 px-3 text-2xl rounded-full mt-2 mb-2 hover:scale-110"
        >
          Continuar pedindo 😋
        </button>
      </div>
      <h1 className="text-6xl text-dark-brown mt-4 mb-4">
        <span className="text-dark-red">Dados</span> Adicionais
      </h1>
      <div className="w-full min-h-[200px] bg-medium-brown rounded-[20px] mt-2 p-2 gap-1 flex flex-col items-center mb-[120px]">
        <input
          type="text"
          placeholder="Seu nome..."
          className="text-xl mt-3 rounded-full border-2 border-dark-brown p-2 text-dark-brown outline-none bg-light-brown placeholder-dark-brown w-full max-w-[300px]"
        />
        <div className="flex gap-5 text-2xl accent-dark-brown">
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="radio"
              className="w-[20px] h-[20px] cursor-pointer"
            />
            <span>Retirar na Loja</span>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="radio"
              className="w-[20px] h-[20px] cursor-pointer"
            />
            <span>Delivery</span>
          </div>
        </div>
        <div className="w-full">
          <div className="mx-auto w-full max-w-md">
            <RadioGroup value={radioSelected} onChange={setRadioSelected}>
              <RadioGroup.Label className="sr-only">
                Server size
              </RadioGroup.Label>
              <div className="space-y-2">
                {adress.map((item) => (
                  <RadioGroup.Option
                    key={item.name}
                    value={item}
                    className={({ active, checked }) =>
                      `${
                        active
                          ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-medium-brown"
                          : ""
                      }
                  ${
                    checked
                      ? "bg-dark-brown bg-opacity-75 text-white"
                      : "bg-light-brown text-dark-brown"
                  }
                    relative flex cursor-pointer px-5 py-4 shadow-lg focus:outline-none`
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <RadioGroup.Label
                                as="p"
                                className={`text-2xl ${
                                  checked ? "text-white" : "text-dark-brown"
                                }`}
                              >
                                {item.name}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className={`flex flex-col text-md font-poppins ${
                                  checked ? "text-sky-100" : "text-dark-brown"
                                }`}
                              >
                                <span>
                                  {item.street}, {item.number}
                                </span>{" "}
                                <span>
                                  {item.district}, {item.reference}
                                </span>
                              </RadioGroup.Description>
                            </div>
                          </div>
                          {checked && (
                            <div className="shrink-0 text-white">
                              <CheckIcon className="h-6 w-6" />
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
        <h3 className="text-dark-red text-2xl">Adicionar endereço +</h3>
        <h3 className="text-dark-brown text-3xl">Método de Pagamento</h3>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1 w-full max-w-[260px] font-poppins mb-[20px]">
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute bottom-0 mb-12 max-h-60 w-full overflow-auto rounded-md bg-light-brown py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {payment.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-amber-100 text-dark-brown"
                          : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-dark-brown">
                            <AiOutlineCheck
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
            <Listbox.Button className="relative  w-full border-2 cursor-pointer border-dark-brown rounded-full bg-light-brown py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <LuChevronsUpDown
                  className="h-5 w-5 text-dark-brown"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
          </div>
        </Listbox>
      </div>
      <div className="w-full h-[100px] bg-light-brown fixed bottom-0 border-2 border-t-dark-brown flex justify-center">
        <div className="w-full max-w-[900px]  h-[100px] px-2 py-1 flex justify-between">
          <div className="flex flex-col mt-1">
            <p className="text-2xl leading-4 gap-2 text-dark-brown">
              subtotal: R$99,99
            </p>
            <p className="text-2xl text-dark-red">entrega: R$05,99</p>
            <p className="text-4xl text-dark-brown leading-8">
              Total: R$104,99
            </p>
          </div>
          <div className="flex h-[100px] items-center">
            <button
              type="button"
              className="card_button py-2 px-3 text-2xl rounded-full mt-2 mb-2 hover:scale-110 w-auto flex gap-2 items-center"
            >
              FECHOUU!!! <BsWhatsapp />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Cart
