const fs = require("fs")

// fs.writeFileSync("./output/app.log", "Application Started\n")

// console.log("file Created")

// const logEntry1 = `${new Date().toISOString()} User logged in\n`;
// fs.appendFileSync("./output/app.log", logEntry1) 
const logEntry2 = `${new Date().toISOString()} data fetch\n`;
fs.appendFileSync("./output/app.log", logEntry2)

console.log("task complete")