const fs=require("fs")
//read demo.txt and demo2.txt and write in result.txt
fs.readFile("../demo.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    let data1 = data;
    fs.readFile("../demo2.txt","utf-8",function(err,data){
        let data2=data;
        let result=data1+"\n"+data2;
        fs.writeFile("../result.txt",result,function(err){
            if(err)return console.log(err);
            console.log("done");
        })
    })
})