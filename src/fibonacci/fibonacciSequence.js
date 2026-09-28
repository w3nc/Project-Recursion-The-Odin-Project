function fibs(length) {
  const sequence = [];

  for (let i = 0; i < length; i += 1) {
    if (i < 2) {
      sequence.push(i);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }

  return sequence;
}

// Recursively builds the Fibonacci sequence.
function fibsRec(length) {
  console.log("This was printed recursively");

  if (length <= 0) return [];
  if (length === 1) return [0];
  if (length === 2) return [0, 1];

  const sequence = fibsRec(length - 1);
  const nextNumber =
    sequence[sequence.length - 1] + sequence[sequence.length - 2];

  return [...sequence, nextNumber];
}

module.exports = { fibs, fibsRec };

// Command line demo: `node src/fibonacci/fibonacciSequence.js`
if (require.main === module) {
  const lengths = [0, 1, 2, 8, 13];

  console.log("fibs (iteration):");
  lengths.forEach((length) => {
    console.log(`fibs(${length}) ->`, JSON.stringify(fibs(length)));
  });

  console.log("\nfibsRec (recursion):");
  lengths.forEach((length) => {
    console.log(`fibsRec(${length}) ->`, JSON.stringify(fibsRec(length)));
  });

  console.log(
    "\nfibsRec logs 'This was printed recursively' once per recursive call, so an" +
      " input of 8 prints it 7 times (the length === 2 call is a base case).",
  );
}
