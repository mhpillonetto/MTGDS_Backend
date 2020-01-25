import mongoose from 'mongoose'

const listSchema = new mongoose.Schema({
    id: {
        type: String,
            unique: true
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    cardsList: [{ 
        name: String, 
        colors: [String],
        artwork: String,
        cmc: String,
        type: String,
        set: String
    }]
})

export const Lists = mongoose.model('List', listSchema)
