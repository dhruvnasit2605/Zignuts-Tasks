// Write a JavaScript program that creates a class called University with properties for university
// names and departments. Include methods to add a department, remove a department, and display all
// departments. Create an instance of the University class and add and remove departments.

class University {
    #name
    #departments

    constructor(name) {
        this.#name = name;
        this.#departments = [];
    }

    get name() {
        return this.#name;
    }

    get departments() {
        return this.#departments;
    }

    addDepartment(department) {
        if(this.#departments.includes(department))
        {
            console.log(`${department} already exists`)
        }
        else{
            this.#departments.push(department);
            console.log(`${department} added`)

        }
    }

    removeDepartment(department) {
        if(!this.#departments.includes(department))
        {
            console.log(`${department} does not exists`);
        }
        else{
            this.#departments = this.#departments.filter(dep => dep !== department);
            console.log(`${department} deleted`);
            
        }

    }
}

const university = new University("CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY");

university.addDepartment("Computer Engineering");
university.addDepartment("Computer Engineering");
university.addDepartment("Information Technology");
university.addDepartment("Electronics and Communication");

console.log(`university: ${university.name}`);
console.log("departments: ", university.departments);

university.removeDepartment("Information Technology");
university.removeDepartment("CIVIL DEPARTMENT");


console.log("After removing department: ",university.departments);