function getFirstInput () {
  let input = prompt('Enter a number: ');
  if (Number(input) < 0 || input === '' || Number(input) % 1 !== 0) { 
    console.log(`Invalid input! You must enter positive integers with the starting number being less than the ending number.\nYou entered "${input}"`);
    return;
  } else {
    return Number(input);
  }
}

function getSecondInput () {
  let input = prompt('Enter a number: ');
  // validate
  if (Number(input) < 0 || input === '' || Number(input) % 1 !== 0) { 
    console.log(`Invalid input! You must enter positive integers with the starting number being less than the ending number.\nYou entered "${input}"`);
    valid = true;
    return;
  } else {
    return Number(input);
  }
}

// ------------------------------------
// get range from inputs
function calculateRange () {
  let firstInput = getFirstInput();
  let secondInput = getSecondInput();
  let range = [];
  if (Number(secondInput) < Number(firstInput)) {
    console.log(`Invalid input! You must enter positive integers with the starting number being less than the ending number.\nYou entered "${firstInput}" and "${secondInput}"`);
    return;
  } else {
    for (let i = firstInput; i <= secondInput; i++) {
      range.push(i);
    }
    console.log(`Results for beginning at "${firstInput}" and ending at "${secondInput}"`);
  }
  return range;
}

function getSquares () {
  // variable initialization
  let perfectSquares = [];
  let nums = calculateRange();

  nums.forEach(num => {
    // check if number is a perfect square
    if (Math.sqrt(num) % 1 === 0) {
      perfectSquares.push(num);
    }
  });
  return perfectSquares;
}

function storeSquares () {
  const squares = {
    perfectSquares: getSquares(),
    sum: 0,
  };
  // algo for sums
  squares.sum = squares.perfectSquares.reduce((acc, curr) => acc + curr, 0);
  return squares;
}

function printSquares () {
  let squares = storeSquares();
  console.log(`The resulting perfect squares are: ${squares.perfectSquares}`);
  console.log(`The sum of the perfect squares equals: ${squares.sum}`);
}

printSquares();

// error handling is hard :(