const express=require('express')
const router=express.Router()
const { check, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwtSecret='secret'
const User=require('../models/User')

router.post('/',[check('FirstName','please enter your firstname').not().isEmpty(),
check('Email','please enter your valid email').isEmail(),
check('Password','passwort must be 6 or more caracters').isLength({min:6}),
],
(req,res)=>{
    const errors=validationResult(req)
    if (!errors.isEmpty()){
        return res.send({errors:errors.array()})
    } 
    const {FirstName,Email,Password}=req.body   
    User.findOne({Email})
    .then(user =>{
        if(user){
            res.status(400).json({msg:'User already exists'})
        }
        else {
            user= new User({
                FirstName,
                Email,
                Password,
             })


             bcrypt.genSalt(10,(err,salt)=>{
                 bcrypt.hash(user.Password,salt,(err,hachedPassword)=>{
                     user.Password=hachedPassword
                     user.save()
                     const payload={
                         user:{id:user.id
                     }}
                     jwt.sign(payload, jwtSecret,{expiresIn:3600000},(err,token)=>{
                         if(err) throw (err)
                        res.json({token})
                     })
                 })
             })
        
        }

    }).catch(err=>console.error('err.message'))

}
)

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json(user))
        .catch(err => console.error(err.message))
})

// Select Fav Events
router.put('/events/:id', (req, res) => {
    let favEvents = req.body
    User.findByIdAndUpdate(req.params.id, {...favEvents})
        .then(user => res.json(user))
        .catch(err => console.error(err.message))
})

module.exports=router ;