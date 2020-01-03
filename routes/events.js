const express=require('express')
const router=express.Router()


router.get('/',(req,res)=>{
    res.send('get event')
})
router.post('/',(req,res)=>{
    res.send('add event')
})
router.delete('/',(req,res)=>{
    res.send('delete event')
})
router.put('/',(req,res)=>{
    res.send('upate event')
})


module.exports=router 