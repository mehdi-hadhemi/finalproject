const express=require('express')
const router=express.Router()
const Event=require ('../models/Event')
const auth=require ('../middleware/auth')
const {check,validationResult}=require('express-validator')
router.get('/',(req,res)=>{
    Event.find({})
    .then(events=>res.json(events))
    .catch(err=>console.log(object)(err.message))
    
})
router.post('/',
// [auth,
//     [
//     // check('tittle','tittle is required').not().isEmpty(),
//     // check('date', 'date is required').not().isEmpty(),
//     // check('startingHour','startingHour is required').not().isEmpty(),
//     // check('endingHour','endingHour is required').not().isEmpty(),
//     // check('city','city is required').not().isEmpty(),
//     // check('adresse','adresse is required').not().isEmpty(),
//     // check('description','description is required').not().isEmpty(),
//     // // check('organizer','organizer is required').not().isEmpty(),
//     // // check('payfree','payfree is required').not().isEmpty(),
//     // check('maxparticipent','maxparticipent is required').not().isEmpty(),
// ]],
(req,res)=>{
        const errors=validationResult(req)
        if (!errors.isEmpty()){
            return req.json({errors:errors.array()})
    }
    const {tittle ,date,endingHour,startingHour,city,adresse,maxparticipent,price,description,organizer, img,tags,sponsored}=req.body
    const newEvent= new Event({
        tittle,
        date,
        startingHour,
        endingHour,
        city,
        adresse,
        description,
        organizer,
        price,
        maxparticipent,
        img,
        tags,
        sponsored
        // user:req.user.id
    })
    newEvent.save()
    .then(()=>res.json({msg:"your event was added"}))
    .catch(err=>console.log(err.message))



})
router.delete('/:id',auth,(req,res)=>{
    Event.find(req.param.id)
    .then(event=>{
        if (Event.user.toString()!==req.user.id){
            res.json({msg:"not authorized"})
        }else
        {
            Event.findByIdAndDelete(req.params.id,{$set:eventtags},(err,data)=>
            {
                res.json({msg:"event deleted"})
            })
        }
       })

     .catch(err=>console.log(err.message))
})
router.put('/:id',auth,(req,res)=>{
    const  {tittle,startingDate,endingDate,startingHour,endingHour,city,adresse, description, organizer,payfree,maxparticipent } = req.body
     let eventtags={}
         if (tittle)eventtags.tittle=tittle
         if(startingDate)eventtags.startingDate=startingDate
         if(endingDate)eventtags.endingDate=endingDate
         if(startingHour)eventtags.startingHour=startingHour
         if(endingHour)eventtags.endingHour=endingHour
         if(city)eventtags.city=city
         if(adresse)eventtags.dresse=dresse
         if(description)eventtags.description=description
         if(organizer)eventtags.organizer=organizer
         if(payfree)eventtags.payfree=payfree
         if(maxparticipent)eventtags.maxparticipent=maxparticipent
         Event.find(req.param.id)
         .then(event=>{
             if (Event.user.toString()!==req.user.id){
                 res.json({msg:"not authorized"})
             }else
             {
                 Event.findByIdAndUpdate(req.params.id  ,(err,data)=>
                 {
                     res.json({msg:"event updated"})
                 })
             }
            })
     
          .catch(err=>console.log(err.message))
         })


module.exports=router 