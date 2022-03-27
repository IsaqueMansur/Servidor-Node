const HomeModel = require('../models/HomeModel');

/* HomeModel.create({
    titulo: 'Teste',
    descricao: Number(700)
})
.then(dados => console.log(dados))
.catch(e=> console.log(e)); */

HomeModel.find()
.then(dados => {
    this.dados = dados;
    for (let i in this.dados) {
        console.log(`Titulo do dado: ${this.dados[i].titulo}`)
        console.log(`Titulo do dado: ${this.dados[i].descricao}`)
    }
}).catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    console.log(req.flash('info'))
    console.log(req.flash('sucess'))
    console.log(req.flash('error'))

    console.log(req.session.usuario);
    res.render('index');
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}