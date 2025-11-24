const args = process.argv;

// process.args[0]= node path
// process.args[1]= file path
// process.args[2]= first actual argument

const name = args[2]|| "guest"
const time = new Date().getHours();

let greeting;

if(time < 12){
    greeting = "Good Morning"
}else if(time< 18){
    greeting= "Good Afternoon"
}else{
    greeting = "Good Evening"
}
console.log(`${greeting} ${name}`)