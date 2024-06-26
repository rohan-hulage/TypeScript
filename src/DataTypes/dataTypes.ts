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

// Objects : key and value: 
// can write function inside the object
// type aliase : simplified way to use object
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}
let employee: Employee = {
    id: 1, 
    name: "Abhishek",
    retire: (date: Date) => {
        console.log(date);
    }
}
console.log("Objects");
console.log(employee);

// Union types
function kgToLbs(weight: number | string): number {
    if(typeof weight === "number"){
        return weight * 2.2;
    }else{
        return parseInt(weight) * 2.4;
    }
}
const w = kgToLbs("5");
console.log("Union of types");
console.log(w);


// intersection types
type Cat = {
    meow: () => void
}

type Dog = {
    bark: () => void
}

type Sound = Cat & Dog;
let voice: Sound = {
    meow: () => {
        console.log("Moew");
    },
    bark: () => {
        console.log("Bark");
    }
}

console.log(voice);


// Literals 
type Quality = 50 | 100;
let quality: Quality = 100;

type Height = 'cm' | 'feet';
let height: Height = 'cm';

// Nullable types
function greet(name: string | null | undefined) {
    if(name){
        return name.toLocaleUpperCase();
    }else{
        return "Hola!";
    }
}
greet(null);
greet(undefined);

// Optional Chaining
type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(1);
// optional property access operator
console.log(customer?.birthday);


