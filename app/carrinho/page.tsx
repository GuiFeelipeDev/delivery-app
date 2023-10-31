import { redirect } from "next/navigation"

const CartRedirect = () => {
  redirect("/cardapio/carrinho")
}

export default CartRedirect
