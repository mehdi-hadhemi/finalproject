const express=require('express')
const router=express.Router()
const { check, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwtSecret='secret'
const User=require('../models/User')
router.post('/',[check('FirstName','please enter your firstname').not().isEmpty(),
check('LastName','please enter your lasttname').not().isEmpty(),
check('Email','please enter your valid email').isEmail(),
check('Password','passwort must be 6 or more caracters').not().isEmpty().isLength({min:6}),
check('Address','please enter your Address').not().isEmpty(),],
(req,res)=>{
    const errors=validationResult(req)
    if (!errors.isEmpty()){
        return req.json({errors:errors.array()})
    } 
    const {FirstName,LastName,Email,Password}=req.body
    User.findOne({Email})
    .then(user =>{
        if(user){
            res.status(400).json({msg:'User already exists'})
        }
        else {
            user: new User({
                FirstName,
                LastName,
                Email,
                Password,
                Address

             })


             bcrypt.getSalt(10,(err,salt)=>{
                 bcrypt.hach(user.Password,salt,(err,hachedPassword)=>{
                     user.Password=hachedPassword
                     user.save()
                     const payload={
                         user:{id:user.id
                     }}
                     jwt.sign(payloead, jwtSecret,{expiresIn:3600000},(err,token)=>{
                         if(err) throw (err)
                        res.json({token})
                     })
                 })
             })
        
        }

    })
    
    
    
    
.catch(err=>console.log(err.message))

})



module.exports=router 