const path = require("path");
console.log("Current File: \n")
console.log("filename:", __filename)
console.log("Directory:", __dirname)

console.log("\n"+ "-".repeat(50) + "\n");

const filePath = "/sujoy/document/nextLevel.pdf";
console.log("analyzing Path:", filePath, "\n");
console.log("Directory:", path.dirname(filePath))
console.log("Basename:", path.basename(filePath))
console.log("FileExtension:", path.extname(filePath))
console.log("File Name:", path.basename(filePath, path.extname(filePath)))

console.log("\n"+ "-".repeat(50) + "\n");

const parsed = path.parse(filePath)
console.log("Prarsed path Object", parsed)

console.log("\n"+ "-".repeat(50) + "\n");

console.log("formated path:", path.format(parsed))