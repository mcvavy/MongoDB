const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema and model

const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

//Model

//model(<Collection>, <Schema>)
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;