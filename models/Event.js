const mongoose=require('mongoose')
const EventSchema=mongoose.Schema({
    user:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'users'
    },
    image:{
        type:String,
        required:true

    },
    title:{
        type:String,
        required:true
    },
    startingDate:{
        type:Date,
        required:true
    },
    endingDate:{
        type:Date,
        required:true
    },
    startingHour:{
        type:String,
        required:true
    },
    endingHour:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    adresse:{
        type:String,
        required:true
       
    },
    organizer:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    payfree:{
        type:Boolean,
        required:true
       
    },
    price:{
        type:Number,
        required:false
    },
    maxparticipent:{
        type:Number,
        required:false
    },
    sponsored:{
        type:Boolean,
        required:true

    }

})
module.exports=mongoose.model('event',EventSchema)