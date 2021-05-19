const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    photos: {
        type: Array,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    preparation: {
        type: Array,
        required: true
    },
})

module.exports = mongoose.model("recipeModel", recipeSchema)