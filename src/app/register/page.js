import { auth } from "@/auth"
import RegisterForm from "@/components/RegisterForm";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await auth()

    switch (session?.user?.role) {
        case "CUSTOMER":
            redirect("/dashboard");
        case "ADMIN":
            redirect("/dashboard/admin");
        default:
            return (<RegisterForm />)
    }
}