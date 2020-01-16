const mongoose=require('mongoose')
const EventSchema=mongoose.Schema({
    user:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'users'
    },
    img:{
        type:String,
        required:true

    },
    tittle:{
        type:String,
        required:true
    },
    date:{
        type: Array,
        required: true
    },
    // startingDate:{
    //     type:Date,
    //     required:true
    // },
    // endingDate:{
    //     type:Date,
    //     required:true
    // },
    startingHour:{
        type:String,
        required:false
    },
    endingHour:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:true
    },
    adresse:{
        type:String,
        required:false
       
    },
    organizer:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:true
    },
    // payfree:{
    //     type:Boolean,
    //     required:true
       
    // },
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
        required:false

    },
    tags: {
        type: Array,
        required: true
    }

})
module.exports=mongoose.model('event',EventSchema)