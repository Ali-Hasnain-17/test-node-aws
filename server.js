import express from "express"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
    const data = await prisma.test.findMany();
    res.json(data)
})

app.post("/", async (req, res) => {
    const data = await prisma.test.create({
        data: {
            name: req.body.name
        }
    })

    res.status(201).json(data)
})

app.listen(5000)


