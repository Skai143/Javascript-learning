//ASSIGNMENT

/* 
1). Write a function that takes a time in 24-hour format (e.g., 14) and returns 'Morning', 'Afternoon', 'Evening', or 'Night'.*/


let time = 29
function morning_afternoon_night_evening() {
  if (time <= 12 && time >= 0) {
  console.log('morning');
  } else if (time <= 16 && time > 12) {
  console.log('Afternoon');
  } else if (time <= 18 && time > 16) {
  console.log('Evening');
  } else if (time > 18 && time <= 24) {
  console.log('Night');
  } else {
  console.log('Time input should be between 0 - 24');
  }
}

morning_afternoon_night_evening()


/* 
2). Write a function that takes a person’s sleep hours and returns 'Too Little' (<6), 'Adequate' (6–8), or 'Too Much' (>8).*/

/*
let i = 8.1;
function sleepState() {
  if (i < 6) {
  console.log('Too Litte');
  } else if(i >= 6 && i <= 8) {
  console.log('Adequate');
  } else {
  console.log('too much')
  }
}
sleepState();
*/

/*
3). Write a function that takes a number and returns 'Divisible by 2 and 3', 'Divisible by 2 only', 'Divisible by 3 only', or 'Not divisible'.
*/

/*
let x = 32;
function checkDivisibility() {
  if (x % 6 === 0) {
  console.log('Divisible by 2 and 3');
  } else if (x % 2 === 0) {
  console.log('Divisible by 2 only');
  } else if (x % 3 === 0) {
  console.log('Divisible by 3 only');
  } else {
  console.log('Not divisible');
  }
}
checkDivisibility()
*/





/*
4). Write a function that takes a number and returns 'Palindrome' if it reads the same forward/backward, otherwise 'Not Palindrome'.
*/

/*
let x = 189981;
let former = x.toString();
let latter = former.split('').reverse().join('');

function palindromeCheck() {
  if (former === latter) {
  console.log('palindrome');
  } else {
  console.log('Not palindrome');
  }
}

palindromeCheck();
*/




//below are just for my practice


/*
function greet(name) {
  console.log('Hello ' + name );
};
greet('harvey')
*/

/*function add(a, b) {
  console.log(a + b);
}
let answer = add(4,6);
console.log(answer);
*/