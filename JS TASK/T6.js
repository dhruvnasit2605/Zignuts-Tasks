// Write a program to find the factorial of a number using a recursive function

function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(`factorial of 5 is ${factorial(5)}`); //factorial of 5 is 120
console.log(`factorial of 6 is ${factorial(6)}`); //factorial of 5 is 720
