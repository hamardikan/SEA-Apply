import Link from "next/link"
import LogoutButton from "./LogoutButton"

export default function AdminNavigations() {
    return (<div className="flex justify-center space-x-4 pt-8">
        <Link href="/dashboard/admin/services" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Services
        </Link>
        <Link href="/dashboard/admin/branches" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Branches
        </Link>
        <LogoutButton />

    </div>)
}