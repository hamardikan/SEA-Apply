import { auth } from "@/auth";
import RegisterForm from "@/components/RegisterForm";
import { redirect } from "next/navigation";



export default async function RegisterPage() {
    const session = await auth()

    if (session) {
        redirect("/");
    }

    return (<RegisterForm />)


}