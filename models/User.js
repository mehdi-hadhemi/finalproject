const mongoose=require('mongoose')
const UserSchema=mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    // LastName:{
    //     type:String,
    //     required:true
    // },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    }

})
module.exports=mongoose.model('user',UserSchema)