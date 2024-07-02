import prisma from "@/lib/db";
import { saltAndHashPassword } from "@/lib/utils";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        const { email, password, fullname, phone } = await request.json();
        const { hashedPassword } = await saltAndHashPassword(password);
        const response = await prisma.user.create({
            data: {
                fullname,
                email,
                phone,
                password: hashedPassword,
                role: "CUSTOMER"
            }
        })
        return NextResponse.json({ message: "success" });
    } catch (e) {
        console.log({ e });
        return NextResponse.error({ message: "failed" })

    }


}