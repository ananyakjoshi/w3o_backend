
var globalVar = "Global variable!";

function testScope() {
    
    let functionLet = "Let variable!";

    console.log(globalVar); 
    console.log(functionLet); 
}

testScope();

console.log(globalVar);


const constantVar = "Constant variable!";

console.log(constantVar); 


let reassignableLet = "Initial value for let";
var reassignableVar = "Initial value for var";

reassignableLet = "New value for let";
reassignableVar = "New value for var";

console.log(reassignableLet); 
console.log(reassignableVar); 




