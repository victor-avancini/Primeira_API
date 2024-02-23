import { Router, Request, Response } from "express";

export const booksRouter = Router()

booksRouter.get("/", (req: Request, res: Response) => {
    res.send("Leitura realizada com sucesso!")
})

booksRouter.post("/", (req: Request, res: Response) => {
    res.send("Criação realizada com sucesso!")
})

booksRouter.patch("/", (req: Request, res: Response) => {
    res.send("Atualização parcial realizada com sucesso!")
})

booksRouter.put("/", (req: Request, res: Response) => {
    res.send("Atualização realizada com sucesso!")
})

booksRouter.delete("/", (req: Request, res: Response) => {
    res.send("Exclusão realizada com sucesso!")
})