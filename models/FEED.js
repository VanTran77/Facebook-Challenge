const mongoose = require('mongoose')

const Schema = mongoose.Schema

const feedSchema = new Schema ({
    name : {
        type:String,
        required: true,
        maxLength: 15

    },
    message : {
        type:String,
        required: true,
        maxLength: 40
    }
} , {timestamps:true})

const FEED =mongoose.model('FEED', feedSchema)

module.exports = {
    FEED
}