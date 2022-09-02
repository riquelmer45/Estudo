const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')


//configuração do handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')



app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//css
app.use(express.static('public'))

app.get('/users/add', (req, res) => {
    res.render('userform')
})

app.post('/users/save', (req, res) =>{
    const name = req.body.name
    const age = req.body.age
    const email = req.body.email
    const user = { name: name, age: age, email: email }
    res.render('viewuser', {user: user})
})


app.get('/', (req, res) => {
    res.render('main')
})


//pagina de error
app.use(function(req, res){
    res.status(404).render('404')
})

//Servidor web
app.listen(port, () =>{
    console.log('Server Start')
})