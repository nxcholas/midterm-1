// Simulate rolling a die

// Array to store result of each roll
const roll = [];

// Write code to populate the array with the outcome of the rolls.
//   Determine Number of rolls - A random number of rolls (1200, 2400, or 3600)
//     HINT:  Generate a random number between 1 - 3 and multiply it by 1200
//  
//   Populate the array (use a loop):
//     For each roll, generate a random number between 1 - 6 and add it to the array.
//
// When complete, you will have an array of 1200, 2400, or 3600 elements.
//   Each element will have a value between 1 - 6

const numRolls = Math.floor(Math.random() * 3 + 1) * 1200;
for (let i = 0; i < numRolls; i++) {
  roll.push(Math.floor(Math.random() * 6 + 1));
}

// Function - Return the number of occurrences of a roll
// Write a function per the following requirements:
//   Input:  A digit between 1 - 6 (assume valid input)
//   Return: A single number.  Count the number of occurrences of the digit in the roll[] array
//
// No other tasks are performed by the function.
//   Failure to meet these requirements, even if the output is correct, will
//   result in an incorrect solution
//
// HINT
//  Many ways to do this, one is to loop through the array counting the number of occurrences
//
// OTHER/MISC/OPTIONAL
//   The rolls array is global; However, if you want to make your function more generic,
//   you may use it as an input parameter.

function countRolls (roll, num) {
  return roll.filter(roll => roll === num).length;
}

// Display the results to the console
//
// Generate a header as follows:
//  YourLastName Rolling Die Simulation Statistics - XXXX Rolls
//     Note: XXXX will be either 1200, 2400, or 3600
//  e.g. Asher's Rolling Die Simulation Statistics - 2400 Rolls

console.log(`Nguyen's Rolling Die Simulation Statistics - ${numRolls} Rolls`);

// Write a loop to display the statistics for each possible outcome
//   Counts - Actual and Expected.  Relative frequency - Actual and expected
//   See requirements document for output format.
//  
// Note:
//   Counts
//     Actual - Use the function you created to compute the count of an outcome
//     Expected - Total rolls / 6
//   Relative frequency
//     Actual - Actual count (from your function) / total number of rolls
//     Expected - 1/6.
//

for (let i = 1; i <= 6; i++) {
  const count = countRolls(roll, i);
  const expectedCount = numRolls / 6;
  const relativeFrequency = count / numRolls;
  const expectedRelativeFrequency = 1 / 6;
  console.log(`Roll of ${i}:  Count: ${count}  Expected: ${expectedCount}  Relative Frequency: ${relativeFrequency.toFixed(4)}  Expected: ${expectedRelativeFrequency.toFixed(4)}`);
}

function reload () {
  location.reload();
}