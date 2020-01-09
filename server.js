 const express=require('express')
 const app=express()
 const mongoose=require('mongoose')
 
app.use(express.json())

const db='mongodb+srv://hadhemi:hadhemi@events-h4bax.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(db ,{useUnifiedTopology:true,useNewUrlParser:true},(err)=>{
    if (err) throw (err)
    console.log('database connected')
})

app.user('./api/user',require('./routes/users'))
app.user('./api/auth',require('./routes/auth'))
app.user('./api/event',require('./routes/event'))


 app.listen(5000,()=>console.log('server is ranning on port 5000'))