const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db");

db.run("CREATE TABLE IF NOT EXISTS entrada (id INTEGER PRIMARY KEY AUTOINCREMENT, id_produto, qtde REAL, valor_unitario REAL, data_entrada DATE)", (createTableError) => {
    if (createTableError) {
        return res.status(500).send({
            error: createTableError.message
        });
    }
})



// -----------------------------------------------


router.get("/", (req, res, next) => {

    db.all('SELECT * FROM entrada INNER JOIN produto ON entrada.id_produto = produto.id; ', (error, rows) => {
        if (error) {
            return res.status(500).send({
                error: error.message
            })
        }
        res.status(200).send({
            messagem: "Aqui está a lista de Entrada",
            entrada: rows
        })
    })

});


    // Verifica se a descrição do produto já está cadastrada
    router.post('/', (req, res) => {
        const { id_produto, qtde, valor_unitario, data_entrada } = req.body;
    
        // Inserir os dados da entrada na nova tabela_
        db.run(`INSERT INTO entrada (id_produto, qtde, valor_unitario, data_entrada) VALUES (?, ?, ?, ?)`,
            [id_produto, qtde, valor_unitario, data_entrada],
            function (insertError) {
                if (insertError) {
                    return res.status(500).send({
                        error: insertError.message,
                        response: null
                    });
                }
    
                res.status(201).send({
                    mensagem: "Entrada Registrada!",
                    entradaProduto: {
                        id: this.lastID,
                        id_produto: id_produto,
                        qtde: qtde,
                        valor_unitario: valor_unitario,
                        data_entrada: data_entrada
                    }
                });
            });
    });

// --------------------------------------------------------------------------



// router.put("/", (req, res, next) => {
//     const { id, status, descricao, estoque_minimo, estoque_maximo } = req.body;

//     db.run("UPDATE produto SET status = ?, descricao = ?, estoque_minimo = ?, estoque_maximo = ? WHERE id = ?",
//         [status, descricao, estoque_minimo, estoque_maximo, id], function (error) {

//             if (error) {
//                 return res.status(500).send({
//                     error: error.message
//                 });
//             }
//             res.status(200).send({
//                 mensagem: "Cadastro alterado com sucesso",
//             });
//         });
// });

// -----------------------------------------------

router.delete("/:id", (req, res, next) => {

    const { id } = req.params;
    db.run(`DELETE  FROM entrada WHERE  id = ?`, id, (error,) => {

        if (error) {
            return res.status(500).send({
                error: error.message
            })
        }
        res.status(200).send({
            messagem: "entrada deletada com suscesso!",

        })
    });



})

// -----------------------------------------------
module.exports = router;