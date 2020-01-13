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
router.post('/',[check('FirstName','please enter your firstname').not().isEmpty(),
check('LastName','please enter your lasttname').not().isEmpty(),
check('Email','please enter your valid email').isEmail(),
check('Password','passwort must be 6 or more caracters').isLength({min:6}),
check('Address','please enter your Address').not().isEmpty(),],
(req,res)=>{
    const errors=validationResult(req)
    if (!errors.isEmpty()){
        return res.send({errors:errors.array()})
    } 
    const profilFilds={}
    profilFilds.user=req.body.id
    try{
        let profil=await Profil.findOneAndUpdate(
            {user:req.user.id},
            {$set: profilFilds},
            {new:true}

        );
        return res.json(profil);
        
    } 
    //create profil
    profil=new Profil(profilFilds);
    await Profil.save();
    res.json(profil)

}
    catch (err){
        console.error(err.message);
        res.status(500).send('server error')

    }

 }



);





module.exports=router