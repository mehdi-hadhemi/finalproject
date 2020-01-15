const mongoose=require('mongoose')
const UserSchema=mongoose.Schema({
   
    FirstName:{
        type:String,
        required:true
    },
   
    Email:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:false
    },
    Address:{
        type:String,
        required:false
    },
    Password:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:false
    },
    Tags:{
        type:Array,
        required:false
    },
    Follow:{
        type:Array
    },
    Date:{
        type:Date,
        default:Date.now
    }

})
module.exports=mongoose.model('user',UserSchema)