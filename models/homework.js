// lOS ESQUEMAS DE MONGO SE BORRAN
/*

'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var homeworkSchema = Schema({
    id: mongoose.Schema.Types.ObjectId,
    external_id: String,
    title: String,
    description: String,
    subject: String,
    date_sent: String,
    deadline: String,
    remarks: String,
    file: String,
    state: String,
    deadline: String,
    Max_value: Number,
    persona: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "person"
    }
},false);

module.exports = mongoose.model("person", homeworkSchema)
*/