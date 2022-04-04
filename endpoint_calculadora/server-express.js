// Ex 30/03 - Criar endpoint com operações +,-,*,/ com métodos GET e POST 

const express = require('express')
const app = express()
const port = 3000

const utils = require('./utils')

// -- GET INICIO

app.get ('/hello',(req, res) => {
    res.send('Hello World!')
})

app.get ('/somar',(req, res) => {
    res.send(`${utils.somar(req.query.a,req.query.b)}`)
})

app.get ('/subtrair',(req, res) => {
    res.send(`${utils.subtrair(req.query.a,req.query.b)}`)
})

app.get ('/multiplicar',(req, res) => {
    res.send(`${utils.multiplicar(req.query.a,req.query.b)}`)
})

app.get ('/dividir',(req, res) => {
    res.send(`${utils.dividir(req.query.a,req.query.b)}`)
})

// -- GET FIM

// -- POST INICIO
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post ('/hello',(req, res) => {
    res.send('Hello World!')
})

app.post('/somar', function (req, res) {
    res.send(`${utils.somar(req.body.param1,req.body.param2)}`)
  })

app.post ('/subtrair',(req, res) => {
    res.send(`${utils.subtrair(req.body.param1,req.body.param2)}`)
})

app.post ('/multiplicar',(req, res) => {
    res.send(`${utils.multiplicar(req.body.param1,req.body.param2)}`)
})

app.post ('/dividir',(req, res) => {
    res.send(`${utils.dividir(req.body.param1,req.body.param2)}`)
})

 /*
 JSON para teste
  {
    "param1":"30",
    "param2":"1"
}
 
 */ 

// -- POST FIM


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})