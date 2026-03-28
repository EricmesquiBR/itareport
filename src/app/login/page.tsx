"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Header from "../components/header"
import Footer from "../components/footer"
import { useGlobalContext } from "../context/store"
import { SHA256 } from "crypto-js"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3030"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setUserId } = useGlobalContext()
    const router = useRouter()

    const hashPassword = (passwordValue: string) => {
        return SHA256(passwordValue).toString()
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const hashedPassword = hashPassword(password)

        axios
            .post(`${API_URL}/user/login`, {
                email,
                password: hashedPassword
            })
            .then((response) => {
                if (response.data.error) {
                    alert(response.data.message)
                    return
                }

                if (!response.data.success) {
                    alert(response.data.message)
                    return
                }
                const id_user = response.data.data.id_user
                setUserId(id_user)
                alert(response.data.message)
                router.push("/")
            })
            .catch((error: unknown) => {
                console.log(error)
                alert("Erro ao fazer login")
            })

        setEmail("")
        setPassword("")
    }

    return (
        <>
            <Header />
            <div className='flex justify-center items-center pt-48 pb-48'>
                <form
                    className='form-login p-6 shadow-lg bg-slate-50 rounded-md'
                    onSubmit={handleSubmit}
                >
                    <h1 className='text-3xl block text-center font-semibold'>
                        Login
                    </h1>
                    <hr className='mt-3' />
                    <div className='mt-3'>
                        <label htmlFor='email' className='block text-base mb-2'>
                            Email
                        </label>
                        <input
                            type='text'
                            id='email'
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            placeholder='Digite seu email...'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor='password' className='block text-base mb-2'>
                            Senha
                        </label>
                        <input
                            type='password'
                            id='password'
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            placeholder='Digite sua senha...'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='mt-3 flex justify-between items-center'>
                        <div>
                            <input type='checkbox' />
                            <label className='ps-1'>Lembre de Mim</label>
                        </div>
                        <div>
                            <a href='#' className='text-gray-900 font-semibold'>
                                Esqueci Minha Senha
                            </a>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button
                            type='submit'
                            className='border-2 border-gray-900 bg-gray-900 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-gray-900 font-semibold'
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}
