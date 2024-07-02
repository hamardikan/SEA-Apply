import { auth } from '@/auth';
import LogoutButton from '@/components/LogoutButton';
import Navigations from '@/components/Navigations';
import { redirect } from 'next/navigation';


export default async function Page() {
    const session = await auth()
    if (session?.user?.role !== "CUSTOMER") redirect("/login")


    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
            <div className="container mx-auto px-4 py-16">
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-purple-800 mb-4">Dashboard Customer</h1>
                </header>
                <Navigations session={session} />
                <main className='mt-8'>
                    <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    </section>
                </main>

                <footer className="mt-16 text-center text-purple-600">
                    <p>&copy; 2024 SEA Salon. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}