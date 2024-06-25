"use strict";
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
let numbers = [];
numbers[0] = 1;
let names = ["Abhishek", "Adi"];
names.push("Pratik");
console.log("Arrays:");
console.log(names);
let details = [1, "Abhishek"];
console.log("Touples:");
console.log(details);
;
let mySize = 3;
console.log("Enum:");
console.log(mySize);
function incomeTax(income) {
    if (income <= 50000) {
        return income * 0.1;
    }
    else {
        return income * 0.3;
    }
}
console.log("Functions");
const abhiTax = incomeTax(100000);
console.log(abhiTax);
//# sourceMappingURL=dataTypes.js.map