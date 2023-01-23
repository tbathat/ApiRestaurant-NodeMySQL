const RestauranteService = require('../services/RestauranteService');

module.exports = {

    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let restaurantes = await RestauranteService.buscarTodos();

        for (let i in restaurantes) {
            json.result.push({
                codigo: restaurantes[i].codigo,
                nome: restaurantes[i].nome,
                estilo: restaurantes[i].estilo,
                bairro: restaurantes[i].bairro
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let restaurante = await RestauranteService.buscarUm(codigo);

        if(restaurante){
            json.result = restaurante;
        }
        res.json(json);
    },

    inserir: async (req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let estilo= req.body.estilo;
        let bairro = req.body.bairro;
        
        if(nome && estilo && bairro){
            let RestauranteCodigo = await RestauranteService.inserir(nome, estilo, bairro);
            json.result = {
                codigo: RestauranteCodigo,
                nome,
                estilo,
                bairro
            };
        }else{
            json.error = 'Campos não enviados'
        }   
        
        res.json(json);
    },

    alterar: async (req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let nome = req.body.nome;
        let estilo= req.body.estilo;
        let bairro = req.body.bairro;

        if(nome && estilo && bairro && codigo){
            await RestauranteService.alterar(nome, estilo, bairro, codigo);
            json.result = {
                codigo,
                nome,
                estilo,
                bairro
            };
        }else{
            json.error = 'Campos não enviados';
    }
        res.json(json);
},

    excluir: async (req, res) => {
        let json = {error:'', result:{}};

        await RestauranteService.excluir(req.params.codigo);

        res.json(json);
    }
};