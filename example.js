// var pihu="raj";
// if (pihu=="raj"){
//     console.log("meri jaan he")
// }
// else{
//     console.log("i hate you")
// }

// var a = 10;
// var b = 12;
// if(a > b){
// console.log(a," is greater than ",b);
// }
// else {
// console.log(b," is greater than " ,a);
// }


// var num1= 10;
// var num2 = 20;
 
// if(num1>num2){
//    connsole.log("num1 is greater than num2");
// }
// else{
//    console.log("num2 is greater than num1");;
// }

// var course = "Hindi";
// if (course == "English"){
//   console.log("Tutorial is for English")}
// else if (course == "Hindi"){
//   console.log("Tutorial is for Hindi")}
// else {
//   console.log("Tutorial is for Javascript")
// }

// var day = "TUeSday".toLowerCase();
// if (day == "monday") {
//   console.log("Dhanwantari\nSiddhi\Kritika\Salon\nMayuri\Gauri");
// }
// else if (day == "tuesday") {
//   console.log("Keemaya\nRoshni\nPooja\nPriyanka\nnalini\nManisha");
// }
// else if (day == "wednesday") {
//   console.log("Shrusti\Karuna\Parveen\Sandhya\nLeena\Karishma");
// }
// else if (day == "thursday") {
//   console.log("Nikita\nMona\nPriyanka\Tejashree\nLovely\Mehzebin");
// }
// else if (day == "friday") {
//   console.log("Pihu\Sejal\nChaya\Shrestha\nMonali\nAardhangya");
// }
// else if (day == "saturday") {
//   console.log("Gunjan\nShweta\nRani\nIsha\nKusu\Madhu\n");
// }
// else if (day == "sunday") {
//   console.log("Swati\nKhusboo\nidhi\Preeti\nDipti\nAnamika");
// }
// else {
//   console.log("Please enter valid week day")
// }

// var x = 10;
// var y = 12
// var z = 90
 
// if (x > y){
//   if (x < z){
//       x = y
//   }
//   else{
//       m = z
//   }
// }
// else {
//   if(y > z){
//       m = y
//   }
//   else {
//       m = x
//   }
   
// }
// console.log(m)


// var choice ="overcast";
// if (choice === 'sunny') {
//    message = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.'
//  } else if (choice === 'rainy') {
//      message = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.'
//  } else if (choice === 'snowing') {
//      message = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.'
//  } else if (choice === 'overcast') {
//      message = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.'
//  } else {
//    message = 'Nothing'
// }
// console.log(message)

 
// time= 5
// time=8
// time=10


 
// var time = 9;
// if (time >= 5 && time <= 6) {
//  console.log("sleep well");
// }
// else if (time >= 6 && time <= 7) {
//  console.log("Morning Exercise");
// }
// else if(time > 7 && time < 8.30){
//  console.log("Break+Breakfast");
// }
// else if ( time > 8.30 && time < 12){
//  console.log("Study");
// }
 
// let isTrue = "True";
// if(isTrue=="True"){
//   console.log("Output should show")
// }
// else if(isTrue === "False"){
//   console.log("Both are same")
// }
// else {
//   console.log("Please run it. if all conditions false")

// }
// var number = 12;
 
// if(Number%3 === 0){
//    console.log("choco");
// }
// else if(number % 7){
//    console.log("late");
// }
// else if(a%3==0 && a%7==0) {
//    console.log("Chocolate")
// }
// else {
//    console.log("Not divisible by 3 , 7")
// }

// let readlineSync = require("readline-sync");
// var yourName= readlineSync.question("What is your name: ")
// console.log(yourName);


// const prompt = require('prompt-sync')({sigint: true});
 
// // Random number from 1 - 10
// const numberToGuess = Math.floor(Math.random() * 10) + 1;
// // This variable is used to determine if the app should continue prompting the user for input
// let foundCorrectNumber = false;
 
// while (!foundCorrectNumber) {
//   // Get user input
//   let guess = prompt('Guess a number from 1 to 10: ');
//   // Convert the string input to a number
//   guess = Number(guess);
 
//   // Compare the guess to the secret answer and let the user know.
//   if (guess === numberToGuess) {
//     console.log('Congrats, you got it!');
//     foundCorrectNumber = true;
//   } else {
//     console.log('Sorry, guess again!');
//   }
// }

// var age=15;
// switch(true);{
//     'case'(age<=15 && age>=20)':'
//     document.write("you are eligible");
//     break;
//     'case'(age<=20 && age>=30):
//     console.log("you are not eligible");
//     break;
//     'default':
//     console.log("enter velid age");
// }

// var num=1;
// switch(num){
//     case 1:
//         console.log("sunday");
//     break;
//     case 2:
//         console.log("monday");
//     break;
//     default:
//         console.log("wrong")
// }

// var readlineSync = require('readline-sync');
// var num = readlineSync.question("please inter the litres of water");
// if (num>1){
//     if(num>1 && num<=10){
//         console.log("No need of water")
//     }else{
//         console.log("water over flow")
//     }
// }else{
//     console.log("need more water")
// }

var readlineSync = require('readline-sync');
var day = readlineSync.question("please enter the day: ")
switch (day){
    case (day=="monday"):
        console.log("we have to made dal chawal")
    break;
    case (day=="Tuesday"):
        console.log("we have to made poha")
    break;
    case (day=="wednesday"):
        console.log("we have to made poha")
    break;
    default:
        console.log("what you wamt to make you can make")
}

console.log()