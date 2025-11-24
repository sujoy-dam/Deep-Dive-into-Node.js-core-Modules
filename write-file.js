const fs = require("fs");

const content = "This is a Content \n node js is awsome"
try{
    fs.writeFileSync("../output/test-sync.txt", content)
    console.log("File write sycn");
}catch(err){
    console.error(err.message)
}

const content2 = "This is content too \n asyncronus"
fs.writeFile("./output/text-async.txt", content2, (error)=>{
    if(error){
         console.error(error.message)
    }else{
        console.log("file writen asyncronusly")
    }
})