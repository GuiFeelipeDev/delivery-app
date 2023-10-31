import Drawer from "@/components/Drawer"
import NavBar from "@/components/NavBar"
import "@/styles/globals.css"

export const metadata = {
  title: "Fast Burger Delivery",
  description: "Seu pedido descomplicado!",
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <Drawer>{children}</Drawer>
    </html>
  )
}

export default Layout
