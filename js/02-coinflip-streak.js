let coinFlip;
let streak = 0;

//The do/while loop setting
do {
  coinFlip = Math.round(Math.random());

  if (coinFlip === 0) {
    console.log("Heads");
    streak++;
  } else {
    console.log("Tails");
  }
} while (coinFlip !== 1);

console.log("You went: " + streak + "heads before you got a tail");
