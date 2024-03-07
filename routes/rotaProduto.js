const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("database.db");






router.get("/:id", (req, res, next) => {

    const { id } = req.params;
    db.all("SELECT * FROM produto WHERE id=?", [id], (error, rows) => {
        if (error) {
            return res.status(500).send({
                error: error.message
            })
        }
        console.log(rows)
        res.status(200).send({
            messagem: "Aqui está a lista de Produtos",
            usuario: rows
        })
    })

});

// -----------------------------------------------

router.get("/", (req, res, next) => {

    db.all("SELECT * FROM produto", (error, rows) => {
        if (error) {
            return res.status(500).send({
                error: error.message
            })
        }
        res.status(200).send({
            messagem: "Aqui está a lista de Usuários",
            usuarios: rows
        })
    })

});


// -----------------------------------------------

router.get("/nomes", (req, res, next) => {
    let nomes = [];
    usuario.map((linha) => {
        nomes.push({
            nome: linha.nome,
            email: linha.email
        })
    })
    res.json(nomes)
});

// -----------------------------------------------

router.post('/', (req, res, next) =>
{
    const { nome, email, senha } = req.body;

    // Validação dos campos
    let msg = [];
    if (!nome || nome.length < 3) {
        msg.push({ mensagem: "Nome inválido! Deve ter pelo menos 3 caracteres." });
    }
    if (!email || !validateEmail(email)) {
        msg.push({ mensagem: "E-mail inválido!" });
    }
    if (!senha || senha.length < 6) {
        msg.push({ mensagem: "Senha inválida! Deve ter pelo menos 6 caracteres." });
    }
    if (msg.length > 0) {
        return res.status(400).send({
            mensagem: "Falha ao cadastrar usuário.",
            erros: msg
        });
    }

    // Verifica se o email já está cadastrado
    db.get(`SELECT * FROM usuario WHERE email = ?`, [email], (error, usuarioExistente) => {
        if (error) {
            return res.status(500).send({
                error: error.message,
                response: null
            });
        }

        if (usuarioExistente) {
            return res.status(400).send({
                mensagem: "E-mail já cadastrado."
            });
        }

        // Hash da senha antes de salvar no banco de dados
        bcrypt.hash(senha, 10, (hashError, hashedPassword) => {
            if (hashError) {
                return res.status(500).send({
                    error: hashError.message,
                    response: null
                });
            }

            // Insere o novo usuário no banco de dados
            db.run(`INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)`, [nome, email, hashedPassword], function (insertError) {
                if (insertError) {
                    return res.status(500).send({
                        error: insertError.message,
                        response: null
                    });
                }
                res.status(201).send({
                    mensagem: "Cadastro criado com sucesso!",
                    usuario: {
                        id: this.lastID,
                        nome: nome,
                        email: email
                    }
                });
            });
        });
    });
});

// Função para validar formato de e-mail

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// -----------------------------------------------


router.put("/", (req, res, next) => {
    const { id, nome, email, senha } = req.body;

    db.run(" UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE id = ?",
        [nome, email, senha, id], function (error) {

            if (error) {
                return res.status(500).send({
                    error: error.message
                });
            }
            res.status(200).send({
                mensagem: "Cadastro alterado com sucesso",
            })

        })

});

// -----------------------------------------------

router.delete("/:id", (req, res, next) => {

    const { id } = req.params;
    db.run("DELETE  FROM usuario WHERE  id = ?", id, (error,) => {

        if (error) {
            return res.status(500).send({
                error: error.message
            })
        }
        res.status(200).send({
            messagem: "Cadastros deletado com suscesso!!",

        })
    });



})

// -----------------------------------------------
module.exports = router;