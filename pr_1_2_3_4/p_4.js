function Factorial(number) {
    let globalVariable = "global variable";

    function factorialRecursive(num) {
        let localVariable = "local variable";
        
        if (num === 0) {
            return 1;
        } else {
            return num * factorialRecursive(num - 1);
        }

    }
    const result = factorialRecursive(number);
    console.log(globalVariable);
    return result;
}
const num = 7;
const Result = Factorial(num);
console.log(`Factorial of ${num} is: ${Result}`);