// lOS ESQUEMAS DE MONGO SE BORRAN
/*

'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var painmentSchema = Schema({
    id: mongoose.Schema.Types.ObjectId,
    external_id: String,
    paymentType: String,
    paymentMethod:  String,
    paymentDate: String,
    id_responsable_teacher: String,
    state: {type: Boolean, default: true}
},false);

module.exports = mongoose.model("person", painmentSchema)
*/