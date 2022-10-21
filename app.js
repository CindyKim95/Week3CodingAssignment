// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 1a Programmatically subtract the value of the first element in the array from the value in the last element of the array
// First el = 9 Last el = 93 (7th array)
let agesFirst = ages[1];
let agesLast = ages[7];

console.log(agesLast - agesFirst);

// 1b Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(40);

console.log(ages);

let lastAge = ages[ages.length - 1];

console.log(lastAge - agesFirst);

// 1c Use a loop to iterate through the array and calculate the average age
// let ages = [3, 9, 23, 64, 2, 8, 28, 93, 40]; added ages = 9, sum = 270 average = 30
let sum = 0;

for (addedNum of ages) {
    sum += addedNum;
}

console.log(sum);

average = sum / ages.length;

console.log( 'Average: ' + average);

// 2 Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// names.length total ltrs = 23, average = 3.83
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let countedLetters = names.join('').length;

console.log('Average: ' + countedLetters/names.length);

// 2b Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
console.log(names.join(' '));

// 3 How do you access the last element of any array?
let lastName = names.pop();
console.log('Last element of this array is ' + lastName);

// How do you access the first element of any array?
let firstName = names.shift(0);

console.log('First element of this array is ' + firstName);

// 5 Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
// let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// new array below
// sum = 23
let nameLengths = [3, 5, 3, 5, 4, 3];

let sumOfNameLengths = 0;

for (addingNum of nameLengths) {
    sumOfNameLengths += addingNum;
}

console.log(sumOfNameLengths);

// 7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function sayHello(word, n) {
    return word + n + n;
}

console.log(sayHello('Hello', 'Hello'));


// 8 Write a function that takes two parameters, firstName and lastName, and returns a full name
// The full name should be the first and the last name separate by a space
function firstAndLastNames(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(firstAndLastNames('Cindy', 'Kim'));

// 9 Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
let sumValue = [50, 50, 20];

function isSumGreater() {
    let addMe = sumValue.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    })

    if(addMe > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(isSumGreater());

// Finding average (Just doing this for extra practice!)
let addMe = sumValue.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
})

console.log(addMe);
console.log(addMe / sumValue.length);

// 10 Write a function that takes an array of numbers and returns the average of all the elements in the array.
let numbers = [10, 5, 3];

for (let numberSum of numbers) {
    averageNums = ((numberSum / numbers.length) * numbers.length);
}

console.log(averageNums);

// 11 Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
let averageArray1 = [10, 4];
// average is 7
let averageArray2 = [5, 3];
// average is 4

function greaterAverage() {
    let findSum1 = averageArray1.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }) // This results to sum of averageArray1
    
    let findSum2 = averageArray2.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }) // This results to sum of averageArray2

    let findAverage1 = (findSum1 / averageArray1.length); // This results to the average of first array
    let findAverage2 = (findSum2 / averageArray2.length); // This results to the average of second array

    if(findAverage1 > findAverage2) {
        return true;
    } else {
        return false;
    } // this "if" will return either true or false if value of findAverage1 is greater than findAverage2
}

console.log(greaterAverage()); 

// 12	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50
let moneyInPocket = 12;
let isHotOutside = true;

if ((isHotOutside === true) && (moneyInPocket > 10.50)) {
        console.log('true');
} else {
    console.log('false');
}

// 12 Went over in class w/ instructor
function boughtDrink(hotOutside, moneyPocket) {
    // if(hotOutside == true && moneyPocket > 10.50) {
    //     return true;
    // } else {
    //     return false;
    // }
    console.log(hotOutside && moneyPocket > 10.50);
}

boughtDrink(true, 2);

// 13	Create a function of your own that solves a problem
// This function uses if else statements helping decide which birthday gift to buy for a friend
// The results will be printed out on console.log()
// I created it because using if else statements is super useful to compare either three or more items
let shoes = 120.00;
let purse = 90.00;
let giftCard = 50.00;
let balance = 100.00;

function birthdayGift() {
    if(balance == shoes) {
        console.log('Buy shoes!');
    } else if(balance > purse) {
        console.log('Actually no buy a purse!');
    } else {
        console.log('You know what, buy two birthday gifts!');
    }
}

birthdayGift();
