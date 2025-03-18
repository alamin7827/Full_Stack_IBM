const express =require('express');
const { connectDB } = require('./configs/db');
const { userRouter } = require('./routes/user.route');

const app =express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send("welcome to svu backend App!..");
});

app.use(userRouter)


const PORT =8080;

app.listen(PORT,async()=>{
    try{
        await connectDB
        console.log("DB is connected");
        console.log(`server is running at ${PORT}`);
    }
    catch(err){
        console.log(err.message);

    }
});
