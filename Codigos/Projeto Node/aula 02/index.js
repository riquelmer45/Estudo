const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

//app.get('/', (req, res) => {
//    res.send('<n1>Olá Mundo!</n1>')
//})

app.listen(port, () =>{
    console.log('Server Start')
})