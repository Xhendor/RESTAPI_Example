const express = require("express");
const app = express();
const port = 3000;
const plRouter=require('./routes/programmingLenguages');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res) => {res.json({message : "ok"})});
app.use("/pl",plRouter);
app.listen(port,()=>
{console.log('Estoy vivo!!! en el puerto 3000..')});