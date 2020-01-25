import mongoose from 'mongoose'

import User from './userModel'
import List from './listModel'
import Deck from './deckModel'

const DATABASE_URL = 'AAAAAAAAA'

const connectDb = () => {
    //subir banco do mongo!!!!
  return mongoose.connect(DATABASE_URL)
};

const models = { User, List, Deck }

export { connectDb }

export default models
