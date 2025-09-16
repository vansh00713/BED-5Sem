const { default : mangoose }= require("mangoose")

const schema = mongoose.Schema({
  email: String,
  password: String
})

const myModel=mongoose.model('userModel',user)
module.exports.myModel=myModel
