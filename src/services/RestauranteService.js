const db = require('../db');

module.exports = {

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('SELECT * FROM restaurantes', (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('SELECT * FROM restaurantes WHERE codigo = ?', [codigo], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0) {
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            })
        })
    },

    inserir: (nome, estilo, bairro) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('INSERT INTO restaurantes (nome, estilo, bairro) VALUES (?, ?, ?)', 
            [nome, estilo, bairro], 
            (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results.insertCodigo);
            }
        );
    });
    },

    alterar: (codigo, nome, estilo, bairro) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('UPDATE restaurantes SET nome = ?, estilo = ?, bairro= ? WHERE codigo = ?', 
            [codigo, nome, estilo, bairro], 
            (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            }
        );
    });
},

    excluir: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('DELETE FROM restaurantes WHERE codigo = ?', [codigo], (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};
