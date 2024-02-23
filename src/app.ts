import express, { json } from "express";
import { booksRouter } from "./routes/books.routes";

const app = express();
app.use(json());
app.use("/books", booksRouter)

const port = 3000;

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`);
});