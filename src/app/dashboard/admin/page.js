import { auth } from '@/auth';
import AddServiceForm from '@/components/AddServiceForm';
import LogoutButton from '@/components/LogoutButton';
import { getServices } from '@/services/services';
import { redirect } from 'next/navigation';


export default async function Page() {
    const session = await auth()
    if (session?.user?.role !== "ADMIN") redirect("/login")
    const services = await getServices();

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
            <div className="container mx-auto px-4 py-16">
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-purple-800 mb-4">Dashboard Admin</h1>
                </header>

                <main>
                    <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <h2 className="text-3xl font-bold text-purple-800 mb-6">Services</h2>
                        <div className='text-black mb-8'>
                            {services.map(service => <div key={service.id}>
                                {service.name} ({service.duration} minutes)
                            </div>)}
                        </div>
                        <AddServiceForm />
                    </section>

                    <div className="flex justify-center space-x-4">
                        <LogoutButton />
                    </div>
                </main>

                <footer className="mt-16 text-center text-purple-600">
                    <p>&copy; 2024 SEA Salon. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}