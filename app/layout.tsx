import NavBar from "@/components/NavBar"
import "@/styles/globals.css"

export const metadata = {
  title: "Fast Burger Delivery",
  description: "Seu pedido descomplicado!",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="pt-[80px] min-h-[100vh] pattern_bg_light w-full flex justify-center">
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout
