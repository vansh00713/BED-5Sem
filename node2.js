
const fs= require("fs");

console.log(fs);
console.log("start");
setTimeout(()=>
{
    console.log("settimeout")
},0)
setTimeout(()=>
{
    console.log("set Immediate");
})
 fs.readFile("demo.txt","utf-8",(data)=>{
 console.log(data)
 setTimeout(()=>{
 console.log("setTimeout 2");
 },0)
 })
 setImmediate(()=>{
     console.log("set immediate 2")
 })
//  console.log("end");
 function someTask()
 {
    return new Promise((resolve,reject)=>
    {
        resolve("promise");
    });
}
    someTask().then((data)=>{
        console.log("next tick")
    })
    console.log("end");
 