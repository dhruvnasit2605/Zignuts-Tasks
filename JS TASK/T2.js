// Task 2: Need to create a Javascript function for the sum of string (Example like "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")

function sumofString(str) {
    let arr = str.split(",");

    let sum=0;

    arr.forEach(element => {
        sum+=parseFloat(element);
    });

    return sum;
}

console.log("ans:",sumofString("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")); // ans:57.3
console.log("ans:",sumofString("1.5, 2.3")); // ans:3.8
console.log("ans:",sumofString("1.5")); // ans:1.5
