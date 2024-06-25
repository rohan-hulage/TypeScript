let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published = true;   // if you are providing value to varibale then don't need to mention type, ts will know what type of variable it is

let level;  // if we don't initialize the variable then typescript consider it as "any" type and avoid using any type


// Arrays 
let numbers: number[] = []; // if array is not initialized then you must define the type of the array
numbers[0] = 1;