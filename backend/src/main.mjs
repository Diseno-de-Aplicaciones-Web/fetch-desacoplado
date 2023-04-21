import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

app.post("/codigos/", (peticion, resposta)=>{
    const timestamp = Date.now()
    const codigo = timestamp.toString()
    resposta.send(codigo)
    console.log("Entregado código:", codigo);
})

app.listen(8000, ()=>console.log("Express traballando..."))