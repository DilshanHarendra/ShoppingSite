const express= require("express");

const app= express();

app.get('/',function (req,res) {
res.send("hellow world");
});

app.listen(3001,function () {
    console.log("server is running");
});