import { auth } from '@/auth';
import AddBranchForm from '@/components/AddBranchForm';
import LogoutButton from '@/components/LogoutButton';
import { redirect } from 'next/navigation';
import { getBranches } from "@/services/branches"
import { getServices } from "@/services/services"


export default async function Page() {
    const session = await auth()
    if (session?.user?.role !== "ADMIN") redirect("/login")
    const branches = await getBranches();
    const services = await getServices();

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
            <div className="container mx-auto px-4 py-16">
                <main>
                    <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <h2 className="text-3xl font-bold text-purple-800 mb-6">Branches</h2>
                        <div className='text-black mb-8'>
                            {branches.map(branch => <div key={branch.id} className='mt-4'>
                                <strong>{branch.name} </strong>
                                <p>
                                    Location: {branch.location}
                                </p>
                            </div>)}
                        </div>
                        <AddBranchForm services={services} />
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