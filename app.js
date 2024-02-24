const bodyParser = require('body-parser');
const express = require('express')
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const morgan = require("morgan");
app.use(morgan("dev"));


const rotaUsuario = require("./routes/rotaUsuario");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");

    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-with, Content-type, Accept,Autorization"

    )
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).send({});

    };
    next();
});



app.use("/usuario", rotaUsuario)




app.use((req, res, next) => {

    const erro = new Error("Não encontrado!!");
    erro.status(404);

});
app.use((error, req, res, netx) => {

    res.status(error.status || 500);
    return res.json({
        error: {
            mensagem: erro.message
        }
    });

});

module.exports = app