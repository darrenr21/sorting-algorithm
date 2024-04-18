const prompt = require('prompt-sync')();
const bubbleSort = require('./sortingAlgorithm');

function parseInput(input) {
    return input.split(' ').map(Number);
}

// Get input from the user
const input = prompt('Enter numbers separated by spaces: ');
const arr = parseInput(input);

bubbleSort(arr);

console.log('Sorted array:', arr);
