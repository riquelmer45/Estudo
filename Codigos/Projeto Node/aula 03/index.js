const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) =>{
    const name = req.body.name
    const age = req.body.age
    console.log(`O nome do usuário é ${name} e a idade é ${age}`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

//app.get('/', (req, res) => {
//    res.send('<n1>Olá Mundo!</n1>')
//})

app.listen(port, () =>{
    console.log('Server Start')
})