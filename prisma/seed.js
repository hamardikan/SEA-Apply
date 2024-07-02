const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    const haircut = await prisma.service.upsert({
        where: { id: 1 },
        update: {
            name: "Haircuts and Styling",
        },
        create: {
            name: "Haircuts and Styling"
        }
    })

    const manicure = await prisma.service.upsert({
        where: { id: 2 },
        update: {
            name: "Manicure and Pedicure"
        },
        create: {
            name: "Manicure and Pedicure"
        }
    })

    const facial = await prisma.service.upsert({
        where: { id: 3 },
        update: {
            name: "Facial Treatments"
        },
        create: {
            name: "Facial Treatments"
        }
    })

    console.log([haircut, manicure, facial])

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })