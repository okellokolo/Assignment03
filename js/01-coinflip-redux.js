let coinFlip;

// Number of times to loop
let coinFlipCount = parseInt(
  prompt("How many times would you like to flip the coin?")
);

// For loop
for (let i = 0; i < coinFlipCount; i++) {
  // Random numbers 0 or 1
  coinFlip = Math.floor(Math.random() * 2);

  // Check the result
  if (coinFlip === 0) {
    console.log("Heads");
  } else if (coinFlip === 1) {
    console.log("Tails");
  }
}
