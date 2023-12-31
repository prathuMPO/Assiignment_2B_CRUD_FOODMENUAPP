var mongoose = require('mongoose');
var schema = mongoose.Schema;

let menuSchema = new schema({
    name: {type:String, require:true},
    icon: {type:String, require:true},
    menuUrl: {type:String, require:true},
    entryDate: {type:Date, default:Date.now}
});

let userSchema = new schema({
    email: {type:String, require:true},
    pwd: {type:String, require:true},
    entryDate: {type:Date, default:Date.now}
});

let menu = mongoose.model('menu', menuSchema, 'menu');
let users = mongoose.model('users', userSchema, 'users');
let mySchemas = {'menu':menu, 'users':users};

module.exports = mySchemas;

