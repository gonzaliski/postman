import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/users",(req,res)=>{
    res.json({
        users:[]
    })
});

app.post("/users",(req,res)=>{
    res.status(201).json("Usuario creado correctamente")
})

app.get("/users/:userid",(req,res)=>{
    res.json({
        message:"ok",
        userId:1234
    })
})

app.get("/users/:userid/products",(req,res)=>{
    res.json({
        products:[]
    })
})


app.listen(port,()=>{
    console.log("App corriendo en ", port);
    
    })