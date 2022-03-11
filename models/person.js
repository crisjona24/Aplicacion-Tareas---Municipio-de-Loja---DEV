// lOS ESQUEMAS DE MONGO SE BORRAN
/*

'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var personSchema = Schema({
    id: mongoose.Schema.Types.ObjectId,
    external_id: String,
    name: String,
    last_names: String,
    phone: String,
    email: String,
    gender: String,
    edad: String,
    state: {type: Boolean, default: true}
},false);

module.exports = mongoose.model("person", personSchema)
*/