console.log('lesson2')
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let text;
text = [10, 9, 8, 7, 6, 'flowers','pink','green','rose',true];
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);
console.log(text[6]);
console.log(text[7]);
console.log(text[8]);
console.log(text[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 ={
    title:'Garry Potter',
    pageCount:400 ,
    genre:'fantastic'
}
let book2 ={
    title:'Black sun',
    pageCount:360 ,
    genre:'historical'
}
let book3 ={
    title:'Shantaram',
    pageCount:650,
    genre:'romantic'
}
console.log(book1, book2, book3 )
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book ={
    title:'Garry Potter',
    pageCount:400 ,
    genre:'fantastic',
    author: [{name:'Joan Rouling', age: 58}]
}
let booksun ={
    title:'Black sun',
    pageCount:360 ,
    genre:'historical',
    author: [{name:'Vasyl Shklar', age: 72}]
}
let bookshantaram = {
    title: 'Shantaram',
    pageCount: 650,
    genre: 'romantic',
    author: [{name: 'Gregori Roberts', age: 71}]
}
console.log(book,booksun,bookshantaram)
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let usersArr = [
    {name: 'Vasya',  userName: 'JS', password: 123456},
    {name: 'Sara', userName: 'JS-1', password: 123457},
    {name: 'Mykola', userName: 'JS-2', password: 123458},
    {name: 'Taras', userName: 'JS-3', password: 123459},
    {name: 'Masha', userName: 'JS-4', password: 1234500},
    {name: 'Sveta',  userName: 'JS-5', password: 123451},
    {name: 'Misha', userName: 'JS-6', password: 123452},
    {name: 'Levko', userName: 'JS-7', password: 123453},
    {name: 'Olena', userName: 'JS-8', password: 123454},
    {name: 'Mark', userName: 'JS-9', password: 123455},
];
// console.log(usersArr.password)
console.log('password: ' + usersArr[0]['password']);
console.log('password: ' + usersArr[1].password);
console.log('password: ' + usersArr[2].password);
console.log('password: ' + usersArr[3].password);
console.log('password: ' + usersArr[4].password);
console.log('password: ' + usersArr[5]['password']);
console.log('password: ' + usersArr[6].password);
console.log('password: ' + usersArr[7].password);
console.log('password: ' + usersArr[8].password);
console.log('password: ' + usersArr[9].password);
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;
if(x !== 0){
    console.log(true)
}else {
    console.log(false)
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

let time = -100500;

if (time > 45 && time <=60){
    console.log('4 частина')
}else if(time > 30 && time <=45){
    console.log('3 частина')
}else if(time > 15 && time <=30){
    console.log('2 частина')
}else if(time > 0 && time <=15){
    console.log('1 частина')
}else{
    console.log('Невірні дані')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

let day = -100500;

if (day >= 0 && day <=15 ){
    console.log('перша декада')
}else if(day> 15 && day <=31){
    console.log('Друга декада')
}else {
    alert('WRONG DAY')
    console.log('ERROR')
}



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = +prompt('Enter number of week', 4);
switch (week){
    case 1:
        console.log('Проснувся');
        break;
    case 2:
        console.log('Встав');
        break;
    case 3:
        console.log('Поснідав');
        break;
    case 4:
        console.log('Пішов на роботу');
        break;
    case 5:
        console.log('Прийшов з роботи');
        break;
    case 6:
        console.log('Вихідні');
        break;
    case 7:
        console.log('Скоро на роботу');
        break;

    default:
        console.log('ERROR')
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = 10;
let num2 = +prompt('Etner number', 10);
if (num1 === num2){
    console.log('Числа рівні')
}else if(num1 > num2){
    console.log('MAX is: ' + num1)
}else{
    console.log('MAX is: ' + num2)
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


let x1 = null;
x1 = x1 || 'default';
console.log(x1);
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let array = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(array[0].monthDuration >= 5){console.log('Supper - course is cool!')};
if(array[1].monthDuration >= 5){console.log('Supper - course is cool!')};
if(array[2].monthDuration >= 5){console.log('Supper - course is cool!')};
if(array[3].monthDuration >= 5){
    console.log('Supper - course is cool!')
}else{
    console.log('Course min 4')
}
if(array[4].monthDuration >= 5){console.log('Supper - course is cool!')};
if(array[5].monthDuration >= 5){
    console.log('Supper - course is cool!')
}else{
    console.log('Course min 4')
}