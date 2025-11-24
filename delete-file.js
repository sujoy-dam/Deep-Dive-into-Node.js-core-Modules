const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "this is temp file");
console.log("temp file is created");

if (fs.existsSync("./output/temp.txt")) {
    console.log("file exists")
    fs.unlinkSync("./output/temp.txt")
    console.log("file Deleted")
}
try {
    fs.unlinkSync("./output/temp.txt")
} catch (error) {
    console.error(error.message)
}

fs.writeFile("./output/temp2.text", "anothor temp file", (error) => {
    if (error) return console.error(error.message);

    console.log("another temp file created")
    fs.unlink("./output/temt2.txt", (error)=>{
        if (error) {
            console.log("Error:", error.message)
        } else {
            console.log("temp deleted")
        }
    })
})