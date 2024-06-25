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
let employee = {
    id: 1,
    name: "Abhishek",
    retire: (date) => {
        console.log(date);
    }
};
console.log("Objects");
console.log(employee);
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.4;
    }
}
const w = kgToLbs("5");
console.log("Union of types");
console.log(w);
let voice = {
    meow: () => {
        console.log("Moew");
    },
    bark: () => {
        console.log("Bark");
    }
};
console.log(voice);
let quality = 100;
let height = 'cm';
function greet(name) {
    if (name) {
        return name.toLocaleUpperCase();
    }
    else {
        return "Hola!";
    }
}
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=dataTypes.js.map