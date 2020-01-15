const express=require ('express')
const router=express.Router()
const { check, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwtSecret='secret'
const User=require('../models/User')
const auth=require('../middleware/auth')


router.get('/login', auth, (req,res)=>{
   User.findById(req.user.id)
   .then(user => res.json(user))
   .catch(err => {
    console.error(err.message)
    res.send('Server Error')
})
})

router.post('/login',[ check('Email','please enter a valid email!!').isEmail(),
check('Password','password is required!!').isEmpty(),
],
(req,res)=>{
    const errors=validationResult(req)
    if (!errors.isEmpty()){
        return res.json({errors:errors.array()})
}
console.log(req.body.Email)
const {Email ,Password}=req.body
 User.findOne({Email})
 .then(user=>{
   if  (!user){ 
       return res.json({msg:"please register before!"})
    }else{
        bcrypt.compare(Password , user.Password,(err,isMatch)=>{
            if (err){
                console.log(err.message)
            }else if(isMatch){
             const payload ={
                user: {
                    id: user.id}
             }
             jwt.sign(payload,jwtSecret,{expiresIn:3600000},(err,token)=>{
                 if (err) throw err
                 res.json({token})
             })
            }else{
                return res.json({msg:"wrong password"})
            }

        })
    }
  
 })
 .catch(err=> {
     console.error(err.message)
     res.send('Server Error')
    })
})

module.exports=router 