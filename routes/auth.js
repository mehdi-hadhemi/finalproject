const express=require ('espress')
const router=express.Router()
const { check, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwtSecret='secret'
const User=require('../models/User')
const auth=require('../middleware/auth')

router.get('/user/1',auth,(req,res)=>{
   req.findById(req.user.id)
   .then(user=>res.json(user))
   .catch(err=>console.log(err.message))
})

router.post('/user/1',[ check('email','please enter a valid email!!').isEmail(),
check('password','password is required!!').isEmpty(),
],
(req,res)=>{
    const errors=validationResult(req)
    if (!errors.isEmpty()){
        return req.json({errors:errors.array()})
}
const {email ,password}=req.body
 User.findOne({email})
 .then(user=>{
   if  (!user){ 
       return res.status(404).json({msg:"please register before!"})
    }else{
        bcrypt.compare(password , user.password,(err,isMatch)=>{
            if (err){
                console.log(err.message)
            }else
             if(isMatch){
             const payload ={
user: {id:user.id}
             }
             jwt.sign(payload,jwtSecret,{expiresIn:3600000},(err,token)=>{
                 if (err) throw err
                 res.json({token})
             })
            }else{
                return res.status(401).json({msg:"wrong password"})
            }

        })
    }
  
 })
 .catch(err=> console.log(err.message))
})


module.exports=router 