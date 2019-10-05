const express=require('express');
const path=require('path');
const app=express();
const port=3000;

app.use(express.static(path.join(__dirname,'public')));


app.get('/',(req,res)=>{
    res.sendFile('index.html');
})


app.listen(process.env.port,()=>console.log('Server is up and running '));


module.exports=app;