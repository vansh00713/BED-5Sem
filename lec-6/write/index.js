const fs= require("fs");
fs.writeFile("../demo.txt","hello dost",function(err){
    if(err)
    {
        return console.log(err);
    }
    console.log("sucess");
})