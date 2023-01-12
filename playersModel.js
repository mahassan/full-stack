const mongoose = require("mongoose");

const Schema = mongoose.Schema;

export const playerSchema = new Schema({
    firstName: {
        type: 'String',
        required: true
    },
    lastName: {
        type: 'String',
        required: true
    }
})