// # Programming Basics: Arithmetic Operators

// These tasks are aimed at making you more comfortable with solving math problems using JS. **Print each of your results to the console.**
// ​
// **Basic Arithmetic Problems**
// ​
// Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold?

console.log(6450 / 15); // 430

// Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?

console.log(500 * 52); // 26000

// **Percentage**

// Q3. Calculate the percentage of 18/30.

console.log((18 / 30) * 100); // `Expected output: 60%`

// `Given 2 numbers "a" and "b", to calculate the percentage of one number in relation to the other the formula is: (a / b) * 100`

// **Geometry Formulas**

// Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.

console.log(4.75 * 4); // 19

// `The perimeter of a square is the length of each side summed together.`

// Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.

console.log(5 + 6 + 7); // 18

// Q6. Calculate the area of a square. Each side is 5cm.

console.log(5 ** 2); // 25

// Q7. Calculate the area of an [right-angled triangle](https://en.wikipedia.org/wiki/Right_triangle). Assume the length of the sides are 3cm, 4cm, 5cm.

console.log((3 * 4) / 2); // 6

// Q8. Calculate the volume of a cube. Length of each side is 9cm.

console.log(9 ** 3); // 729

// **Consumer Formula**
// ​
// Q9. Calculate the three bills including tips:
// €22.35 + 10% tip
console.log(22.35 + 22.35 * 0.1); // 24.585
// €26.67 + 15% tip
console.log(26.67 + 26.67 * 0.15); // 30.6705
// €35.92 + 20% tip
console.log(35.92 + 35.92 * 0.2); // 43.104
// ​
// ```
// To calculate the percentage of a number:
// ​
// 1. divide the percentage amount by 100
// 2. multiply your number by the result of step 1
// ​
// For example, the 15% of 30:
// ​
// - divide 15 by 100: 15 / 100, which gives 0.15
// - multiply 30 by 0.15: 30 * 0.15
// ```
// ​
// **Average**
// ​
// Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
// What is Noemy's average hours worked per day?

console.log((8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10); // 5.85

// ```
// The average of a series of number is calculate by summing all the numbers
// together and dividing the result by how many numbers you have
// ```
