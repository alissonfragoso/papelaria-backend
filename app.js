const express = require('express')
const app = express();
const usuario =[
    {
    id:1,
    nome:"Bleno",
    email:"bleno@gmail.com",
    senha:"123",

    },
    {
    id:2,
    nome:"Felipe",
    email:"felipe@gmail.com",
    senha:"123",

    },
    {
    id:3,
    nome:"Alisson",
    email:"alisson@gmail.com",
    senha:"123",

    },
    {
    id:4,
    nome:"Carlos",
    email:"Cerlos@gmail.com",
    senha:"123",

    },
]


app.get("/",(req,res,next)=>{
    
    res.json(usuario)
});

app.get("/usuario",(req,res,next)=>{
    let nomes=[];
    usuario.map((linha)=>{
        nomes.push({
            nome:linha.nome,
            email:linha.email
        })
    })
    res.json(nomes)
});

app.post("/usuario",(req,res,next)=>{
  const id = req.body.id;
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = req.body.senha;
  const dados=({
    id,
    nome,
    email,
    senha
  })
console                         
})
module.exports = app