const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
let COLL = process.env.COLLECTION_NAME
COLL = 'projects'
console.log(COLL)




const moviesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  decription: { type: String},
  link: { type: String },
  prolink: { type: String },


});
module.exports = mongoose.model(COLL, moviesSchema);
