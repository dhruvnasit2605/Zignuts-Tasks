// Task 1: Need to create JavaScript functions for a sum of numbers in the string (Example like “foo8bar8cat2tc2”)


function getSum(str) {
    let sum = 0;

    for (let ch of str) {
        if(!isNaN(ch))
        {
            sum+=parseInt(ch);
        }
    }

    return sum;
}
    
console.log(`ans:${getSum("foo8bar8cat2tc2")}`); // ans:20
console.log(`ans:${getSum("too12ter3")}`); // ans:6

