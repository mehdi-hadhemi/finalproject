const express=require ('espress')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('get user logget in')
})

router.post('/',(req,res)=>{
    res.send('login the user')
})


module.exports=router 