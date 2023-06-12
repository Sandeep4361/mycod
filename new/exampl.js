let array = [
  { value: 5 },
  { value: 2 },
  { value: 8 },
  { value: 1 },
  { value: 9 }
];

// Function to sort the array in ascending order
function sortByAscending(arr) {
  // Use the sort() method with a comparator function
  arr.sort(function(a, b) {
    return a.value - b.value;
  });

  return arr;
}

// Function to sort the array in descending order
function sortByDescending(arr) {
  // Use the sort() method with a comparator function
  arr.sort(function(a, b) {
    return b.value - a.value;
  });

  return arr;
}

// Sort the array in ascending order and print the result
let ascendingArray = sortByAscending(array);
console.log("Ascending order:");
console.log(ascendingArray);

// Sort the array in descending order and print the result
let descendingArray = sortByDescending(array);
console.log("Descending order:");
console.log(descendingArray);
