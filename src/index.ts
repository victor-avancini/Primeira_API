import express, { json, Request, Response } from "express";

const app = express();
app.use(json());

app.get("/", (req: Request, res: Response) => {
    res.send("Leitura realizada com sucesso!")
})

app.post("/", (req: Request, res: Response) => {
    res.send("Criação realizada com sucesso!")
})

app.patch("/", (req: Request, res: Response) => {
    res.send("Atualização parcial realizada com sucesso!")
})

app.put("/", (req: Request, res: Response) => {
    res.send("Atualização realizada com sucesso!")
})

app.delete("/", (req: Request, res: Response) => {
    res.send("Exclusão realizada com sucesso!")
})

const port = 3000;

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`);
});