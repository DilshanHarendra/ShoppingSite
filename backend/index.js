const express= require("express");
const app= express();
const mongoose= require('mongoose');
const core = require('cors');
//******************************************Routers***********************************************************************
const productRoute = require('./routes/Product');
const userRoute=require('./routes/User');
const paymentRoute=require('./routes/Payment');

app.use('/product',productRoute);
app.use('/User',userRoute);
app.use('/Payment',paymentRoute);

const storeManagerRoute =require('./routes/StoreManager');
app.use('/storeManager',storeManagerRoute);

app.use(core());
app.use(express.static('public'));
app.use('/uploads',express.static('./uploads'));
/*************************************************************************************************************************/


//*********************************************Connect to Db**************************************************************
var uri = "mongodb://admin:admin123@cluster0-shard-00-00-9jpmm.mongodb.net:27017,cluster0-shard-00-01-9jpmm.mongodb.net:27017,cluster0-shard-00-02-9jpmm.mongodb.net:27017/ShoppingSite?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true});
const mydb = mongoose.connection;
mydb.on('error', error => console.log(error));
mydb.once('open', () => {
    console.log("Db connected");
});

//************************************************************************************************************************



app.get('/',function (req,res) {
    res.send('hello');



});












app.listen(3001,function () {
    console.log("server is running");
});

