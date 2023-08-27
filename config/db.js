import mongoose from "mongoose";
const connectDB=async()=>
//connect node to mongodb database
mongoose.connect("mongodb://localhost:27017/teacherdb",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
    .then(()=>
{
    console.log("db is connected");
})
.catch((err)=>{console.log(err)});
