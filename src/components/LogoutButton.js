'use client'

import { signOut } from "next-auth/react"

export default function LogoutButton() { return (<button onClick={() => signOut()} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">Sign out</button>) }