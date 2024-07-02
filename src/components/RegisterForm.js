"use client";

import { useState } from "react";
import Link from "next/link";


export default function RegisterForm() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const disableSubmit = !password || (password !== repeatPassword) || password.length < 8


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { fullname, email, phone, password, repeatPassword };
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        });

        if (response.ok) {
            setFullname('');
            setEmail('');
            setPhone('');
            setPassword('');
            setRepeatPassword('');
            alert('Successfully registered!');
        } else {
            alert('Failed to register');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
            <div className="container mx-auto px-4 py-16">
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-purple-800 mb-4">Register</h1>
                    <Link href="/" className="text-purple-600 hover:text-purple-800 transition duration-300">
                        ← Back to Home
                    </Link> <br />
                    <Link href="/login" className="text-purple-600 hover:text-purple-800 transition duration-300">
                        Already have an account? Login
                    </Link>
                </header>

                <main className="bg-white rounded-lg shadow-lg p-8 mb-12 text-black">
                    <form onSubmit={handleSubmit} className="mb-12">
                        <div className="mb-4">
                            <label htmlFor="fullname" className="block text-purple-700 font-bold mb-2">Full Name</label>
                            <input
                                id="fullname"
                                type="text"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                required
                                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-purple-700 font-bold mb-2">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-purple-700 font-bold mb-2">Phone Number</label>
                            <input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-purple-700 font-bold mb-2">Password (min 8 karakter)</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-purple-700 font-bold mb-2">Repeat Password</label>
                            <input
                                id="repeat-password"
                                type="password"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                required
                                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <button aria-disabled={disableSubmit} disabled={disableSubmit} type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 disabled:cursor-not-allowed">
                            Register
                        </button>
                    </form>
                </main>
            </div>
        </div>
    );
}
