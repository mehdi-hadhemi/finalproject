const mongoose=require('mongoose')
const ProfileSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
       },
    Image:{
        type:String,
        required:false
    },

    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Tags:{
        type:Array,
        required:false
    },
    Date:{
        type:Date,
        default:Date.now
    }

})
module.exports=mongoose.model('profil',ProfileSchema)
