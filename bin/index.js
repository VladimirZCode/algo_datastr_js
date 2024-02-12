#! /usr/bin/env node

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';
import linearSearch from '../algorithms/linear_search.js';
import binarySearch from '../algorithms/binary_search.js';
import binarySearchShort from '../algorithms/binary_search_short.js';
import binarySearchRecursive from '../algorithms/binary_search_recursive.js';

console.log(chalk.bgBlue.white("Algorithms and data structures"));
console.log(chalk.bgBlue.white("Option \"algo\" specifies the algorithm"));
console.log(chalk.bgBlue.white("Available algorithms: \"linear_search\", \"binary_search\", \"binary_search_short\", \"binary_search_recursive\""));
console.log('');

const argv = yargs(hideBin(process.argv)).argv
let algo = argv.algo;
if (!algo) {
  console.log(chalk.red('No algorithm provided!'));
  process.exit()
}

if (!Array.isArray(algo)) {
  algo = [algo];
}

console.log(chalk.green('Provided algorithms: ' + algo));

for (const algorithm of algo) {
  console.log(chalk.green('Provided algorithm: ' + algorithm));
  switch (algorithm) {
    case "linear_search":
      testLinearSearch();
      break;
    case "binary_search":
      testBinarySearch();
      break;
    case "binary_search_short":
      testBinarySearchShort();
      break;
    case "binary_search_recursive":
      testBinarySearchRecursive();
      break;
    default:
      console.log(chalk.red('Undefined algorithm provided: ' + algorithm));
      process.exit()
  }
}

function testLinearSearch() {
  console.log(chalk.green('Linear search test:'));

  let list = [1,2,3,4,5,6,7,8,9,10];
  let searchResult = null;

  for (let target = -1; target < 11; target++) {
    searchResult = linearSearch(list, target);
    if (searchResult === -1) {
      console.log(chalk.green('In list [%s] target: %s not found in the array.'), list.join(), target);
    } else {
      console.log(chalk.green('In list [%s] target: %s found in the array.'), list.join(), target);
    }
  }

  console.log('');
}

function testBinarySearch() {
  console.log(chalk.green('Binary search test:'));

  let list = [1,2,3,4,5,6,7,8,9,10];
  let searchResult = null;

  for (let target = -1; target < 11; target++) {
    searchResult = binarySearch(list, target);
    if (searchResult === -1) {
      console.log(chalk.green('In list [%s] target: %s not found in the array.'), list.join(), target);
    } else {
      console.log(chalk.green('In list [%s] target: %s found in the array.'), list.join(), target);
    }
  }

  console.log('');
}

function testBinarySearchShort() {
  console.log(chalk.green('Binary search short test:'));

  let list = [1,2,3,4,5,6,7,8,9,10];
  let searchResult = null;

  for (let target = -1; target < 12; target++) {
    searchResult = binarySearchShort(list, target);
    console.log(chalk.green('In list [%s] target: %s found at index: %s'), list.join(), target, searchResult);
  }

  console.log('');
}

function testBinarySearchRecursive() {
  console.log(chalk.green('Binary search recursive test:'));

  let list = [1,2,3,4,5,6,7,8,9,10];
  let searchResult = null;

  for (let target = -1; target < 12; target++) {
    searchResult = binarySearchRecursive(list, target);
    if (searchResult === -1) {
      console.log(chalk.green('In list [%s] target: %s not found in the array.'), list.join(), target);
    } else {
      console.log(chalk.green('In list [%s] target: %s found in the array.'), list.join(), target);
    }
  }

  console.log('');
}
