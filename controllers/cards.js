module.exports = app => {
    app.get('/cards',(req, res)=>{
        res.send("voce buscou por uma carta")
        console.log(req.body)
    })
}