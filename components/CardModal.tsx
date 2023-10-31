import { Dialog, Transition } from "@headlessui/react"
import { Dispatch, Fragment, SetStateAction, useState } from "react"
import Image from "next/image"
interface openState {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function CardModal({ open, setOpen }: openState) {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="pattern_bg_medium w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all flex flex-col items-center">
                  <span
                    className="absolute right-7 top-4 font-jolly text-3xl text-dark-red hover:scale-110 cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    X
                  </span>
                  <Image
                    src={"/burger.jpg"}
                    alt="Hamburger delicioso hummm"
                    width={160}
                    height={160}
                    className="rounded-[20px] border-[3px] border-dark-brown"
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-5xl font-medium text-dark-brown font-jolly"
                  >
                    Master Burger
                  </Dialog.Title>
                  <div className="mt-2 bg-light-brown p-4 rounded-[20px] text-center default_shadow">
                    <h4 className="font-jolly text-dark-red text-4xl mt-[-32px]">
                      ingredientes
                    </h4>
                    <p className="text-lg text-dark-brown font-poppins">
                      Pão, hamburger (200g), alface, tomate, cheddar, molho
                      caseiro da casa, salame frito.
                    </p>
                  </div>

                  <div className="font-jolly flex items-center gap-5">
                    <div className="text-6xl flex items-center gap-1">
                      <span className="cursor-pointer">-</span>
                      <span className="font-poppins text-3xl mt-2 bg-light-brown rounded-[5px] p-1 min-w-[45px] text-center">
                        10
                      </span>
                      <span className="cursor-pointer">+</span>
                    </div>
                    <h4 className="text-3xl mt-2">
                      R$<span className="text-5xl">299,90</span>
                    </h4>
                  </div>

                  <div className="mt-4 flex flex-col items-center">
                    <button
                      type="button"
                      className="card_button font-jolly text-3xl rounded-full px-[20px] py-[8px]"
                      onClick={() => setOpen(false)}
                    >
                      Bota no Carrinho 😋
                    </button>
                    <p
                      className="font-poppins mt-2 cursor-pointer underline"
                      onClick={() => setOpen(false)}
                    >
                      Num vo quere 😭
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
