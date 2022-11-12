const mongoose = require('mongoose');
// creating Schema 
const userSchema = new mongoose.Schema({
  name:{
    type:String,
   required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  isPremium:{
    type:String,
    required:true
  }
}, {
    versionKey: false,
    timestamps: true
})

// creating model and exports
const users = mongoose.model('user', userSchema);
module.exports = users