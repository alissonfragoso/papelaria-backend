const express = require('express')
const app = express();

app.use((req,res,next)=>{
    res.json({
        mensagem:"Olá mundo!"
    })
})
module.exports = app