import mongoose from 'mongoose'

const deckSchema = new mongoose.Schema({
    id: {
        type: String,
            unique: true
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    format: String,
    cardsList: [{ 
        name: String, 
        colors: [String],
        artwork: String,
        cmc: String ,
        type: String
    }]
})

export const Decks = mongoose.model('Deck', deckSchema)
