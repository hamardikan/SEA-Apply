import AdminNavigations from "@/components/AdminNavigations";

export default function RootLayout({ children }) {
    return (
        <div className="bg-gradient-to-br from-pink-100 to-purple-200">
            <header className="text-center pt-16">
                <h1 className="text-5xl font-extrabold text-purple-800 mb-4">Dashboard Admin</h1>
            </header>
            <AdminNavigations />
            {children}
        </div>
    );
}
