"use client"
import { signIn } from "next-auth/react"
import Link from "next/link";
import { useState } from "react";


export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await signIn("credentials", {
            email,
            password,
            callbackUrl: "/dashboard",
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
            <div className="container mx-auto px-4 py-16">
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-purple-800 mb-4">Login</h1>
                    <Link href="/" className="text-purple-600 hover:text-purple-800 transition duration-300">
                        ← Back to Home
                    </Link>
                </header>

                <main className="bg-white rounded-lg shadow-lg p-8 mb-12 text-black">
                    <form
                        method="POST"
                        onSubmit={onSubmit}
                        className="mb-12">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-purple-700 font-bold mb-2">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-purple-700 font-bold mb-2">Password</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>

                        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 disabled:cursor-not-allowed">
                            Register
                        </button>
                    </form>
                </main>
            </div>
        </div>
    );
}



