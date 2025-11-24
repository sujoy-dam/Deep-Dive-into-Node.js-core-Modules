const fs= require("fs");

console.log("start reading....")

fs.readFile("../data/diary.txt", "utf-8", (err, data)=>{
    if(err){
        console.log("Error reading file:", err.message)
    }
    console.log("File Content:", data)
})

console.log("This runs immidiatly")