const mongoose = require("mongoose")
mongoose.Promise = global.Promise
module.exports = mongoose.connect("mongodb://localhost/mymoney")

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min =
    "O '{VALUE}' informado é menor que o límite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max =
    "0 '{VALUE}' informado é maior que o límite máximo de '{MAX}'."
mongoose.Error.messages.String.enum =
    "O '{VALUE}' não é válido para o atributo '{PATH}'."