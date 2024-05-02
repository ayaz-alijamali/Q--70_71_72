// Question ___________ 70


function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

// Call the function to print numbers from 1 to 5
printNumbers(5);


// Question ____________ 71


let x = 10;  // Declare and initialize a variable using let
console.log(x);  // Output: 10

// Reassign the variable using let
x = 20;
console.log(x);  // Output: 20



// Question ______________ 72


{
    let blockScopedVariable = "Inside Block";  // Declare a block-scoped variable using let
    const blockScopedConst = "Constant Value";  // Declare a block-scoped constant using const

    console.log(blockScopedVariable);  // Output: Inside Block
    console.log(blockScopedConst);     // Output: Constant Value
}

// Trying to access the block-scoped variables outside the block
try {
    console.log(blockScopedVariable);  // This line will throw an error
} catch (error) {
    console.error(error);  // Output: ReferenceError: blockScopedVariable is not defined
}

try {
    console.log(blockScopedConst);     // This line will throw an error
} catch (error) {
    console.error(error);  // Output: ReferenceError: blockScopedConst is not defined
}
