let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';

console.log(str1, str2, str3, str4)

//number
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
const PI = 3.14;
let num6 = 2.7;
let num7 = 16;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(PI);
console.log(num6);
console.log(num7);


// boolean
let bool1 = true;
let bool2 = false;

console.log(bool1, bool2)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Ruslana ';
let middleName = 'Svystyn ';
let lastName = 'Mykolaivna';

let result = firstName + middleName + lastName;
console.log(result)

let result2 = `${firstName} - ${middleName} - ${lastName}`;
console.log(result2)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;

console.log(typeof a, typeof b, typeof c);
