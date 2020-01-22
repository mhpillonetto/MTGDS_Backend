const customExpress = require('./config/customExpress')
const conexao = require('./infra/connect')
const app = customExpress();

conexao.connect(erro => {
    if (erro){
        console.log(erro)
    } else {
        console.log("conectado")
        
        app.listen(3000, ()=>console.log("mana vai"))
        
        app.get('/', (req,res)=>console.log("tudo rodando"))
    }
})