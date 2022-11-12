import express, { NextFunction, Request, Response } from "express";
import "express-async-errors"
import { routes } from "./routes";

import cors from "cors";
const app = express()

// Usando o formato Json
app.use(express.json())
app.use(cors())
// Colocando as rotas 
app.use(routes)
// Tratando as excerções

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            message:err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    })
})

app.listen(8000, () => {
    console.log("Correndo em 8000");  
})