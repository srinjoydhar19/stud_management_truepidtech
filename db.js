const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology:true}.then(()=>
{
    console.log("db is connected");
})
.catch((err)=>console.log(err)


