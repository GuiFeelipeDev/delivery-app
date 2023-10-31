import NavBar from "@/components/NavBar"
import "@/styles/globals.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <body>
        <NavBar />
        <div className="pt-[80px] min-h-[100vh] pattern_bg_light w-full flex justify-center">
          {children}
        </div>
      </body>
    </html>
  )
}

export default Layout
