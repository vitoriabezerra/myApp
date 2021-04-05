const usuariosController ={
    index: (res, reuest) => {
        return res.send('Estou exibindo essa mensagem através do controler')
    }
}

module.exports = usuariosController;