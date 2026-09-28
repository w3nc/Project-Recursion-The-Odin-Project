function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Take the smaller of the two front items until one half runs out.
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      merged.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  // Whatever is left over is already sorted, so append it as-is.
  return merged.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  return merge(left, right);
}

module.exports = mergeSort;

module.exports.merge = merge;
module.exports.mergeSort = mergeSort;

// Command line demo: `node src/merge-sort/mergeSort.js`
if (require.main === module) {
  const examples = [
    [],
    [73],
    [1, 2, 3, 4, 5],
    [3, 2, 1, 13, 8, 5, 0, 1],
    [105, 79, 100, 110],
  ];

  examples.forEach((example) => {
    console.log(
      `mergeSort(${JSON.stringify(example)}) ->`,
      JSON.stringify(mergeSort(example)),
    );
  });
}

