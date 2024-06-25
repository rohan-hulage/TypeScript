let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published = true;   // if you are providing value to varibale then don't need to mention type, ts will know what type of variable it is

let level;  // if we don't initialize the variable then typescript consider it as "any" type and avoid using any type


// Arrays 
let numbers: number[] = []; // if array is not initialized then you must define the type of the array
numbers[0] = 1;
let names = ["Abhishek", "Adi"];
names.push("Pratik");
console.log("Arrays:");
console.log(names);


// Touples : are usefull when have two values like key and value pair
let details: [number, string]  = [1, "Abhishek"];
console.log("Touples:");
console.log(details);


// Enum : list of related constants
const enum Size {Small = 1, Medium, Large};
let mySize = Size.Large;
console.log("Enum:");
console.log(mySize);

// Functions : have to mention type of parameter and return type of function
// properly annotate the functions, parameters and return types
function incomeTax(income: number): number {
    if(income <= 50000){
        return income * 0.1;
    }else{
        return income * 0.3;
    }
}

console.log("Functions");
const abhiTax = incomeTax(100000);
console.log(abhiTax);
