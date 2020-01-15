const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');
const Profil=require('../models/Profile')
const User=require('../models/User')
const {check,validationResult}=require('express-validator/check')

//router GET api/profile/me
//desc  Get current users profile

router.get('/me',auth,async (req,res)=>{
try{
   const profil=await Profil.findOne({user:req.user.id}).populate('user',['FirstName','Email','Password']);


if (!profil){
    return res.status(400).json({msg:'there is no profil for this user'})
}
res.json(profil);
}
catch(err){
    console.error(err.message);
    res.status(500).send('server error')

}
})
//router Post api/profile
//desc  create update user profil 
router.put('/user:id', auth,(req, res) => {
    const {  FirstName,LastName,Email,Password,Address,Age,Tags} = req.body

    // Build a music object
    let profilFields = {}
    profilFilds.user=req.body.id
    if(FirstName) profilFilds.FirstName = FirstName
    if(LastName) profilFilds.LastName = LastName
    if(Email) profilFilds.Email = Email
    if(Password) profilFilds.Password = Password
    if(Address) profilFilds.Address = Address
    if(Age) profilFilds.Age = Age
    if(Tags) profilFilds.Tags = Tags
    

    User.findById(req.params.id)
        .then(user => {
            if(!user){
                return res.status(404).json({msg: 'profil not found'})
            
            }else{
                Music.findByIdAndUpdate({user:req.user.id}, {$set: profilFields}, (err, data) => {
                    res.json({msg: "profil updatetd"})
                })
            }
        })
        .catch(err => {
            console.error(err.message)
            res.status(500).send('Server error')
        })
})




// router.put('/',[check('FirstName','please enter your firstname').not().isEmpty(),
// check('LastName','please enter your lasttname').not().isEmpty(),
// check('Email','please enter your valid email').isEmail(),
// check('Password','passwort must be 6 or more caracters').isLength({min:6}),
// check('Address','please enter your Address').not().isEmpty(),
// check('Age','please enter your Age').not().isEmpty(),
// check('Tags','please enter your Tags')
// ],
// (req,res)=>{
//     const errors=validationResult(req)
//     if (!errors.isEmpty()){
//         return res.send({errors:errors.array()})
//     } 
//     const profilFilds={}
//     profilFilds.user=req.body.id
//           User.findOneAndUpdate(
//             {user:req.user.id},
//             {$set: profilFilds},
//             {new:true}

//         );
//         return res.json(profil);
        
//       } 
//       .catch(err=> {
//         console.error(err.message)
//         res.send('Server Error')
//        })
//    })
// module.exports=router