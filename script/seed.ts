const { PrismaClient } = require("@prisma/client")

const db = new PrismaClient()

async function main() {
    try {
        await db.category.createMany({
            data: [
                { name: "Famous people" },
                { name: "Movies & TV" },
                { name: "Musicians" },
                { name: "Gamems" },
                { name: "Animals" },
                { name: "Philosophy" },
                { name: "Scientists" },
            ]
        })
    }
    catch (err) {
        console.log("Erorr sending default categories", err)

    }
    finally {
        await db.$disconnect()
    }
}

main()