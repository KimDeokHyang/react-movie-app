const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    // userFrom은User.js 정보들을 가지고 올 수 있다.
    userFrom: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    moviePost: {
        type: String
    },
    movieRunTime: {
        type: String
    }
}, { timestamps: true})


const Favorite = mongoose.model('Favorite', favoriteSchema)

module.exports = { Favorite }