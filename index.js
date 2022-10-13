const express = require("express")
const app = express()

app.get("/", (req, res) =>{
    res.send("Hola JOhn")
})

app.listen(8080, ()=>{
    console.log("El servidor inicializó")
})