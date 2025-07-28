require("dotenv").config({path: require('path').join(__dirname, '..', '.env')})
const express = require('express')
const app = express()
const path = require('path')
const qrCoderoutes = require('./routes/qrCodeRoutes')
const { env } = require("process")

const port = 8080

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, '..','..','frontend')))


app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '..','..','frontend', 'index.html'))
})

app.use('/api', qrCoderoutes)

app.listen(port, (err)=>{
    if(err){
        console.log(`Ocorreu um erro ao iniciar o Servidor: ${err}`)
    } else{
        console.log(`Servidor iniciado: http://localhost:${port}`)
    }
})
