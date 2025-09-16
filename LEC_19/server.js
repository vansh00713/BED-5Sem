const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const USER=require("./model/user")
const Blog = require("./model/blog");
const mongoose = require('mongoose'); //common js syntax
// import mongoose from 'mongoose'; //ES6 module syntax
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
mongoose.connect('mongodb://127.0.0.1:27017/G27DB')
  .then(() => console.log('Connected!'));

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);

app.listen(3000,()=>{
    console.log("server running on port 3000");
})