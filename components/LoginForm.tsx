"use client"

import React, { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" })

  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-400">
        <h1 className="text-xl font-bold my-4">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-4">
          <input
            type="email"
            required
            placeholder="Email"
            className="w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold cursor-pointer py-2 px-6"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
