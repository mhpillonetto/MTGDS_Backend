module.exports = app => {
    app.get('/decks',  (req, res)=>console.log("aqui esta a lista dos seus decks"))

    app.post('/decks', (req, res)=>{
        res.send("voce criou um deck")
        console.log(req.body)
    })
    
}
