const express=require("express")
const app=express()
let port=3000;
let LoginRoute=require("./routes/login")
let RegisterRoute=require("./routes/register")
mongoose.connect("mongodb://")
.then(()=>{
    console.log(" db connected successfully")
})
.catch((error)=>{
    console.error("Error connecting to the database:", error);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});