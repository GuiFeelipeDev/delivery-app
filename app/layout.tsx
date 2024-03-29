import NavBar from "@/components/NavBar"
import "@/styles/globals.css"

export const metadata = {
  title: "Fast Burger Delivery",
  description: "Seu pedido descomplicado!",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
