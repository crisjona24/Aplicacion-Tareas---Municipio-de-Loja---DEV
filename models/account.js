// lOS ESQUEMAS DE MONGO SE BORRAN
/*

'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var accountSchema = Schema({
    id: mongoose.Schema.Types.ObjectId,
    external_id: String,
    username: String,
    password: String,
    state: {type: Boolean, default: true}
},false);

module.exports = mongoose.model("person", accountSchema)
*/