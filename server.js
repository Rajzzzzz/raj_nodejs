const express = ("express");

//create the rest object

const app = express();

//create the get request
app.get("/demo1",(req,res)=>{
    res.status(200).json({"message":"welcome to demo1 request"});
})

let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server started");
});