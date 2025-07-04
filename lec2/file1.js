let file3=require("./file3");
let res=file3.mul(5,6)
console.log(res);

function divide(a,b){
    return a/b;
}

module.exports.divide=divide;
