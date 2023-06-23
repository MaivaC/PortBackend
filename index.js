const express =require("express");
const app =express();
const mongoose =require("mongoose");
const {MONGO_DB_CONFIG} = require("./config/app.config");
const cors= require("cors");
//CONNECTION TO MONGODB
mongoose.connect(MONGO_DB_CONFIG.DB,{
    
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
    console.log('Connection to MONGODB Successful') 
}).catch((error) => {
    console.log('Error Connecting to MONGODB:',error);
}
);

//Enable cors
app.use(cors());

//Middleware to parse json data

app.use(express.json());

//Define a route to fetch data line
app.use("/api",require("./router/app.route"));
app.get("/getData",(req,res)=>{
    res.send("Hello");
});
//start the server
app.listen(8000,()=>{
    console.log("Server started on port 8000");
});
