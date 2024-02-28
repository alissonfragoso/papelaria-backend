const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();

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


router.get("/",(req,res,next)=>{
    
    res.json(usuario)
});

router.get("/nomes",(req,res,next)=>{
    let nomes=[];
    usuario.map((linha)=>{
        nomes.push({
            nome:linha.nome,
            email:linha.email
        })
    })
    res.json(nomes)
});

router.post("/",(req,res,next) => {
    const db = new sqlite3.Database("database.db")

    const {nome,email,senha} = req.body;

    db.serialize(()=>{
      
        db.run("CREATE TABLE IF NOT EXISTS usuario(id INTEGER PRIMARY KEY AUTOINCREMENT,nome TEXT email TEXT UNIQUE,  senha TEXT)")
        const insertUsuario = db.prepare("INSERT INTO usuario(nome,email,senha) VALUES (?,?,?)")
        insertUsuario.run(nome,email,senha);
        insertUsuario.finalize()
    })


    res.status(200).send({mensagem:"Salvo com Sucesso!!!!!!!"});              

})

router.put("/",(req,res,next)=>{

    const id = req.body.id;

    res.send({id:id});              

})
router.delete("/:id",(req,res,next)=>{

    const id = req.params;

    res.send({id:id});              

})
module.exports = router;