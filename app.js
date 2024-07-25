const box = document.querySelector(".box");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "=", "+", "√", "1/x", "x", "!", "π", "²" ]
let output = "";

// Factorial function
const factorial = (num) => {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
};

//function to calculate on the basis of button clicked
const calculate = (btnValue) => {
    if(btnValue === "=" && output !== "") {
        //if output is "%", convert it to "/100" before calculating
        output = eval(output.replace("%", "/100"))
    } else if (btnValue === "c") {
        output = "";
    } else if(btnValue === "x") {
        //if cross tag button is clicked, remove last character from the output
        output = output.toString().slice(0, -1);
    } else if (btnValue === "!") {
        //handles factorial operation
        let number = parseInt(output);
        if (Number.isInteger(number) && number >=0) {
            output = factorial(number).toString();
        } else {
            output = "Error";
        }
    } else if (btnValue === "1/x") {
        //handles reciprocal operation
        let number = parseFloat(output);
        if (number !== 0) {
            output = (1/number).toString();
        } else {
            output = "Error";
        }
    } else if (btnValue === "√") {
        //handles sqaure root operation
        output = Math.sqrt(parseFloat(output)).toString();
    } else if (btnValue === "π") {
        //handles pi operations
        output += Math.PI;
    } else if (btnValue === "²") {
        //handles square operation
        output = (parseFloat(output)**2).toString();
    } else {
        //if output is empty and button is specialChars then return
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;

    }
    box.value = output;
};

//added event listener to buttons, call calculate() on click. 
buttons.forEach((button) => {
    //button click listener calls calculate() with dataset value as argument
    button.addEventListener("click", e => calculate(e.currentTarget.dataset.value));
        
})