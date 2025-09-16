const express=require("express")
const router = express.Router();
const{postAddBlog,deleteOneBlog,getAllBlogs}=require("../controller/blogController");

const Blog = require("../model/blog");

router.post("/",)



//create
router.delete("/:blogId")


module.exports=router