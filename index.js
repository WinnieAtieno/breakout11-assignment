/*
1. Write a program that declares a variable price as a number, product as a string, and isAvailable as a boolean. Print their data types to the console.
2. Write a program that declares an array of numbers and a constant object representing a car with properties make, model, and year. Modify one of the properties of the object and print the updated object to the console.
3. Write a program that compares two variables a and b using both == and ===. Print the result of each comparison to the console and explain the difference.
4. Write a program that checks if a string str1 is lexicographically smaller than another string str2. Print the result to the console.
5. Write a program that takes a variable age and prints "Child" if the age is less than 13, "Teenager" if the age is between 13 and 19, and "Adult" if the age is 20 or older.
6. Write a program that takes a variable score and prints a grade based on the following criteria:

> A for scores 90 and above
> B for scores between 80 and 89
> C for scores between 70 and 79
> D for scores between 60 and 69
> F for scores below 60

7. Write a program that checks if a given number num is both positive and even. Print "The number is positive and even" if both conditions are true, otherwise print "The number does not meet both conditions".
8. Write a program that checks if a user is either an admin or has a valid subscription. If either condition is true, print "Access granted", otherwise print "Access denied".
9. Write a program that uses a for loop to print all the numbers from 1 to 20, but skips multiples of 3.
10. Write a program that uses a switch statement to print the day of the week based on a variable dayNumber (0 for Sunday, 1 for Monday, etc.).
11. Write a program that uses a while loop to calculate and print the sum of all integers from 1 to n, where n is a variable.*/

// 1. declare variables and print to the console
let price  = 20000;
let product = "Laptop";
let isAvailable = true;

// print to console
console.log(price,product,isAvailable);

// declare an array of numbers
let numbers = [1,2,3,4,5,6,7,8,9,10];

// 2 Create a constant variable
const car = {
    make:"probox",
    model:"van",
    year:2020
}
//Modify one of the property
car.make = "BMW";

// print the object 
console.log(car)

// 3 comparing varables using ==  and === operator
let a = 1;
let b  = "1";
 if(a == b){
    console.log("true");
 }
 else{
    console.log("false")
 }
//  The loose equality operator converted the both types to same data type through type coersion then compared them hence returning true .

 if (a === b){
    console.log("true");
 }
 else{
   console.log("false")
}
// The strict equality operator did not do any type coersion between the two data types hence returning false

// 4 Write a program that checks if a string str1 is lexicographically smaller than another string str2. Print the result to the console.
let str1 = 'book';
let str2 = 'pencil';
console.log(str1.localeCompare(str2)) //returns -1 since the str1 comes before pencil

console.log(str2.localeCompare(str1)) // returns 0 or positive  number since str2 comes after str1

 // 5. Write a program that takes a variable age and prints "Child" if the age is less than 13, "Teenager" if the age is between 13 and 19, and "Adult" if the age is 20 or older.
let age = 10;
   
   if(age < 13){
       console.log("Child");
    }
    else if( age >= 13 && age <= 19 ){
      console.log('Teenager')
    }
    else{
      console.log("Adult")
    }
    
   //6. Write a program that takes a variable score and prints a grade based on the following criteria:
   /* A for scores 90 and above
      > B for scores between 80 and 89
      > C for scores between 70 and 79
      > D for scores between 60 and 69
      > F for scores below 60 
   */
   let score = 70;
   if(score >= 90){
      console.log('A');
   }
   else if(score >= 80 &&  score <= 89){
      console.log('B');
   }
   else if (score >=70 && score <=79){
      console.log('C');
   }
   else if(score >= 60 && score<= 69){
      console.log('D');
   }
   else{
      console.log('F');
   }

   // 7. Write a program that checks if a given number num is both positive and even. Print "The number is positive and even" if both conditions are true, otherwise print "The number does not meet both conditions".
   //num >0, num is even  //

   let num = 90;
 
      if(num > 0 && num % 2 === 0){
         console.log('The number is positive and even')
      }
      else {
      
         console.log("The number does not meet both conditions")
      }

   //8. Write a program that checks if a user is either an admin or has a valid subscription. If either condition is true, print "Access granted", otherwise print "Access denied".

   let user = 'admin';
   let validSubcription = true;
   if(user === 'admin' || validSubcription ===  true){// false || true
     console.log("Access granted");
   }
   else{
      console.log('Access denied');
   }

   // 9. Write a program that uses a for loop to print all the numbers from 1 to 20, but skips multiples of 3.
  
   for(let num = 0; num < 20; num++){
      if(num % 3 !== 0){
          console.log(num)
      }
  }

// 10. Write a program that uses a switch statement to print the day of the week based on a variable dayNumber (0 for Sunday, 1 for Monday, etc.)

  let dayNumber = 0;

  switch(dayNumber) {
   case 0 : console.log("Sunday");
   break;
   case 1 : console.log("Monday");
   break;
   case 2 : console.log("Tuesday");
   break;
   case 3 : console.log("Wednesday");
   break;
   case 4 :console.log( "Thursday");
   break;
   case 5 : console.log("Friday");
   break;
   case 6 : console.log("Saturday");
   break;
   default:console.log("Does not match day of the week");
  }

// 11. Write a program that uses a while loop to calculate and print the sum of all integers from 1 to n, where n is a variable.
  let n = 100;
  let count = 1
  let sum = 0;
  while(count <= n){
  sum += count;
   count++;   
  }
  console.log(sum)
 

 
 
   

   
   
  
  


