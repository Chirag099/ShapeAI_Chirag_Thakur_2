const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 80;
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/calc.html");
});

app.post("/",(req,res)=>{
    // res.sendFile(__dirname+"/index.html");
    let n1= Number(req.body.res);
    let n2= Number(req.body.wes);
    let result = (n1/Math.pow(n2,2));
    res.send("Your BMI is " + result);
});

app.listen(port , ()=>{
    console.log(`The port has sucessfully started on ${port} `);
}); 
