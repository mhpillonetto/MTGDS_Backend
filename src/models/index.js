import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  }
});

userSchema.statics.findById = async function (queryId) {
    let user = await this.findOne({
      id: queryId,
    });
    if (!user) {
      user = await this.findOne({ id: queryId });
    }
    return user;
  };

export const User = mongoose.model('User', userSchema);

const deckSchema = new mongoose.Schema({
    id: {
        type: String,
            unique: true
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    format: String,
    cardsList: [{ name: String}]
})

export const Decks = mongoose.model('Decks', deckSchema)

const listSchema = new mongoose.Schema({
    id: {
        type: String,
            unique: true
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    cardsList: [{ 
        name: String
        
    }]
})

export const Lists = mongoose.model('Lists', listSchema)
