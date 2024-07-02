import Link from "next/link"
import LogoutButton from "./LogoutButton"

export default function Navigations({ session }) {
    return (<div className="flex justify-center space-x-4 mt-8">
        {session?.user?.email ? <>
            <Link href="/reviews" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Add Review
            </Link>
            <LogoutButton />
            <Link href="/reservation" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Make a Reservation
            </Link>
        </> :
            <>
                <Link href="/register" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Register
                </Link>
                <Link href="/login" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Login
                </Link>
            </>
        }
    </div>)
}