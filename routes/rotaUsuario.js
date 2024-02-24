const express = require("express");
const router = express.Router();
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

router.post("/",(req,res,next)=>{

    const id = req.body.id;
    
    res.send({id:id});              

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