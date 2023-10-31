import { redirect } from "next/navigation"

export default async function Home() {
  redirect("/cardapio")

  return <main className="w-full flex justify-center p-4"></main>
}
