import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
    }
  })
  
userSchema.statics.findById = async function (queryId) {
    let user = await this.findOne({
    id: queryId,
    });
    if (!user) {
    user = await this.findOne({ id: queryId });
    }
    return user;
}

userSchema.pre('remove', function(next) {
    this.model('List').deleteMany({ user: this._id }, next);
    this.model('Deck').deleteMany({ user: this._id }, next);
})


export const User = mongoose.model('User', userSchema)


