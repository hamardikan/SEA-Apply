import { auth } from "@/auth"
import SignIn from "@/components/SignIn"
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await auth()

    switch (session?.user?.role) {
        case "CUSTOMER":
            redirect("/dashboard");
        case "ADMIN":
            redirect("/dashboard/admin");
        default:
            return (<SignIn session={session} />)
    }
}