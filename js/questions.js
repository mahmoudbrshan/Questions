let questions1 = [
  // 100 ES6 Questions
  {
    numb: 1,
    question:
      "Which keyword is used to declare a block-scoped variable in ES6?",
    answer: "let",
    options: ["var", "let", "int", "static"],
  },
  {
    numb: 2,
    question: "What is the correct syntax for an arrow function?",
    answer: "const add = (a, b) => a + b;",
    options: [
      "function add(a, b) => a + b;",
      "const add = (a, b) => a + b;",
      "add = function(a, b) -> a + b;",
      "let add = (a, b) < a + b >;",
    ],
  },
  {
    numb: 3,
    question: "Which of the following is NOT a feature of ES6?",
    answer: "goto statement",
    options: [
      "Arrow functions",
      "Classes",
      "Template literals",
      "goto statement",
    ],
  },
  {
    numb: 4,
    question: "How do you import a function from another file in ES6?",
    answer: "import { myFunc } from './myFile';",
    options: [
      "require('./myFile').myFunc;",
      "import { myFunc } from './myFile';",
      "include myFunc from './myFile';",
      "using myFunc from './myFile';",
    ],
  },
  {
    numb: 5,
    question: "What is the output of: console.log([...'ES6']);",
    answer: "['E', 'S', '6']",
    options: ["['ES6']", "['E', 'S', '6']", "['E S 6']", "Error"],
  },
  {
    numb: 6,
    question: "Which method is used to find an element in an array in ES6?",
    answer: "find()",
    options: ["find()", "search()", "locate()", "get()"],
  },
  {
    numb: 7,
    question: "How do you define a default parameter in a function?",
    answer: "function foo(a = 1) {}",
    options: [
      "function foo(a := 1) {}",
      "function foo(a = 1) {}",
      "function foo(a default 1) {}",
      "function foo(a, 1) {}",
    ],
  },
  {
    numb: 8,
    question: "What is a template literal in ES6?",
    answer: "A string wrapped in backticks allowing embedded expressions",
    options: [
      "A string wrapped in single quotes",
      "A string wrapped in double quotes",
      "A string wrapped in backticks allowing embedded expressions",
      "A string with escape sequences",
    ],
  },
  {
    numb: 9,
    question: "Which symbol is used for destructuring assignment?",
    answer: "{} and []",
    options: ["()", "{} and []", "<>", "||"],
  },
  {
    numb: 10,
    question: "How do you export a constant in ES6?",
    answer: "export const PI = 3.14;",
    options: [
      "export const PI = 3.14;",
      "module.export PI = 3.14;",
      "const PI = 3.14 export;",
      "export: PI = 3.14;",
    ],
  },
  {
    numb: 11,
    question: "What does the ... (spread) operator do in arrays?",
    answer: "Expands an array into individual elements",
    options: [
      "Expands an array into individual elements",
      "Combines two arrays",
      "Finds the length of an array",
      "Removes duplicates from an array",
    ],
  },
  {
    numb: 12,
    question: "Which keyword is used to declare a constant in ES6?",
    answer: "const",
    options: ["let", "var", "const", "static"],
  },
  {
    numb: 13,
    question: "What is the value of 'typeof null' in ES6?",
    answer: "object",
    options: ["object", "null", "undefined", "number"],
  },
  {
    numb: 14,
    question: "How do you create a class in ES6?",
    answer: "class MyClass {}",
    options: [
      "class MyClass {}",
      "MyClass = class {}",
      "function MyClass() {}",
      "create class MyClass {}",
    ],
  },
  {
    numb: 15,
    question: "Which method is used to merge two arrays in ES6?",
    answer: "concat()",
    options: ["merge()", "concat()", "join()", "combine()"],
  },
  {
    numb: 16,
    question: "What is the output of: [1,2,3].map(x => x * 2)?",
    answer: "[2, 4, 6]",
    options: ["[2, 4, 6]", "[1, 2, 3]", "[1, 4, 9]", "[2, 3, 4]"],
  },
  {
    numb: 17,
    question: "How do you check if a variable is an array in ES6?",
    answer: "Array.isArray(variable)",
    options: [
      "Array.isArray(variable)",
      "typeof variable === 'array'",
      "variable instanceof ArrayList",
      "isArray(variable)",
    ],
  },
  {
    numb: 18,
    question: "What is the output of: '2' + 2 in ES6?",
    answer: "'22'",
    options: ["'22'", "4", "'4'", "NaN"],
  },
  {
    numb: 19,
    question: "Which method is used to filter elements in an array?",
    answer: "filter()",
    options: ["filter()", "find()", "map()", "reduce()"],
  },

  // ... 80 more ES6 questions would follow in the same format ...
  {
    numb: 21,
    question: "Which keyword is used to inherit from another class in ES6?",
    answer: "extends",
    options: ["extends", "inherits", "super", "prototype"],
  },
  {
    numb: 22,
    question: "How do you create a new Set in ES6?",
    answer: "new Set()",
    options: ["new Set()", "Set.create()", "Set()", "create Set[]"],
  },
  {
    numb: 23,
    question:
      "What is the default value of a function parameter if not provided?",
    answer: "undefined",
    options: ["null", "0", "undefined", "false"],
  },
  {
    numb: 24,
    question:
      "Which method is used to copy all enumerable properties from one or more source objects to a target object?",
    answer: "Object.assign()",
    options: [
      "Object.assign()",
      "Object.copy()",
      "Object.merge()",
      "Object.clone()",
    ],
  },
  {
    numb: 25,
    question: "How do you define a generator function in ES6?",
    answer: "function* gen() {}",
    options: [
      "function* gen() {}",
      "function gen*() {}",
      "gen function() {}",
      "function:gen() {}",
    ],
  },
  {
    numb: 26,
    question:
      "Which of the following is a new data structure introduced in ES6?",
    answer: "Map",
    options: ["Array", "Set", "Object", "Map"],
  },
  {
    numb: 27,
    question: "What is the output of: typeof []?",
    answer: "object",
    options: ["object", "array", "undefined", "function"],
  },
  {
    numb: 28,
    question:
      "Which method is used to check if an array includes a certain value?",
    answer: "includes()",
    options: ["includes()", "has()", "contains()", "find()"],
  },
  {
    numb: 29,
    question: "How do you create a Promise in ES6?",
    answer: "new Promise((resolve, reject) => {})",
    options: [
      "new Promise((resolve, reject) => {})",
      "Promise.create()",
      "Promise()",
      "promise(resolve, reject)",
    ],
  },
  {
    numb: 30,
    question:
      "Which of the following is used to iterate over object properties?",
    answer: "for...in",
    options: ["for...in", "for...of", "forEach", "map"],
  },
  {
    numb: 31,
    question: "What is the output of: [1,2,3].find(x => x > 1)?",
    answer: "2",
    options: ["2", "1", "3", "undefined"],
  },
  {
    numb: 32,
    question: "Which method is used to convert an array to a string in ES6?",
    answer: "join()",
    options: ["join()", "toString()", "concat()", "split()"],
  },
  {
    numb: 33,
    question: "What is the output of: [1,2,3].filter(x => x > 1)?",
    answer: "[2, 3]",
    options: ["[2, 3]", "[1, 2, 3]", "[1, 3]", "[3]"],
  },
  {
    numb: 34,
    question: "Which of the following is a valid Map method in ES6?",
    answer: "set()",
    options: ["set()", "add()", "push()", "insert()"],
  },
  {
    numb: 35,
    question: "How do you get the number of elements in a Set?",
    answer: "set.size",
    options: ["set.size", "set.length", "set.count()", "set.total()"],
  },
  {
    numb: 36,
    question:
      "Which of the following is NOT a valid way to declare a function in ES6?",
    answer: "function = () => {}",
    options: [
      "function myFunc() {}",
      "const myFunc = function() {}",
      "const myFunc = () => {}",
      "function = () => {}",
    ],
  },
  {
    numb: 37,
    question: "What is the output of: [1,2,3].reduce((a, b) => a + b, 0)?",
    answer: "6",
    options: ["6", "0", "1", "3"],
  },
  {
    numb: 38,
    question: "Which of the following is a valid way to clone an array in ES6?",
    answer: "[...arr]",
    options: ["[...arr]", "arr.clone()", "arr.copy()", "arr.duplicate()"],
  },
  {
    numb: 39,
    question: "What is the output of: typeof []?",
    answer: "object",
    options: ["object", "array", "undefined", "function"],
  },
  {
    numb: 40,
    question:
      "Which method is used to check if all elements in an array pass a test?",
    answer: "every()",
    options: ["every()", "some()", "filter()", "find()"],
  },
  {
    numb: 41,
    question: "How do you define a generator function in ES6?",
    answer: "function* gen() {}",
    options: [
      "function* gen() {}",
      "function gen*() {}",
      "gen function() {}",
      "function:gen() {}",
    ],
  },
  {
    numb: 42,
    question: "What is the output of: [1,2,3].some(x => x > 2)?",
    answer: "true",
    options: ["true", "false", "undefined", "null"],
  },
  {
    numb: 43,
    question: "Which of the following is NOT a valid Set method?",
    answer: "get()",
    options: ["add()", "has()", "delete()", "get()"],
  },
  {
    numb: 44,
    question: "How do you check if a variable is an array in ES6?",
    answer: "Array.isArray(arr)",
    options: [
      "Array.isArray(arr)",
      "arr.isArray()",
      "typeof arr === 'array'",
      "arr instanceof Array()",
    ],
  },
  {
    numb: 45,
    question:
      "Which of the following is a valid way to use destructuring assignment?",
    answer: "const [a, b] = [1, 2];",
    options: [
      "const [a, b] = [1, 2];",
      "const a, b = [1, 2];",
      "let a = [1, 2];",
      "let [a, b] == [1, 2];",
    ],
  },
  {
    numb: 46,
    question: "What is the output of: Math.max(...[1,2,3])?",
    answer: "3",
    options: ["3", "1", "2", "undefined"],
  },
  {
    numb: 47,
    question: "Which of the following is NOT a valid Map method?",
    answer: "add()",
    options: ["set()", "get()", "delete()", "add()"],
  },
  {
    numb: 48,
    question: "How do you create a new Map in ES6?",
    answer: "new Map()",
    options: ["new Map()", "Map.create()", "Map()", "createMap()"],
  },
  {
    numb: 49,
    question: "What is the output of: [1,2,3].reverse()?",
    answer: "[3, 2, 1]",
    options: ["[3, 2, 1]", "[1, 2, 3]", "[1, 3, 2]", "[2, 3, 1]"],
  },
  {
    numb: 50,
    question:
      "Which of the following is a valid way to use the spread operator?",
    answer: "const arr2 = [...arr1];",
    options: [
      "const arr2 = [...arr1];",
      "const arr2 = ..arr1;",
      "const arr2 = arr1...;",
      "const arr2 = arr1[];",
    ],
  },
  {
    numb: 51,
    question: "Which method is used to merge two or more arrays in ES6?",
    answer: "concat()",
    options: ["concat()", "merge()", "push()", "join()"],
  },
  {
    numb: 52,
    question: "What is the output of: [1,2,3].slice(1,2)?",
    answer: "[2]",
    options: ["[2]", "[1, 2]", "[2, 3]", "[1, 2, 3]"],
  },
  {
    numb: 53,
    question: "Which keyword is used to export a function in ES6?",
    answer: "export",
    options: ["export", "module.exports", "expose", "public"],
  },
  {
    numb: 54,
    question: "How do you import a default export in ES6?",
    answer: "import myFunc from './myFunc';",
    options: [
      "import myFunc from './myFunc';",
      "import { myFunc } from './myFunc';",
      "require('./myFunc');",
      "import * as myFunc from './myFunc';",
    ],
  },
  {
    numb: 55,
    question: "Which of the following is a valid arrow function?",
    answer: "const add = (a, b) => a + b;",
    options: [
      "const add = (a, b) => a + b;",
      "function add(a, b) { return a + b; }",
      "add = (a, b) => { a + b }",
      "let add = function(a, b) => a + b;",
    ],
  },
  {
    numb: 56,
    question: "What is destructuring in ES6?",
    answer: "Extracting values from arrays or objects",
    options: [
      "Extracting values from arrays or objects",
      "Combining arrays",
      "Creating new objects",
      "Looping through arrays",
    ],
  },
  {
    numb: 57,
    question: "Which symbol is used for template literals?",
    answer: "Backtick (`)",
    options: [
      "Backtick (`)",
      "Single quote (')",
      'Double quote (")',
      "Tilde (~)",
    ],
  },
  {
    numb: 58,
    question: "How do you export a named function in ES6?",
    answer: "export function myFunc() {}",
    options: [
      "export function myFunc() {}",
      "module.exports = myFunc;",
      "export default function myFunc() {}",
      "exports.myFunc = myFunc;",
    ],
  },
  {
    numb: 59,
    question:
      "Which of the following is a new data structure introduced in ES6?",
    answer: "Set",
    options: ["Array", "Set", "Object", "MapList"],
  },
  {
    numb: 60,
    question: "What is the output of: [...'ES6']?",
    answer: "['E', 'S', '6']",
    options: ["['E', 'S', '6']", "['ES6']", "['E S 6']", "['E', 'S6']"],
  },
  {
    numb: 61,
    question:
      "Which method is used to find an element in an array that satisfies a condition?",
    answer: "find()",
    options: ["find()", "filter()", "map()", "reduce()"],
  },
  {
    numb: 62,
    question: "What is the purpose of Symbol in ES6?",
    answer: "To create unique identifiers",
    options: [
      "To create unique identifiers",
      "To create private variables",
      "To create arrays",
      "To create classes",
    ],
  },
  {
    numb: 63,
    question: "Which of the following is NOT an ES6 feature?",
    answer: "XMLHttpRequest",
    options: ["let", "const", "XMLHttpRequest", "Arrow Functions"],
  },
  {
    numb: 64,
    question: "How do you check if a value is NaN in ES6?",
    answer: "isNaN(value)",
    options: [
      "isNaN(value)",
      "value.isNaN()",
      "typeof value === 'NaN'",
      "value == NaN",
    ],
  },
  {
    numb: 65,
    question: "Which of the following is a valid way to use the filter method?",
    answer: "arr.filter(x => x > 2)",
    options: [
      "arr.filter(x => x > 2)",
      "arr.filter(x, x > 2)",
      "arr.filter(x > 2)",
      "arr.filter(x => { x > 2 })",
    ],
  },
  {
    numb: 66,
    question: "What is the output of: [1,2,3].map(x => x + 1)?",
    answer: "[2, 3, 4]",
    options: ["[2, 3, 4]", "[1, 2, 3]", "[1, 3, 4]", "[2, 4, 6]"],
  },
  {
    numb: 67,
    question: "Which of the following is NOT a valid string method in ES6?",
    answer: "splitChar()",
    options: ["split()", "splitChar()", "includes()", "startsWith()"],
  },
  {
    numb: 68,
    question: "How do you check if a string includes a substring in ES6?",
    answer: "str.includes('sub')",
    options: [
      "str.includes('sub')",
      "str.has('sub')",
      "str.contains('sub')",
      "str.indexOf('sub') > 0",
    ],
  },
  {
    numb: 69,
    question: "Which of the following is a valid way to use the map method?",
    answer: "arr.map(x => x * 2)",
    options: [
      "arr.map(x => x * 2)",
      "arr.map(x, x * 2)",
      "arr.map(x * 2)",
      "arr.map(x => { x * 2 })",
    ],
  },
  {
    numb: 70,
    question: "What is the output of: [1,2,3].findIndex(x => x === 2)?",
    answer: "1",
    options: ["1", "2", "0", "-1"],
  },
  {
    numb: 71,
    question: "Which of the following is NOT a valid object method in ES6?",
    answer: "Object.merge()",
    options: [
      "Object.assign()",
      "Object.keys()",
      "Object.values()",
      "Object.merge()",
    ],
  },
  {
    numb: 72,
    question: "How do you check if a variable is undefined in ES6?",
    answer: "typeof x === 'undefined'",
    options: [
      "typeof x === 'undefined'",
      "x === undefined",
      "x == null",
      "typeof x == undefined",
    ],
  },
  {
    numb: 73,
    question: "Which of the following is a valid way to use the reduce method?",
    answer: "arr.reduce((a, b) => a + b, 0)",
    options: [
      "arr.reduce((a, b) => a + b, 0)",
      "arr.reduce(a, b => a + b, 0)",
      "arr.reduce((a, b), a + b, 0)",
      "arr.reduce(a, b, a + b, 0)",
    ],
  },
  {
    numb: 74,
    question: "What is the output of: [1,2,3].some(x => x < 0)?",
    answer: "false",
    options: ["false", "true", "undefined", "null"],
  },
  {
    numb: 75,
    question: "Which of the following is a valid way to use the every method?",
    answer: "arr.every(x => x > 0)",
    options: [
      "arr.every(x => x > 0)",
      "arr.every(x, x > 0)",
      "arr.every(x > 0)",
      "arr.every(x => { x > 0 })",
    ],
  },
  {
    numb: 76,
    question: "How do you check if a value is finite in ES6?",
    answer: "isFinite(value)",
    options: [
      "isFinite(value)",
      "value.isFinite()",
      "typeof value === 'finite'",
      "value == finite",
    ],
  },
  {
    numb: 77,
    question: "Which of the following is a valid way to use the find method?",
    answer: "arr.find(x => x === 2)",
    options: [
      "arr.find(x => x === 2)",
      "arr.find(x, x === 2)",
      "arr.find(x === 2)",
      "arr.find(x => { x === 2 })",
    ],
  },
  {
    numb: 78,
    question: "What is the output of: [1,2,3].includes(2)?",
    answer: "true",
    options: ["true", "false", "undefined", "null"],
  },
  {
    numb: 79,
    question: "Which of the following is NOT a valid string method in ES6?",
    answer: "splitChar()",
    options: ["split()", "splitChar()", "includes()", "startsWith()"],
  },
  {
    numb: 80,
    question:
      "How do you check if a string starts with a specific substring in ES6?",
    answer: "str.startsWith('sub')",
    options: [
      "str.startsWith('sub')",
      "str.has('sub')",
      "str.contains('sub')",
      "str.indexOf('sub') == 0",
    ],
  },
  {
    numb: 81,
    question: "Which of the following is a valid way to use the sort method?",
    answer: "arr.sort((a, b) => a - b)",
    options: [
      "arr.sort((a, b) => a - b)",
      "arr.sort(a, b => a - b)",
      "arr.sort((a, b), a - b)",
      "arr.sort(a, b, a - b)",
    ],
  },
  {
    numb: 82,
    question: "What is the output of: [1,2,3].join('-')?",
    answer: "'1-2-3'",
    options: ["'1-2-3'", "'1,2,3'", "'123'", "'1 2 3'"],
  },
  {
    numb: 83,
    question: "Which of the following is a valid way to use the push method?",
    answer: "arr.push(4)",
    options: [
      "arr.push(4)",
      "arr.push = 4",
      "arr.push(4, 5, 6)",
      "arr.push([4])",
    ],
  },
  {
    numb: 84,
    question: "How do you remove the last element from an array in ES6?",
    answer: "arr.pop()",
    options: [
      "arr.pop()",
      "arr.removeLast()",
      "arr.delete()",
      "arr.splice(-1)",
    ],
  },
  {
    numb: 85,
    question:
      "Which of the following is a valid way to use the unshift method?",
    answer: "arr.unshift(0)",
    options: [
      "arr.unshift(0)",
      "arr.unshift = 0",
      "arr.unshift([0])",
      "arr.unshift(0, 1)",
    ],
  },
  {
    numb: 86,
    question: "What is the output of: [1,2,3].shift()?",
    answer: "1",
    options: ["1", "2", "3", "undefined"],
  },
  {
    numb: 87,
    question: "Which of the following is a valid way to use the splice method?",
    answer: "arr.splice(1, 1)",
    options: [
      "arr.splice(1, 1)",
      "arr.splice(1)",
      "arr.splice([1, 1])",
      "arr.splice(1, 1, 2)",
    ],
  },
  {
    numb: 88,
    question: "How do you check if an array is empty in ES6?",
    answer: "arr.length === 0",
    options: ["arr.length === 0", "arr.isEmpty()", "arr == []", "arr === []"],
  },
  {
    numb: 89,
    question: "Which of the following is a valid way to use the concat method?",
    answer: "arr1.concat(arr2)",
    options: [
      "arr1.concat(arr2)",
      "arr1.concat = arr2",
      "arr1.concat([arr2])",
      "arr1.concat(arr2, arr3)",
    ],
  },
  {
    numb: 90,
    question: "What is the output of: [1,2,3].reverse().join('')?",
    answer: "'321'",
    options: ["'321'", "'123'", "'3,2,1'", "'1,2,3'"],
  },
  {
    numb: 91,
    question:
      "Which of the following is a valid way to use the findIndex method?",
    answer: "arr.findIndex(x => x === 2)",
    options: [
      "arr.findIndex(x => x === 2)",
      "arr.findIndex(x, x === 2)",
      "arr.findIndex(x === 2)",
      "arr.findIndex(x => { x === 2 })",
    ],
  },
  {
    numb: 92,
    question: "How do you check if an array contains a value in ES6?",
    answer: "arr.includes(value)",
    options: [
      "arr.includes(value)",
      "arr.has(value)",
      "arr.contains(value)",
      "arr.indexOf(value) > 0",
    ],
  },
  {
    numb: 93,
    question:
      "Which of the following is a valid way to use the forEach method?",
    answer: "arr.forEach(x => console.log(x))",
    options: [
      "arr.forEach(x => console.log(x))",
      "arr.forEach(x, console.log(x))",
      "arr.forEach(console.log(x))",
      "arr.forEach(x => { console.log(x) })",
    ],
  },
  {
    numb: 94,
    question: "What is the output of: [1,2,3].map(x => x * x)?",
    answer: "[1, 4, 9]",
    options: ["[1, 4, 9]", "[1, 2, 3]", "[2, 4, 6]", "[1, 8, 27]"],
  },
  {
    numb: 95,
    question: "Which of the following is a valid way to use the filter method?",
    answer: "arr.filter(x => x % 2 === 0)",
    options: [
      "arr.filter(x => x % 2 === 0)",
      "arr.filter(x, x % 2 === 0)",
      "arr.filter(x % 2 === 0)",
      "arr.filter(x => { x % 2 === 0 })",
    ],
  },
  {
    numb: 96,
    question:
      "How do you check if all elements in an array are positive in ES6?",
    answer: "arr.every(x => x > 0)",
    options: [
      "arr.every(x => x > 0)",
      "arr.every(x, x > 0)",
      "arr.every(x > 0)",
      "arr.every(x => { x > 0 })",
    ],
  },
  {
    numb: 97,
    question: "Which of the following is a valid way to use the some method?",
    answer: "arr.some(x => x < 0)",
    options: [
      "arr.some(x => x < 0)",
      "arr.some(x, x < 0)",
      "arr.some(x < 0)",
      "arr.some(x => { x < 0 })",
    ],
  },
  {
    numb: 98,
    question: "What is the output of: [1,2,3].reduce((a, b) => a * b, 1)?",
    answer: "6",
    options: ["6", "1", "2", "3"],
  },
  {
    numb: 99,
    question:
      "Which of the following is a valid way to use the includes method?",
    answer: "arr.includes(2)",
    options: [
      "arr.includes(2)",
      "arr.includes = 2",
      "arr.includes([2])",
      "arr.includes(2, 3)",
    ],
  },
  {
    numb: 100,
    question: "How do you check if an array contains only numbers in ES6?",
    answer: "arr.every(x => typeof x === 'number')",
    options: [
      "arr.every(x => typeof x === 'number')",
      "arr.every(x, typeof x === 'number')",
      "arr.every(typeof x === 'number')",
      "arr.every(x => { typeof x === 'number' })",
    ],
  },
];

let questions2 = [
  {
    numb: 1,
    question: "What is 'state' in React?",
    answer: "A built-in object to store component data",
    options: [
      "A built-in object to store component data",
      "A CSS property",
      "A JavaScript variable outside React",
      "A function to fetch data",
    ],
  },
  {
    numb: 2,
    question: "Which hook is used to add state to a functional component?",
    answer: "useState",
    options: ["useState", "useEffect", "useContext", "useReducer"],
  },
  {
    numb: 3,
    question: "What does useState return?",
    answer: "An array with the state value and a setter function",
    options: [
      "An array with the state value and a setter function",
      "A single value",
      "A function only",
      "A promise",
    ],
  },
  {
    numb: 4,
    question: "How do you initialize state with useState?",
    answer: "const [count, setCount] = useState(0);",
    options: [
      "const [count, setCount] = useState(0);",
      "let count = useState(0);",
      "useState(count, 0);",
      "setCount = useState(0);",
    ],
  },
  {
    numb: 5,
    question: "How do you update state in React?",
    answer: "By calling the setter function returned by useState",
    options: [
      "By calling the setter function returned by useState",
      "By reassigning the state variable",
      "By using setTimeout",
      "By using a global variable",
    ],
  },
  {
    numb: 6,
    question: "What happens when you update state in React?",
    answer: "The component re-renders",
    options: [
      "The component re-renders",
      "Nothing happens",
      "The page reloads",
      "The state is lost",
    ],
  },
  {
    numb: 7,
    question: "Is state in React mutable or immutable?",
    answer: "Immutable",
    options: ["Immutable", "Mutable", "Both", "None"],
  },
  {
    numb: 9,
    question: "How do you update state based on the previous state?",
    answer: "Pass a function to the setter: setCount(prev => prev + 1)",
    options: [
      "Pass a function to the setter: setCount(prev => prev + 1)",
      "Directly increment the variable",
      "Use setTimeout",
      "Call useEffect",
    ],
  },
  {
    numb: 10,
    question: "Can you have multiple useState hooks in one component?",
    answer: "Yes",
    options: [
      "Yes",
      "No",
      "Only in class components",
      "Only in functional components",
    ],
  },
  // 40 more questions about using state in React below
  {
    numb: 11,
    question:
      "What is the default value of useState() if no argument is passed?",
    answer: "undefined",
    options: ["undefined", "null", "0", "''"],
  },
  {
    numb: 12,
    question: "How do you reset state to its initial value?",
    answer: "Call the setter with the initial value",
    options: [
      "Call the setter with the initial value",
      "Call useState again",
      "Reload the page",
      "Call useEffect",
    ],
  },
  {
    numb: 13,
    question: "What is the recommended way to store objects in state?",
    answer: "Use useState with an object as the initial value",
    options: [
      "Use useState with an object as the initial value",
      "Use a global variable",
      "Use useRef",
      "Use useEffect",
    ],
  },
  {
    numb: 14,
    question: "How do you update a property of an object in state?",
    answer: "Use the spread operator to copy and update the property",
    options: [
      "Use the spread operator to copy and update the property",
      "Directly assign the property",
      "Call setState with the property only",
      "Use useEffect",
    ],
  },
  {
    numb: 15,
    question: "What is the correct way to update an array in state?",
    answer: "Use the setter with a new array (e.g., [...arr, newItem])",
    options: [
      "Use the setter with a new array (e.g., [...arr, newItem])",
      "Push to the array directly",
      "Call setState with the item only",
      "Use useEffect",
    ],
  },
  {
    numb: 16,
    question: "What is the main difference between props and state?",
    answer:
      "Props are passed from parent, state is managed within the component",
    options: [
      "Props are passed from parent, state is managed within the component",
      "State is passed from parent, props are managed within the component",
      "Both are the same",
      "Props are only for class components",
    ],
  },
  {
    numb: 17,
    question: "How do you toggle a boolean value in state?",
    answer: "setFlag(flag => !flag)",
    options: [
      "setFlag(flag => !flag)",
      "flag = !flag",
      "setFlag(!flag)",
      "setFlag(flag)",
    ],
  },
  {
    numb: 18,
    question:
      "What is the effect of calling the setter with the same value as the current state?",
    answer: "No re-render occurs",
    options: [
      "No re-render occurs",
      "Component re-renders",
      "State resets",
      "Error is thrown",
    ],
  },
  {
    numb: 19,
    question: "Can you use state in class components?",
    answer: "Yes, with this.state and this.setState",
    options: [
      "Yes, with this.state and this.setState",
      "No",
      "Only with useState",
      "Only in functional components",
    ],
  },
  {
    numb: 20,
    question: "What is the initial value of state in a class component?",
    answer: "Defined in the constructor",
    options: [
      "Defined in the constructor",
      "Defined in render",
      "Defined in useEffect",
      "Defined in componentDidMount",
    ],
  },
  // 30 more questions about using state in React below
  {
    numb: 21,
    question: "How do you access state in a class component?",
    answer: "this.state.propertyName",
    options: [
      "this.state.propertyName",
      "state.propertyName",
      "this.propertyName",
      "state[propertyName]",
    ],
  },
  {
    numb: 22,
    question: "How do you update state in a class component?",
    answer: "this.setState({ key: value })",
    options: [
      "this.setState({ key: value })",
      "this.state.key = value",
      "setState(key, value)",
      "updateState(key, value)",
    ],
  },
  {
    numb: 23,
    question:
      "What is the recommended way to update state based on previous state in a class component?",
    answer: "Pass a function to setState",
    options: [
      "Pass a function to setState",
      "Directly assign the value",
      "Use useEffect",
      "Call useState",
    ],
  },
  {
    numb: 24,
    question: "What is the effect of calling setState in a class component?",
    answer: "Triggers a re-render",
    options: [
      "Triggers a re-render",
      "Does nothing",
      "Throws an error",
      "Reloads the page",
    ],
  },
  {
    numb: 25,
    question: "Can you use useState in a class component?",
    answer: "No",
    options: ["No", "Yes", "Only in constructor", "Only in render"],
  },
  {
    numb: 26,
    question: "What is the main advantage of using state in React?",
    answer: "It allows components to be dynamic and interactive",
    options: [
      "It allows components to be dynamic and interactive",
      "It makes code slower",
      "It prevents re-renders",
      "It is required for all components",
    ],
  },
  {
    numb: 27,
    question: "How do you pass state from a parent to a child component?",
    answer: "Via props",
    options: ["Via props", "Via useState", "Via useEffect", "Via context"],
  },
  {
    numb: 28,
    question: "What is a controlled component in React?",
    answer: "A component whose input value is driven by state",
    options: [
      "A component whose input value is driven by state",
      "A component with no state",
      "A component with only props",
      "A component that is not rendered",
    ],
  },
  {
    numb: 29,
    question: "How do you make an input field controlled?",
    answer: "Bind its value to state and update state on change",
    options: [
      "Bind its value to state and update state on change",
      "Use defaultValue only",
      "Do not use state",
      "Use uncontrolled input",
    ],
  },
  {
    numb: 30,
    question: "What is the purpose of the second element returned by useState?",
    answer: "To update the state value",
    options: [
      "To update the state value",
      "To read the state value",
      "To reset the state",
      "To remove the state",
    ],
  },
  // 20 more questions about using state in React below
  {
    numb: 31,
    question: "How do you update state for a specific item in an array?",
    answer: "Map over the array and update the item by id or index",
    options: [
      "Map over the array and update the item by id or index",
      "Push to the array",
      "Use setTimeout",
      "Use useEffect",
    ],
  },
  {
    numb: 32,
    question: "What is the effect of calling setState asynchronously?",
    answer: "State updates may be batched and not immediately available",
    options: [
      "State updates may be batched and not immediately available",
      "State updates are always synchronous",
      "State is lost",
      "Component unmounts",
    ],
  },
  {
    numb: 33,
    question: "How do you clear an array in state?",
    answer: "Set state to an empty array",
    options: [
      "Set state to an empty array",
      "Call clear()",
      "Use pop()",
      "Use shift()",
    ],
  },
  {
    numb: 34,
    question:
      "What is the effect of calling setState with an object that is identical to the current state?",
    answer: "No re-render occurs",
    options: [
      "No re-render occurs",
      "Component re-renders",
      "State resets",
      "Error is thrown",
    ],
  },
  {
    numb: 35,
    question: "How do you update nested state in React?",
    answer: "Use the spread operator to copy and update nested properties",
    options: [
      "Use the spread operator to copy and update nested properties",
      "Directly assign nested property",
      "Call setState with the property only",
      "Use useEffect",
    ],
  },
  {
    numb: 36,
    question: "What is the main difference between useState and useReducer?",
    answer: "useReducer is for more complex state logic",
    options: [
      "useReducer is for more complex state logic",
      "useState is for objects only",
      "useReducer is for arrays only",
      "There is no difference",
    ],
  },
  {
    numb: 37,
    question: "How do you update state in response to user input?",
    answer: "Call the setter in the input's onChange handler",
    options: [
      "Call the setter in the input's onChange handler",
      "Call useEffect",
      "Call useRef",
      "Call useContext",
    ],
  },
  {
    numb: 38,
    question: "What is the effect of calling setState multiple times in a row?",
    answer: "Updates may be batched and only the last one applied",
    options: [
      "Updates may be batched and only the last one applied",
      "All updates are applied immediately",
      "State is lost",
      "Component unmounts",
    ],
  },
  {
    numb: 39,
    question: "How do you update state based on a form submission?",
    answer: "Call the setter in the form's onSubmit handler",
    options: [
      "Call the setter in the form's onSubmit handler",
      "Call useEffect",
      "Call useRef",
      "Call useContext",
    ],
  },
  {
    numb: 40,
    question: "What is the effect of calling setState with a function?",
    answer: "It receives the previous state as an argument",
    options: [
      "It receives the previous state as an argument",
      "It resets the state",
      "It removes the state",
      "It throws an error",
    ],
  },
  {
    numb: 41,
    question: "How do you update state for a specific property in an object?",
    answer: "Use the spread operator to copy and update the property",
    options: [
      "Use the spread operator to copy and update the property",
      "Directly assign the property",
      "Call setState with the property only",
      "Use useEffect",
    ],
  },
  {
    numb: 42,
    question: "What is the effect of calling setState with a callback?",
    answer:
      "The callback runs after the state is updated and the component re-renders",
    options: [
      "The callback runs after the state is updated and the component re-renders",
      "The callback runs before the state updates",
      "The callback is ignored",
      "The callback runs only once",
    ],
  },
  {
    numb: 43,
    question: "How do you update state in a parent component from a child?",
    answer: "Pass a function from the parent as a prop to the child",
    options: [
      "Pass a function from the parent as a prop to the child",
      "Call useState in the child",
      "Call setState in the child",
      "Use useEffect",
    ],
  },
  {
    numb: 44,
    question: "What is the effect of calling setState in useEffect?",
    answer:
      "It can cause a re-render and possibly an infinite loop if not handled carefully",
    options: [
      "It can cause a re-render and possibly an infinite loop if not handled carefully",
      "It does nothing",
      "It throws an error",
      "It is ignored",
    ],
  },
  {
    numb: 45,
    question: "How do you update state in response to a timer?",
    answer: "Call the setter in the timer's callback",
    options: [
      "Call the setter in the timer's callback",
      "Call useEffect",
      "Call useRef",
      "Call useContext",
    ],
  },
  {
    numb: 46,
    question: "What is the effect of calling setState in a loop?",
    answer: "It can cause performance issues and unnecessary re-renders",
    options: [
      "It can cause performance issues and unnecessary re-renders",
      "It is recommended",
      "It is ignored",
      "It throws an error",
    ],
  },
  {
    numb: 47,
    question: "How do you update state in response to a fetch request?",
    answer: "Call the setter in the fetch's then/catch or async/await block",
    options: [
      "Call the setter in the fetch's then/catch or async/await block",
      "Call useEffect",
      "Call useRef",
      "Call useContext",
    ],
  },
  {
    numb: 48,
    question:
      "What is the effect of calling setState with a non-primitive value?",
    answer: "You must provide a new reference for React to detect the change",
    options: [
      "You must provide a new reference for React to detect the change",
      "React always detects changes",
      "It throws an error",
      "It is ignored",
    ],
  },
  {
    numb: 49,
    question: "How do you update state in response to a prop change?",
    answer: "Use useEffect to watch the prop and update state",
    options: [
      "Use useEffect to watch the prop and update state",
      "Call useState",
      "Call setState in the parent",
      "Use useRef",
    ],
  },
  {
    numb: 50,
    question: "What is the main rule of using state in React?",
    answer: "Never mutate state directly; always use the setter",
    options: [
      "Never mutate state directly; always use the setter",
      "Mutate state directly",
      "Use global variables",
      "Use setTimeout",
    ],
  },
];
let questions3 = [
  {
    numb: 1,
    question: "What is an event in JavaScript?",
    answer: "An action or occurrence detected by the browser",
    options: [
      "An action or occurrence detected by the browser",
      "A CSS property",
      "A React hook",
      "A variable declaration",
    ],
  },
  {
    numb: 2,
    question: "Which method is used to add an event listener in JavaScript?",
    answer: "addEventListener",
    options: ["addEventListener", "onEvent", "attachEvent", "listenEvent"],
  },
  {
    numb: 3,
    question:
      "What is the correct syntax to listen for a click event on a button with id 'myBtn'?",
    answer:
      "document.getElementById('myBtn').addEventListener('click', handler)",
    options: [
      "document.getElementById('myBtn').addEventListener('click', handler)",
      "document.getElement('myBtn').onClick(handler)",
      "myBtn.addEvent('click', handler)",
      "addEventListener('myBtn', 'click', handler)",
    ],
  },
  {
    numb: 4,
    question: "Which event is triggered when a user types in an input field?",
    answer: "input",
    options: ["input", "change", "keydown", "submit"],
  },
  {
    numb: 5,
    question: "What does event.preventDefault() do?",
    answer: "Prevents the default browser action",
    options: [
      "Prevents the default browser action",
      "Stops event propagation",
      "Removes the event listener",
      "Triggers the event again",
    ],
  },
  {
    numb: 6,
    question: "Which event is triggered when a form is submitted?",
    answer: "submit",
    options: ["submit", "change", "input", "reset"],
  },
  {
    numb: 7,
    question: "How do you stop an event from bubbling up the DOM tree?",
    answer: "event.stopPropagation()",
    options: [
      "event.stopPropagation()",
      "event.preventDefault()",
      "event.stopBubble()",
      "event.cancelBubble()",
    ],
  },
  {
    numb: 8,
    question:
      "Which event is triggered when a user moves the mouse over an element?",
    answer: "mouseover",
    options: ["mouseover", "mouseenter", "mousemove", "hover"],
  },
  {
    numb: 9,
    question: "What is the event object in JavaScript?",
    answer: "An object containing information about the event",
    options: [
      "An object containing information about the event",
      "A function to trigger events",
      "A DOM element",
      "A CSS class",
    ],
  },
  {
    numb: 10,
    question: "Which event is triggered when a user releases a key?",
    answer: "keyup",
    options: ["keyup", "keydown", "keypress", "input"],
  },
  // 40 more questions about using events below
  {
    numb: 11,
    question:
      "Which event is triggered when a checkbox is checked or unchecked?",
    answer: "change",
    options: ["change", "input", "click", "toggle"],
  },
  {
    numb: 12,
    question: "How do you remove an event listener in JavaScript?",
    answer: "removeEventListener",
    options: [
      "removeEventListener",
      "deleteEventListener",
      "offEventListener",
      "detachEventListener",
    ],
  },
  {
    numb: 13,
    question: "Which event is triggered when a user double-clicks an element?",
    answer: "dblclick",
    options: ["dblclick", "doubleclick", "click", "mousedown"],
  },
  {
    numb: 14,
    question: "What is event delegation?",
    answer:
      "Using a single event listener on a parent to handle events for children",
    options: [
      "Using a single event listener on a parent to handle events for children",
      "Assigning events to every child",
      "Removing all event listeners",
      "Using only inline events",
    ],
  },
  {
    numb: 15,
    question: "Which event is triggered when a user scrolls a page?",
    answer: "scroll",
    options: ["scroll", "move", "resize", "drag"],
  },
  {
    numb: 16,
    question: "Which event is triggered when a user resizes the window?",
    answer: "resize",
    options: ["resize", "change", "move", "scroll"],
  },
  {
    numb: 17,
    question:
      "Which event is triggered when a user presses a mouse button down?",
    answer: "mousedown",
    options: ["mousedown", "mouseup", "click", "mouseenter"],
  },
  {
    numb: 18,
    question: "Which event is triggered when a user leaves an input field?",
    answer: "blur",
    options: ["blur", "focus", "change", "input"],
  },
  {
    numb: 19,
    question: "Which event is triggered when a user focuses on an input field?",
    answer: "focus",
    options: ["focus", "blur", "input", "select"],
  },
  {
    numb: 20,
    question:
      "Which event is triggered when a user selects text in an input field?",
    answer: "select",
    options: ["select", "input", "focus", "change"],
  },
  // 30 more questions about using events below
  {
    numb: 21,
    question: "Which event is triggered when a user right-clicks an element?",
    answer: "contextmenu",
    options: ["contextmenu", "rightclick", "mousedown", "mouseup"],
  },
  {
    numb: 22,
    question: "Which event is triggered when a user drags an element?",
    answer: "drag",
    options: ["drag", "drop", "dragstart", "dragend"],
  },
  {
    numb: 23,
    question: "Which event is triggered when a user drops an element?",
    answer: "drop",
    options: ["drop", "drag", "dragover", "dragend"],
  },
  {
    numb: 24,
    question:
      "Which event is triggered when a user moves a dragged element over a valid drop target?",
    answer: "dragover",
    options: ["dragover", "drag", "drop", "dragenter"],
  },
  {
    numb: 25,
    question: "Which event is triggered when a user presses a key?",
    answer: "keydown",
    options: ["keydown", "keyup", "keypress", "input"],
  },
  {
    numb: 26,
    question: "Which event is triggered when a user hovers over an element?",
    answer: "mouseenter",
    options: ["mouseenter", "mouseover", "hover", "mousemove"],
  },
  {
    numb: 27,
    question:
      "Which event is triggered when a user leaves an element with the mouse?",
    answer: "mouseleave",
    options: ["mouseleave", "mouseout", "blur", "mouseleaveevent"],
  },
  {
    numb: 28,
    question: "Which event is triggered when a user scrolls inside a div?",
    answer: "scroll",
    options: ["scroll", "move", "resize", "drag"],
  },
  {
    numb: 29,
    question: "Which event is triggered when a user pastes text into an input?",
    answer: "paste",
    options: ["paste", "input", "change", "copy"],
  },
  {
    numb: 30,
    question: "Which event is triggered when a user copies text?",
    answer: "copy",
    options: ["copy", "paste", "cut", "input"],
  },
  // 20 more questions about using events below
  {
    numb: 31,
    question: "Which event is triggered when a user cuts text?",
    answer: "cut",
    options: ["cut", "copy", "paste", "input"],
  },
  {
    numb: 32,
    question: "Which event is triggered when a user presses the Escape key?",
    answer: "keydown",
    options: ["keydown", "keyup", "keypress", "input"],
  },
  {
    numb: 33,
    question:
      "Which event is triggered when a user presses the Enter key in a form?",
    answer: "submit",
    options: ["submit", "keydown", "keyup", "input"],
  },
  {
    numb: 34,
    question: "Which event is triggered when a user hovers out of an element?",
    answer: "mouseout",
    options: ["mouseout", "mouseleave", "blur", "mouseoutEvent"],
  },
  {
    numb: 35,
    question: "Which event is triggered when a user presses a key repeatedly?",
    answer: "keypress",
    options: ["keypress", "keydown", "keyup", "input"],
  },
  {
    numb: 36,
    question:
      "Which event is triggered when a user scrolls to the bottom of a page?",
    answer: "scroll",
    options: ["scroll", "move", "resize", "drag"],
  },
  {
    numb: 37,
    question: "Which event is triggered when a user resizes a textarea?",
    answer: "resize",
    options: ["resize", "change", "input", "scroll"],
  },
  {
    numb: 38,
    question: "Which event is triggered when a user presses the Tab key?",
    answer: "keydown",
    options: ["keydown", "keyup", "keypress", "input"],
  },
  {
    numb: 39,
    question: "Which event is triggered when a user presses the Backspace key?",
    answer: "keydown",
    options: ["keydown", "keyup", "keypress", "input"],
  },
  {
    numb: 40,
    question: "Which event is triggered when a user presses the Space key?",
    answer: "keydown",
    options: ["keydown", "keyup", "keypress", "input"],
  },
  {
    numb: 41,
    question: "Which event is triggered when a user presses the Shift key?",
    answer: "keydown",
    options: ["keydown", "keyup", "keypress", "input"],
  },
  {
    numb: 42,
    question: "Which event is triggered when a user presses the Control key?",
    answer: "keydown",
    options: ["keydown", "keyup", "keypress", "input"],
  },
  {
    numb: 43,
    question: "Which event is triggered when a user presses the Alt key?",
    answer: "keydown",
    options: ["keydown", "keyup", "keypress", "input"],
  },
  {
    numb: 44,
    question:
      "Which event is triggered when a user presses the Meta (Windows/Command) key?",
    answer: "keydown",
    options: ["keydown", "keyup", "keypress", "input"],
  },
  {
    numb: 45,
    question: "Which event is triggered when a user presses any arrow key?",
    answer: "keydown",
    options: ["keydown", "keyup", "keypress", "input"],
  },
  {
    numb: 46,
    question: "Which event is triggered when a user presses the Delete key?",
    answer: "keydown",
    options: ["keydown", "keyup", "keypress", "input"],
  },
  {
    numb: 47,
    question: "Which event is triggered when a user presses the Home key?",
    answer: "keydown",
    options: ["keydown", "keyup", "keypress", "input"],
  },
  {
    numb: 48,
    question: "Which event is triggered when a user presses the End key?",
    answer: "keydown",
    options: ["keydown", "keyup", "keypress", "input"],
  },
  {
    numb: 49,
    question: "Which event is triggered when a user presses the Page Up key?",
    answer: "keydown",
    options: ["keydown", "keyup", "keypress", "input"],
  },
  {
    numb: 50,
    question: "Which event is triggered when a user presses the Page Down key?",
    answer: "keydown",
    options: ["keydown", "keyup", "keypress", "input"],
  },
];

let questions4 = [
  {
    numb: 1,
    question: "What is a controlled component in React forms?",
    answer: "A component whose input value is driven by state",
    options: [
      "A component whose input value is driven by state",
      "A component with no state",
      "A component with only props",
      "A component that is not rendered",
    ],
  },
  {
    numb: 2,
    question: "Which event is used to detect changes in a text input in React?",
    answer: "onChange",
    options: ["onChange", "onInput", "onKeyUp", "onSubmit"],
  },
  {
    numb: 3,
    question: "How do you access the value of a controlled input in React?",
    answer: "From the component's state",
    options: [
      "From the component's state",
      "From the DOM directly",
      "From a global variable",
      "From a prop only",
    ],
  },
  {
    numb: 4,
    question: "What is the purpose of the onSubmit event in a React form?",
    answer: "To handle form submission",
    options: [
      "To handle form submission",
      "To handle input changes",
      "To handle button clicks",
      "To handle validation only",
    ],
  },
  {
    numb: 5,
    question: "How do you prevent the default form submission in React?",
    answer: "Call event.preventDefault() in the onSubmit handler",
    options: [
      "Call event.preventDefault() in the onSubmit handler",
      "Return false from the handler",
      "Call event.stopPropagation()",
      "Remove the action attribute",
    ],
  },
  {
    numb: 6,
    question:
      "How do you update state when an input changes in a controlled component?",
    answer: "Call the setter in the onChange handler",
    options: [
      "Call the setter in the onChange handler",
      "Call useEffect",
      "Call useRef",
      "Call useContext",
    ],
  },
  {
    numb: 7,
    question: "What is an uncontrolled component in React?",
    answer: "A component that stores its own state in the DOM",
    options: [
      "A component that stores its own state in the DOM",
      "A component with no state",
      "A component with only props",
      "A component that is not rendered",
    ],
  },
  {
    numb: 8,
    question: "Which React hook is commonly used for form state?",
    answer: "useState",
    options: ["useState", "useEffect", "useRef", "useReducer"],
  },
  {
    numb: 9,
    question: "How do you get the value of an uncontrolled input in React?",
    answer: "Use a ref to access the DOM node",
    options: [
      "Use a ref to access the DOM node",
      "Use state",
      "Use props",
      "Use context",
    ],
  },
  {
    numb: 10,
    question: "What is the recommended way to validate form input in React?",
    answer: "Check values in the onSubmit handler or onChange handler",
    options: [
      "Check values in the onSubmit handler or onChange handler",
      "Use HTML5 validation only",
      "Use CSS",
      "Use refs only",
    ],
  },
  // 40 more questions about forms in React below
  {
    numb: 11,
    question: "How do you reset a form in React?",
    answer: "Set state values to their initial values",
    options: [
      "Set state values to their initial values",
      "Call form.reset()",
      "Reload the page",
      "Call useEffect",
    ],
  },
  {
    numb: 12,
    question: "Which attribute is used to bind the value of an input to state?",
    answer: "value",
    options: ["value", "defaultValue", "checked", "bind"],
  },
  {
    numb: 13,
    question: "How do you handle checkbox state in a controlled component?",
    answer: "Bind checked to state and update onChange",
    options: [
      "Bind checked to state and update onChange",
      "Bind value to state",
      "Use defaultChecked only",
      "Use refs",
    ],
  },
  {
    numb: 14,
    question: "How do you handle radio button state in React?",
    answer: "Bind checked to state and update onChange",
    options: [
      "Bind checked to state and update onChange",
      "Bind value to state",
      "Use defaultChecked only",
      "Use refs",
    ],
  },
  {
    numb: 15,
    question: "How do you handle select dropdown state in React?",
    answer: "Bind value to state and update onChange",
    options: [
      "Bind value to state and update onChange",
      "Bind checked to state",
      "Use defaultValue only",
      "Use refs",
    ],
  },
  {
    numb: 16,
    question: "What is the default value of a controlled input if not set?",
    answer: "An empty string",
    options: ["An empty string", "undefined", "null", "0"],
  },
  {
    numb: 17,
    question: "How do you handle file input in React?",
    answer: "Use a ref to access the file input's files property",
    options: [
      "Use a ref to access the file input's files property",
      "Use state only",
      "Use value attribute",
      "Use checked attribute",
    ],
  },
  {
    numb: 18,
    question:
      "How do you prevent a form from submitting when pressing Enter in an input?",
    answer: "Call event.preventDefault() in the onKeyDown handler",
    options: [
      "Call event.preventDefault() in the onKeyDown handler",
      "Remove the onSubmit handler",
      "Use readOnly attribute",
      "Use defaultValue",
    ],
  },
  {
    numb: 19,
    question: "How do you display validation errors in a React form?",
    answer: "Render error messages conditionally based on state",
    options: [
      "Render error messages conditionally based on state",
      "Use alert() only",
      "Use refs",
      "Use CSS only",
    ],
  },
  {
    numb: 20,
    question: "How do you handle multiple inputs with one onChange handler?",
    answer:
      "Use the input's name attribute to update the correct state property",
    options: [
      "Use the input's name attribute to update the correct state property",
      "Use a separate handler for each input",
      "Use refs",
      "Use useEffect",
    ],
  },
  // 30 more questions about forms in React below
  {
    numb: 21,
    question: "How do you handle form submission asynchronously in React?",
    answer: "Use async/await or promises in the onSubmit handler",
    options: [
      "Use async/await or promises in the onSubmit handler",
      "Use setTimeout",
      "Use useEffect",
      "Use refs",
    ],
  },
  {
    numb: 22,
    question: "How do you disable a submit button until the form is valid?",
    answer: "Set the button's disabled prop based on validation state",
    options: [
      "Set the button's disabled prop based on validation state",
      "Use readOnly attribute",
      "Remove the button",
      "Use refs",
    ],
  },
  {
    numb: 23,
    question: "How do you handle form submission errors in React?",
    answer: "Store error messages in state and display them",
    options: [
      "Store error messages in state and display them",
      "Use alert() only",
      "Use refs",
      "Use CSS only",
    ],
  },
  {
    numb: 24,
    question: "How do you handle dynamic form fields in React?",
    answer: "Render fields based on state and update state on change",
    options: [
      "Render fields based on state and update state on change",
      "Use refs only",
      "Use defaultValue",
      "Use useEffect",
    ],
  },
  {
    numb: 25,
    question: "How do you handle form submission in a class component?",
    answer: "Define an onSubmit method and bind it in the constructor",
    options: [
      "Define an onSubmit method and bind it in the constructor",
      "Use useState",
      "Use useEffect",
      "Use refs",
    ],
  },
  {
    numb: 26,
    question: "How do you handle form reset in a class component?",
    answer: "Set state values to their initial values",
    options: [
      "Set state values to their initial values",
      "Call form.reset()",
      "Reload the page",
      "Call useEffect",
    ],
  },
  {
    numb: 27,
    question: "How do you handle form validation in a class component?",
    answer: "Check values in the onSubmit or onChange handler",
    options: [
      "Check values in the onSubmit or onChange handler",
      "Use HTML5 validation only",
      "Use CSS",
      "Use refs only",
    ],
  },
  {
    numb: 28,
    question: "How do you handle form submission in a functional component?",
    answer: "Define an onSubmit function and use useState for form data",
    options: [
      "Define an onSubmit function and use useState for form data",
      "Use useEffect only",
      "Use refs only",
      "Use defaultValue",
    ],
  },
  {
    numb: 29,
    question: "How do you handle form reset in a functional component?",
    answer: "Set state values to their initial values",
    options: [
      "Set state values to their initial values",
      "Call form.reset()",
      "Reload the page",
      "Call useEffect",
    ],
  },
  {
    numb: 30,
    question: "How do you handle form validation in a functional component?",
    answer: "Check values in the onSubmit or onChange handler",
    options: [
      "Check values in the onSubmit or onChange handler",
      "Use HTML5 validation only",
      "Use CSS",
      "Use refs only",
    ],
  },
  {
    numb: 31,
    question: "How do you handle nested form fields in React?",
    answer: "Use nested state objects and update them carefully",
    options: [
      "Use nested state objects and update them carefully",
      "Use flat state only",
      "Use refs only",
      "Use useEffect",
    ],
  },
  {
    numb: 32,
    question: "How do you handle form submission with file uploads?",
    answer: "Use FormData and send it via fetch or axios",
    options: [
      "Use FormData and send it via fetch or axios",
      "Use state only",
      "Use value attribute",
      "Use checked attribute",
    ],
  },
  {
    numb: 33,
    question: "How do you handle form submission with multiple steps?",
    answer: "Store step and form data in state and render fields conditionally",
    options: [
      "Store step and form data in state and render fields conditionally",
      "Use refs only",
      "Use defaultValue",
      "Use useEffect",
    ],
  },
  {
    numb: 34,
    question:
      "How do you handle form submission with validation and async requests?",
    answer: "Validate first, then send async request if valid",
    options: [
      "Validate first, then send async request if valid",
      "Send async request first",
      "Skip validation",
      "Use refs only",
    ],
  },
  {
    numb: 35,
    question:
      "How do you handle form submission with error handling and loading state?",
    answer: "Use state for errors and loading, update accordingly",
    options: [
      "Use state for errors and loading, update accordingly",
      "Use refs only",
      "Use defaultValue",
      "Use useEffect",
    ],
  },
  {
    numb: 36,
    question: "How do you handle form submission with redirect after success?",
    answer: "Use state to track success and navigate after submit",
    options: [
      "Use state to track success and navigate after submit",
      "Use refs only",
      "Use defaultValue",
      "Use useEffect",
    ],
  },
  {
    numb: 37,
    question: "How do you handle form submission with confirmation dialog?",
    answer: "Show a dialog before submitting and proceed if confirmed",
    options: [
      "Show a dialog before submitting and proceed if confirmed",
      "Submit without confirmation",
      "Use refs only",
      "Use defaultValue",
    ],
  },
  {
    numb: 38,
    question: "How do you handle form submission with API errors?",
    answer: "Catch errors and display messages using state",
    options: [
      "Catch errors and display messages using state",
      "Ignore errors",
      "Use refs only",
      "Use defaultValue",
    ],
  },
  {
    numb: 39,
    question: "How do you handle form submission with loading spinner?",
    answer: "Show spinner based on loading state",
    options: [
      "Show spinner based on loading state",
      "Show spinner always",
      "Use refs only",
      "Use defaultValue",
    ],
  },
  {
    numb: 40,
    question: "How do you handle form submission with success message?",
    answer: "Show message based on success state",
    options: [
      "Show message based on success state",
      "Show message always",
      "Use refs only",
      "Use defaultValue",
    ],
  },
  {
    numb: 41,
    question: "How do you handle form submission with reset after success?",
    answer: "Reset state after successful submit",
    options: [
      "Reset state after successful submit",
      "Reset always",
      "Use refs only",
      "Use defaultValue",
    ],
  },
  {
    numb: 42,
    question: "How do you handle form submission with validation errors?",
    answer: "Show errors and prevent submit if invalid",
    options: [
      "Show errors and prevent submit if invalid",
      "Submit anyway",
      "Use refs only",
      "Use defaultValue",
    ],
  },
  {
    numb: 43,
    question: "How do you handle form submission with server-side validation?",
    answer: "Send data to server and handle errors in response",
    options: [
      "Send data to server and handle errors in response",
      "Validate only on client",
      "Use refs only",
      "Use defaultValue",
    ],
  },
  {
    numb: 44,
    question: "How do you handle form submission with optimistic UI update?",
    answer: "Update UI before server response, then confirm or revert",
    options: [
      "Update UI before server response, then confirm or revert",
      "Wait for server response",
      "Use refs only",
      "Use defaultValue",
    ],
  },
  {
    numb: 45,
    question: "How do you handle form submission with debounce?",
    answer: "Delay submit until user stops typing",
    options: [
      "Delay submit until user stops typing",
      "Submit immediately",
      "Use refs only",
      "Use defaultValue",
    ],
  },
  {
    numb: 46,
    question: "How do you handle form submission with throttling?",
    answer: "Limit submit frequency using a timer",
    options: [
      "Limit submit frequency using a timer",
      "Submit as fast as possible",
      "Use refs only",
      "Use defaultValue",
    ],
  },
  {
    numb: 47,
    question: "How do you handle form submission with accessibility in mind?",
    answer: "Use proper labels, roles, and keyboard navigation",
    options: [
      "Use proper labels, roles, and keyboard navigation",
      "Ignore accessibility",
      "Use refs only",
      "Use defaultValue",
    ],
  },
  {
    numb: 48,
    question: "How do you handle form submission with custom input components?",
    answer: "Pass value and onChange as props to custom components",
    options: [
      "Pass value and onChange as props to custom components",
      "Use refs only",
      "Use defaultValue",
      "Use useEffect",
    ],
  },
  {
    numb: 49,
    question:
      "How do you handle form submission with multiple forms on one page?",
    answer: "Use separate state for each form",
    options: [
      "Use separate state for each form",
      "Use one state for all forms",
      "Use refs only",
      "Use defaultValue",
    ],
  },
  {
    numb: 50,
    question:
      "How do you handle form submission with dynamic validation rules?",
    answer: "Store rules in state and validate accordingly",
    options: [
      "Store rules in state and validate accordingly",
      "Use static rules only",
      "Use refs only",
      "Use defaultValue",
    ],
  },
];

let questions5 = [
  {
    numb: 1,
    question: "What is Next.js?",
    answer:
      "A React framework for server-side rendering and static site generation",
    options: [
      "A CSS framework",
      "A React framework for server-side rendering and static site generation",
      "A database library",
      "A Node.js server",
    ],
  },
  {
    numb: 2,
    question: "Which command is used to create a new Next.js app?",
    answer: "npx create-next-app",
    options: [
      "npx create-react-app",
      "npx create-next-app",
      "npm init next",
      "next new app",
    ],
  },
  {
    numb: 3,
    question: "What is the default directory for pages in a Next.js project?",
    answer: "pages",
    options: ["src", "components", "pages", "routes"],
  },
  {
    numb: 4,
    question: "How do you start the Next.js development server?",
    answer: "npm run dev",
    options: ["npm start", "npm run dev", "next serve", "yarn build"],
  },
  {
    numb: 5,
    question:
      "Which file is used to customize the HTML document structure in Next.js?",
    answer: "_document.js",
    options: ["_app.js", "_document.js", "index.js", "_html.js"],
  },
  {
    numb: 6,
    question: "How do you create a dynamic route in Next.js?",
    answer: "By using square brackets in the filename, e.g., [id].js",
    options: [
      "By using curly braces in the filename",
      "By using square brackets in the filename, e.g., [id].js",
      "By using parentheses in the filename",
      "By using angle brackets in the filename",
    ],
  },
  {
    numb: 7,
    question: "Which function is used for static generation in Next.js?",
    answer: "getStaticProps",
    options: [
      "getServerSideProps",
      "getStaticProps",
      "getInitialProps",
      "getProps",
    ],
  },
  {
    numb: 8,
    question: "Which function is used for server-side rendering in Next.js?",
    answer: "getServerSideProps",
    options: [
      "getServerSideProps",
      "getStaticProps",
      "getInitialProps",
      "getProps",
    ],
  },
  {
    numb: 9,
    question: "What is the default port for the Next.js development server?",
    answer: "3000",
    options: ["3000", "8080", "5000", "8000"],
  },
  {
    numb: 10,
    question:
      "Which file is used to override the default App component in Next.js?",
    answer: "_app.js",
    options: ["_document.js", "_app.js", "index.js", "_main.js"],
  },
  // ... 90 more questions will be added here ...
  {
    numb: 11,
    question: "Which method is used to fetch data at build time in Next.js?",
    answer: "getStaticProps",
    options: [
      "getServerSideProps",
      "getStaticProps",
      "getInitialProps",
      "fetchData",
    ],
  },
  {
    numb: 12,
    question: "Which method is used to fetch data on each request in Next.js?",
    answer: "getServerSideProps",
    options: [
      "getServerSideProps",
      "getStaticProps",
      "getInitialProps",
      "fetchData",
    ],
  },
  {
    numb: 13,
    question: "What is the purpose of getStaticPaths in Next.js?",
    answer: "To specify dynamic routes to pre-render at build time",
    options: [
      "To fetch data on the client",
      "To specify dynamic routes to pre-render at build time",
      "To handle API requests",
      "To override the App component",
    ],
  },
  {
    numb: 14,
    question: "Which folder is used for API routes in Next.js?",
    answer: "pages/api",
    options: ["api/pages", "pages/api", "src/api", "api/routes"],
  },
  {
    numb: 15,
    question: "How do you link between pages in Next.js?",
    answer: "Using the Link component from 'next/link'",
    options: [
      "Using the a tag",
      "Using the Link component from 'next/link'",
      "Using window.location",
      "Using Router.push",
    ],
  },
  {
    numb: 16,
    question: "What is the default export of a page in Next.js?",
    answer: "A React component",
    options: ["A function", "A React component", "A class", "A string"],
  },
  {
    numb: 17,
    question: "How do you add custom metadata to a page in Next.js?",
    answer: "Using the Head component from 'next/head'",
    options: [
      "Using the Meta component",
      "Using the Head component from 'next/head'",
      "Using the Document component",
      "Using the Helmet component",
    ],
  },
  {
    numb: 18,
    question: "Which command builds the Next.js app for production?",
    answer: "npm run build",
    options: [
      "npm run build",
      "npm run prod",
      "npm run start",
      "npm run deploy",
    ],
  },
  {
    numb: 19,
    question: "How do you serve a production build of Next.js?",
    answer: "npm start",
    options: ["npm run dev", "npm start", "npm run serve", "next serve"],
  },
  {
    numb: 20,
    question: "What is ISR (Incremental Static Regeneration) in Next.js?",
    answer:
      "Updating static pages after build without rebuilding the whole site",
    options: [
      "Incremental Server Rendering",
      "Updating static pages after build without rebuilding the whole site",
      "Instant Server Rendering",
      "Internal Static Routing",
    ],
  },
  // ... 80 more questions will be added here ...
  {
    numb: 21,
    question:
      "Which Next.js feature allows you to pre-render pages at request time?",
    answer: "Server-side rendering (SSR)",
    options: [
      "Static site generation (SSG)",
      "Server-side rendering (SSR)",
      "Client-side rendering (CSR)",
      "Incremental Static Regeneration (ISR)",
    ],
  },
  {
    numb: 22,
    question: "What is the main benefit of static site generation in Next.js?",
    answer: "Faster load times and better SEO",
    options: [
      "Faster load times and better SEO",
      "Easier deployment",
      "More dynamic content",
      "No need for a server",
    ],
  },
  {
    numb: 23,
    question: "How do you create an API endpoint in Next.js?",
    answer: "By adding a file to the pages/api directory",
    options: [
      "By adding a file to the pages/api directory",
      "By adding a file to the api/pages directory",
      "By adding a file to the src/api directory",
      "By adding a file to the api/routes directory",
    ],
  },
  {
    numb: 24,
    question: "Which lifecycle method is NOT available in Next.js pages?",
    answer: "componentDidMount",
    options: [
      "getStaticProps",
      "getServerSideProps",
      "componentDidMount",
      "getStaticPaths",
    ],
  },
  {
    numb: 25,
    question: "How do you add global CSS in Next.js?",
    answer: "Import the CSS file in _app.js",
    options: [
      "Import the CSS file in _app.js",
      "Import the CSS file in index.js",
      "Import the CSS file in _document.js",
      "Import the CSS file in every page",
    ],
  },
  {
    numb: 26,
    question:
      "What is the recommended way to fetch data client-side in Next.js?",
    answer: "Using React hooks like useEffect and fetch",
    options: [
      "Using getStaticProps",
      "Using getServerSideProps",
      "Using React hooks like useEffect and fetch",
      "Using getInitialProps",
    ],
  },
  {
    numb: 27,
    question:
      "Which file is used to customize the server-side rendered document markup?",
    answer: "_document.js",
    options: ["_app.js", "_document.js", "index.js", "_main.js"],
  },
  {
    numb: 28,
    question: "How do you enable TypeScript in a Next.js project?",
    answer: "Add a tsconfig.json file and use .ts/.tsx files",
    options: [
      "Add a tsconfig.json file and use .ts/.tsx files",
      "Rename all files to .ts",
      "Install typescript but no config needed",
      "TypeScript is not supported",
    ],
  },
  {
    numb: 29,
    question: "What is the default behavior of getStaticProps?",
    answer: "Runs at build time only",
    options: [
      "Runs at build time only",
      "Runs on every request",
      "Runs on client side",
      "Runs on every deploy",
    ],
  },
  {
    numb: 30,
    question: "How do you handle 404 pages in Next.js?",
    answer: "Create a 404.js file in the pages directory",
    options: [
      "Create a 404.js file in the pages directory",
      "Create a NotFound.js file",
      "Add a 404 route in next.config.js",
      "Use a 404 component in _app.js",
    ],
  },
  // ... 70 more questions will be added here ...
  {
    numb: 31,
    question: "How do you perform client-side navigation in Next.js?",
    answer: "Using the Link component from 'next/link'",
    options: [
      "Using window.location",
      "Using the Link component from 'next/link'",
      "Using a tag only",
      "Using Router.go",
    ],
  },
  {
    numb: 32,
    question:
      "Which file is used to configure environment variables in Next.js?",
    answer: ".env.local",
    options: [".env.local", "env.js", "config.env", "next.env"],
  },
  {
    numb: 33,
    question: "How do you access environment variables in Next.js?",
    answer: "Using process.env.NEXT_PUBLIC_*",
    options: [
      "Using process.env.NEXT_PUBLIC_*",
      "Using window.env",
      "Using ENV object",
      "Using next.env",
    ],
  },
  {
    numb: 34,
    question: "What is the purpose of the public directory in Next.js?",
    answer: "To serve static assets like images and fonts",
    options: [
      "To store API routes",
      "To serve static assets like images and fonts",
      "To store React components",
      "To store CSS files",
    ],
  },
  {
    numb: 35,
    question: "How do you add a custom server to a Next.js app?",
    answer:
      "By creating a custom server file (e.g., server.js) and using next()",
    options: [
      "By editing next.config.js only",
      "By creating a custom server file (e.g., server.js) and using next()",
      "By modifying package.json",
      "By adding a server.js to the public folder",
    ],
  },
  {
    numb: 36,
    question: "Which command exports a static version of your Next.js site?",
    answer: "next export",
    options: [
      "next export",
      "next static",
      "npm run build-static",
      "next generate",
    ],
  },
  {
    numb: 37,
    question: "How do you add middleware in Next.js 12+?",
    answer: "Create a middleware.js file at the root or in pages/",
    options: [
      "Add to next.config.js",
      "Create a middleware.js file at the root or in pages/",
      "Add to _app.js",
      "Add to _document.js",
    ],
  },
  {
    numb: 38,
    question: "What is the use of next/head in Next.js?",
    answer: "To modify the <head> of the page, like title and meta tags",
    options: [
      "To modify the <head> of the page, like title and meta tags",
      "To add scripts only",
      "To add styles only",
      "To override the App component",
    ],
  },
  {
    numb: 39,
    question: "How do you handle redirects in Next.js?",
    answer: "Configure redirects in next.config.js",
    options: [
      "Configure redirects in next.config.js",
      "Use window.location",
      "Use the Link component",
      "Use Router.replace only",
    ],
  },
  {
    numb: 40,
    question: "What is the recommended way to add fonts in Next.js?",
    answer: "Use the next/font package or import in _app.js",
    options: [
      "Use the next/font package or import in _app.js",
      "Add to public folder only",
      "Use a CDN only",
      "Add to next.config.js",
    ],
  },
  // ... 60 more questions will be added here ...
  {
    numb: 41,
    question: "How do you enable image optimization in Next.js?",
    answer: "Use the next/image component",
    options: [
      "Use the next/image component",
      "Use the img tag only",
      "Add images to the public folder",
      "Enable in next.config.js only",
    ],
  },
  {
    numb: 42,
    question: "What is the main benefit of using next/image?",
    answer: "Automatic image optimization and resizing",
    options: [
      "Automatic image optimization and resizing",
      "Faster builds",
      "Better routing",
      "Improved CSS support",
    ],
  },
  {
    numb: 43,
    question: "How do you add a custom 500 error page in Next.js?",
    answer: "Create a 500.js file in the pages directory",
    options: [
      "Create a 500.js file in the pages directory",
      "Create a 500.html file",
      "Add a 500 route in next.config.js",
      "Use a 500 component in _app.js",
    ],
  },
  {
    numb: 44,
    question: "Which Next.js feature allows you to split code automatically?",
    answer: "Automatic code splitting",
    options: [
      "Automatic code splitting",
      "Manual code splitting",
      "Dynamic imports only",
      "Tree shaking",
    ],
  },
  {
    numb: 45,
    question: "How do you use dynamic imports in Next.js?",
    answer: "Use the dynamic() function from 'next/dynamic'",
    options: [
      "Use the dynamic() function from 'next/dynamic'",
      "Use import() only",
      "Use require()",
      "Use next.import()",
    ],
  },
  {
    numb: 46,
    question: "What is the purpose of next.config.js?",
    answer: "To customize and configure Next.js settings",
    options: [
      "To customize and configure Next.js settings",
      "To store environment variables",
      "To define routes only",
      "To add CSS only",
    ],
  },
  {
    numb: 47,
    question: "How do you enable custom webpack configuration in Next.js?",
    answer: "Modify the webpack property in next.config.js",
    options: [
      "Modify the webpack property in next.config.js",
      "Edit package.json",
      "Edit _app.js",
      "Edit _document.js",
    ],
  },
  {
    numb: 48,
    question: "How do you deploy a Next.js app to Vercel?",
    answer: "Push to a Git repository and connect to Vercel",
    options: [
      "Push to a Git repository and connect to Vercel",
      "Upload files manually",
      "Use npm deploy",
      "Use next export only",
    ],
  },
  {
    numb: 49,
    question:
      "Which Next.js feature allows you to fetch data for a page at runtime?",
    answer: "getServerSideProps",
    options: [
      "getServerSideProps",
      "getStaticProps",
      "getInitialProps",
      "useEffect",
    ],
  },
  {
    numb: 50,
    question: "How do you add a favicon to a Next.js app?",
    answer:
      "Add the favicon to the public folder and reference it in _document.js or Head",
    options: [
      "Add the favicon to the public folder and reference it in _document.js or Head",
      "Add to next.config.js",
      "Add to _app.js only",
      "Add to src folder",
    ],
  },
  // ... 50 more questions will be added here ...
  {
    numb: 51,
    question: "How do you enable static file serving in Next.js?",
    answer: "Place files in the public directory",
    options: [
      "Place files in the public directory",
      "Place files in the static directory",
      "Place files in the src directory",
      "Place files in the pages directory",
    ],
  },
  {
    numb: 52,
    question: "What is the main advantage of using getStaticPaths?",
    answer: "To generate dynamic routes at build time",
    options: [
      "To generate dynamic routes at build time",
      "To fetch data on the client",
      "To handle API requests",
      "To override the App component",
    ],
  },
  {
    numb: 53,
    question: "How do you handle custom error pages in Next.js?",
    answer: "Create 404.js and 500.js in the pages directory",
    options: [
      "Create 404.js and 500.js in the pages directory",
      "Edit next.config.js",
      "Add to _app.js",
      "Add to public folder",
    ],
  },
  {
    numb: 54,
    question: "How do you use CSS Modules in Next.js?",
    answer: "Name the file *.module.css and import it",
    options: [
      "Name the file *.module.css and import it",
      "Add to next.config.js",
      "Use global.css only",
      "Use inline styles only",
    ],
  },
  {
    numb: 55,
    question: "What is the use of getInitialProps in Next.js?",
    answer: "To fetch data before rendering a page (legacy method)",
    options: [
      "To fetch data before rendering a page (legacy method)",
      "To fetch data on the client only",
      "To fetch data after rendering",
      "To fetch data in API routes",
    ],
  },
  {
    numb: 56,
    question: "How do you enable preview mode in Next.js?",
    answer: "Call res.setPreviewData in an API route",
    options: [
      "Call res.setPreviewData in an API route",
      "Edit next.config.js",
      "Use getStaticProps only",
      "Use getServerSideProps only",
    ],
  },
  {
    numb: 57,
    question: "How do you use absolute imports in Next.js?",
    answer: "Configure jsconfig.json or tsconfig.json",
    options: [
      "Configure jsconfig.json or tsconfig.json",
      "Edit next.config.js",
      "Use import aliases only",
      "Use relative paths only",
    ],
  },
  {
    numb: 58,
    question: "What is the default export from a Next.js API route?",
    answer: "A handler function (req, res) => {}",
    options: [
      "A handler function (req, res) => {}",
      "A React component",
      "A string",
      "A class",
    ],
  },
  {
    numb: 59,
    question: "How do you enable CORS in a Next.js API route?",
    answer: "Set headers in the API route handler",
    options: [
      "Set headers in the API route handler",
      "Edit next.config.js",
      "Use a CORS package only",
      "CORS is not supported",
    ],
  },
  {
    numb: 60,
    question: "How do you add a custom layout to specific pages in Next.js?",
    answer: "Define a getLayout function and use it in _app.js",
    options: [
      "Define a getLayout function and use it in _app.js",
      "Edit next.config.js",
      "Use a Layout component in every page",
      "Add to _document.js",
    ],
  },
  // ... 40 more questions will be added here ...
  {
    numb: 61,
    question: "How do you use images from external domains in next/image?",
    answer: "Add the domain to images.domains in next.config.js",
    options: [
      "Add the domain to images.domains in next.config.js",
      "Add to public folder",
      "Use a CDN only",
      "No configuration needed",
    ],
  },
  {
    numb: 62,
    question:
      "What is the main benefit of ISR (Incremental Static Regeneration)?",
    answer: "Update static content without rebuilding the whole site",
    options: [
      "Update static content without rebuilding the whole site",
      "Faster client-side navigation",
      "Better CSS support",
      "Improved routing",
    ],
  },
  {
    numb: 63,
    question: "How do you add a catch-all route in Next.js?",
    answer: "Use [[...param]].js in the pages directory",
    options: [
      "Use [[...param]].js in the pages directory",
      "Use [param].js only",
      "Use {...param}.js",
      "Use (param).js",
    ],
  },
  {
    numb: 64,
    question: "How do you use middleware for authentication in Next.js?",
    answer: "Add logic to middleware.js at the root or in pages/",
    options: [
      "Add logic to middleware.js at the root or in pages/",
      "Edit next.config.js",
      "Use getServerSideProps only",
      "Use getStaticProps only",
    ],
  },
  {
    numb: 65,
    question: "How do you enable API route body parsing in Next.js?",
    answer: "Use built-in body parsing or disable in API config",
    options: [
      "Use built-in body parsing or disable in API config",
      "Edit next.config.js",
      "Use a third-party package only",
      "Body parsing is not supported",
    ],
  },
  {
    numb: 66,
    question: "How do you use SASS/SCSS in Next.js?",
    answer: "Install sass and import .scss files",
    options: [
      "Install sass and import .scss files",
      "Edit next.config.js",
      "Use only CSS Modules",
      "SASS/SCSS is not supported",
    ],
  },
  {
    numb: 67,
    question: "How do you enable static HTML export in Next.js?",
    answer: "Run next export after next build",
    options: [
      "Run next export after next build",
      "Edit next.config.js",
      "Use getStaticProps only",
      "Use getServerSideProps only",
    ],
  },
  {
    numb: 68,
    question: "How do you use environment variables at build time in Next.js?",
    answer: "Prefix with NEXT_PUBLIC_ and use process.env",
    options: [
      "Prefix with NEXT_PUBLIC_ and use process.env",
      "Use window.env",
      "Add to public folder",
      "No support for build-time env vars",
    ],
  },
  {
    numb: 69,
    question: "How do you add a custom header to all responses in Next.js?",
    answer: "Configure headers in next.config.js",
    options: [
      "Configure headers in next.config.js",
      "Edit _app.js",
      "Edit _document.js",
      "Add to public folder",
    ],
  },
  {
    numb: 70,
    question: "How do you use SWR for data fetching in Next.js?",
    answer: "Install swr and use the useSWR hook",
    options: [
      "Install swr and use the useSWR hook",
      "Use getStaticProps only",
      "Use getServerSideProps only",
      "SWR is built-in",
    ],
  },
  // ... 30 more questions will be added here ...
  {
    numb: 71,
    question: "How do you use static props with dynamic routes in Next.js?",
    answer: "Combine getStaticProps with getStaticPaths",
    options: [
      "Combine getStaticProps with getStaticPaths",
      "Use getServerSideProps only",
      "Use getInitialProps only",
      "Use useEffect only",
    ],
  },
  {
    numb: 72,
    question: "How do you enable React Strict Mode in Next.js?",
    answer: "Set reactStrictMode: true in next.config.js",
    options: [
      "Set reactStrictMode: true in next.config.js",
      "Edit _app.js",
      "Edit _document.js",
      "Strict mode is enabled by default",
    ],
  },
  {
    numb: 73,
    question: "How do you use custom Babel configuration in Next.js?",
    answer: "Add a .babelrc file to the root directory",
    options: [
      "Add a .babelrc file to the root directory",
      "Edit next.config.js",
      "Edit _app.js",
      "Edit _document.js",
    ],
  },
  {
    numb: 74,
    question: "How do you use Google Analytics in Next.js?",
    answer: "Add the GA script in _document.js or use a package",
    options: [
      "Add the GA script in _document.js or use a package",
      "Edit next.config.js",
      "Add to public folder",
      "Add to _app.js only",
    ],
  },
  {
    numb: 75,
    question: "How do you use custom fonts from Google Fonts in Next.js?",
    answer: "Use next/font or import in _app.js",
    options: [
      "Use next/font or import in _app.js",
      "Add to public folder only",
      "Edit next.config.js",
      "Add to _document.js only",
    ],
  },
  {
    numb: 76,
    question: "How do you use a custom 403 error page in Next.js?",
    answer: "Handle in middleware or custom server",
    options: [
      "Handle in middleware or custom server",
      "Create 403.js in pages",
      "Edit next.config.js",
      "Add to public folder",
    ],
  },
  {
    numb: 77,
    question: "How do you use a custom server with Express in Next.js?",
    answer: "Create server.js and use next() with Express routes",
    options: [
      "Create server.js and use next() with Express routes",
      "Edit next.config.js",
      "Add to public folder",
      "Edit _app.js",
    ],
  },
  {
    numb: 78,
    question: "How do you use static imports for images in Next.js?",
    answer: "Import the image and use it as src in next/image",
    options: [
      "Import the image and use it as src in next/image",
      "Use require() only",
      "Add to public folder only",
      "Use window.importImage()",
    ],
  },
  {
    numb: 79,
    question: "How do you use fallback pages with getStaticPaths?",
    answer: "Set fallback: true or 'blocking' in getStaticPaths",
    options: [
      "Set fallback: true or 'blocking' in getStaticPaths",
      "Set fallback: false only",
      "Fallback is not supported",
      "Use getServerSideProps only",
    ],
  },
  {
    numb: 80,
    question: "How do you use rewrites in Next.js?",
    answer: "Configure rewrites in next.config.js",
    options: [
      "Configure rewrites in next.config.js",
      "Edit _app.js",
      "Edit _document.js",
      "Add to public folder",
    ],
  },
  // ... 20 more questions will be added here ...
  {
    numb: 81,
    question: "How do you use API middleware in Next.js API routes?",
    answer: "Call middleware functions inside the API handler",
    options: [
      "Call middleware functions inside the API handler",
      "Edit next.config.js",
      "Add to _app.js",
      "Add to public folder",
    ],
  },
  {
    numb: 82,
    question: "How do you use cookies in Next.js API routes?",
    answer: "Read and set cookies in the API handler using req and res",
    options: [
      "Read and set cookies in the API handler using req and res",
      "Edit next.config.js",
      "Use window.cookie",
      "Cookies are not supported",
    ],
  },
  {
    numb: 83,
    question: "How do you use getServerSideProps for authentication?",
    answer: "Check authentication in getServerSideProps and redirect if needed",
    options: [
      "Check authentication in getServerSideProps and redirect if needed",
      "Use getStaticProps only",
      "Use useEffect only",
      "Authentication is not supported",
    ],
  },
  {
    numb: 84,
    question:
      "How do you use static site generation for blog posts in Next.js?",
    answer: "Use getStaticProps and getStaticPaths for each post",
    options: [
      "Use getStaticProps and getStaticPaths for each post",
      "Use getServerSideProps only",
      "Use useEffect only",
      "Use getInitialProps only",
    ],
  },
  {
    numb: 85,
    question: "How do you use fallback blocking in getStaticPaths?",
    answer: "Set fallback: 'blocking' in getStaticPaths",
    options: [
      "Set fallback: 'blocking' in getStaticPaths",
      "Set fallback: false only",
      "Fallback is not supported",
      "Use getServerSideProps only",
    ],
  },
  {
    numb: 86,
    question: "How do you use the Head component in Next.js?",
    answer: "Import Head from 'next/head' and use it in your component",
    options: [
      "Import Head from 'next/head' and use it in your component",
      "Edit next.config.js",
      "Add to _app.js only",
      "Add to public folder",
    ],
  },
  {
    numb: 87,
    question: "How do you use static props for a homepage in Next.js?",
    answer: "Export getStaticProps from pages/index.js",
    options: [
      "Export getStaticProps from pages/index.js",
      "Use getServerSideProps only",
      "Use getInitialProps only",
      "Use useEffect only",
    ],
  },
  {
    numb: 88,
    question: "How do you use a custom 401 error page in Next.js?",
    answer: "Handle in middleware or custom server",
    options: [
      "Handle in middleware or custom server",
      "Create 401.js in pages",
      "Edit next.config.js",
      "Add to public folder",
    ],
  },
  {
    numb: 89,
    question: "How do you use a custom loading indicator in Next.js?",
    answer: "Use the next/router events in _app.js",
    options: [
      "Use the next/router events in _app.js",
      "Edit next.config.js",
      "Add to _document.js",
      "Add to public folder",
    ],
  },
  {
    numb: 90,
    question: "How do you use a custom 502 error page in Next.js?",
    answer: "Handle in middleware or custom server",
    options: [
      "Handle in middleware or custom server",
      "Create 502.js in pages",
      "Edit next.config.js",
      "Add to public folder",
    ],
  },
  {
    numb: 91,
    question: "How do you use a custom 503 error page in Next.js?",
    answer: "Handle in middleware or custom server",
    options: [
      "Handle in middleware or custom server",
      "Create 503.js in pages",
      "Edit next.config.js",
      "Add to public folder",
    ],
  },
  {
    numb: 92,
    question: "How do you use a custom 504 error page in Next.js?",
    answer: "Handle in middleware or custom server",
    options: [
      "Handle in middleware or custom server",
      "Create 504.js in pages",
      "Edit next.config.js",
      "Add to public folder",
    ],
  },
  {
    numb: 93,
    question: "How do you use a custom 400 error page in Next.js?",
    answer: "Handle in middleware or custom server",
    options: [
      "Handle in middleware or custom server",
      "Create 400.js in pages",
      "Edit next.config.js",
      "Add to public folder",
    ],
  },
  {
    numb: 94,
    question: "How do you use a custom 422 error page in Next.js?",
    answer: "Handle in middleware or custom server",
    options: [
      "Handle in middleware or custom server",
      "Create 422.js in pages",
      "Edit next.config.js",
      "Add to public folder",
    ],
  },
  {
    numb: 95,
    question: "How do you use a custom 429 error page in Next.js?",
    answer: "Handle in middleware or custom server",
    options: [
      "Handle in middleware or custom server",
      "Create 429.js in pages",
      "Edit next.config.js",
      "Add to public folder",
    ],
  },
  {
    numb: 96,
    question: "How do you use a custom 418 error page in Next.js?",
    answer: "Handle in middleware or custom server",
    options: [
      "Handle in middleware or custom server",
      "Create 418.js in pages",
      "Edit next.config.js",
      "Add to public folder",
    ],
  },
  {
    numb: 97,
    question: "How do you use a custom 410 error page in Next.js?",
    answer: "Handle in middleware or custom server",
    options: [
      "Handle in middleware or custom server",
      "Create 410.js in pages",
      "Edit next.config.js",
      "Add to public folder",
    ],
  },
  {
    numb: 98,
    question: "How do you use a custom 451 error page in Next.js?",
    answer: "Handle in middleware or custom server",
    options: [
      "Handle in middleware or custom server",
      "Create 451.js in pages",
      "Edit next.config.js",
      "Add to public folder",
    ],
  },
  {
    numb: 99,
    question: "How do you use a custom 406 error page in Next.js?",
    answer: "Handle in middleware or custom server",
    options: [
      "Handle in middleware or custom server",
      "Create 406.js in pages",
      "Edit next.config.js",
      "Add to public folder",
    ],
  },
  {
    numb: 100,
    question: "How do you use a custom 409 error page in Next.js?",
    answer: "Handle in middleware or custom server",
    options: [
      "Handle in middleware or custom server",
      "Create 409.js in pages",
      "Edit next.config.js",
      "Add to public folder",
    ],
  },
];
let questions6 = [
  {
    numb: 1,
    question: "What does CRUD stand for in web development?",
    answer: "Create, Read, Update, Delete",
    options: [
      "Create, Read, Update, Delete",
      "Copy, Run, Undo, Delete",
      "Create, Remove, Update, Download",
      "Connect, Read, Upload, Download",
    ],
  },
  {
    numb: 2,
    question:
      "Which directory in Next.js is used for creating API routes for CRUD operations?",
    answer: "pages/api",
    options: ["pages/api", "api/pages", "src/api", "public/api"],
  },
  {
    numb: 3,
    question:
      "Which HTTP method is typically used for creating a new resource?",
    answer: "POST",
    options: ["POST", "GET", "PUT", "DELETE"],
  },
  {
    numb: 4,
    question: "Which HTTP method is used to retrieve data from a server?",
    answer: "GET",
    options: ["GET", "POST", "PUT", "DELETE"],
  },
  {
    numb: 5,
    question: "Which HTTP method is used to update an existing resource?",
    answer: "PUT",
    options: ["PUT", "GET", "POST", "DELETE"],
  },
  {
    numb: 6,
    question: "Which HTTP method is used to delete a resource?",
    answer: "DELETE",
    options: ["DELETE", "GET", "POST", "PUT"],
  },
  {
    numb: 7,
    question: "How do you access the request method in a Next.js API route?",
    answer: "req.method",
    options: ["req.method", "req.type", "req.action", "req.route"],
  },
  {
    numb: 8,
    question:
      "How do you parse JSON data from a POST request in a Next.js API route?",
    answer: "Use req.body (Next.js parses JSON automatically)",
    options: [
      "Use req.body (Next.js parses JSON automatically)",
      "Use req.json()",
      "Use req.data",
      "Use req.parse()",
    ],
  },
  {
    numb: 9,
    question:
      "Where should you store your database connection logic in a Next.js app?",
    answer: "In a separate utility file (e.g., lib/db.js)",
    options: [
      "In a separate utility file (e.g., lib/db.js)",
      "In pages/index.js",
      "In public/db.js",
      "In next.config.js",
    ],
  },
  {
    numb: 10,
    question:
      "Which hook is commonly used to fetch data from an API in a Next.js page?",
    answer: "useEffect",
    options: ["useEffect", "useState", "useContext", "useReducer"],
  },
  // ... 90 more questions will be added here ...
  {
    numb: 11,
    question: "Which Next.js function is used to fetch data at build time?",
    answer: "getStaticProps",
    options: [
      "getStaticProps",
      "getServerSideProps",
      "getInitialProps",
      "useEffect",
    ],
  },
  {
    numb: 12,
    question: "Which Next.js function is used to fetch data on each request?",
    answer: "getServerSideProps",
    options: [
      "getServerSideProps",
      "getStaticProps",
      "getInitialProps",
      "useEffect",
    ],
  },
  {
    numb: 13,
    question: "How do you send a POST request from a Next.js page?",
    answer: "Use fetch or axios with method 'POST'",
    options: [
      "Use fetch or axios with method 'POST'",
      "Use window.location",
      "Use getServerSideProps",
      "Use getStaticProps",
    ],
  },
  {
    numb: 14,
    question:
      "How do you update state after a successful POST request in Next.js?",
    answer: "Call setState or useState updater",
    options: [
      "Call setState or useState updater",
      "Reload the page",
      "Call getStaticProps",
      "Call getServerSideProps",
    ],
  },
  {
    numb: 15,
    question: "How do you delete an item using fetch in Next.js?",
    answer: "Send a DELETE request to the API route",
    options: [
      "Send a DELETE request to the API route",
      "Send a GET request",
      "Send a POST request",
      "Send a PUT request",
    ],
  },
  {
    numb: 16,
    question: "How do you update an item using fetch in Next.js?",
    answer: "Send a PUT or PATCH request to the API route",
    options: [
      "Send a PUT or PATCH request to the API route",
      "Send a GET request",
      "Send a POST request",
      "Send a DELETE request",
    ],
  },
  {
    numb: 17,
    question:
      "Which status code indicates a successful creation of a resource?",
    answer: "201",
    options: ["201", "200", "204", "400"],
  },
  {
    numb: 18,
    question: "Which status code indicates a successful deletion?",
    answer: "204",
    options: ["204", "200", "201", "404"],
  },
  {
    numb: 19,
    question: "How do you handle errors in a Next.js API route?",
    answer: "Return a response with an error status code and message",
    options: [
      "Return a response with an error status code and message",
      "Throw an error only",
      "Reload the page",
      "Return null",
    ],
  },
  {
    numb: 20,
    question: "How do you connect to MongoDB in a Next.js API route?",
    answer: "Use a MongoDB client in the API handler",
    options: [
      "Use a MongoDB client in the API handler",
      "Use window.mongodb",
      "Use getStaticProps",
      "Use getServerSideProps",
    ],
  },
  // ... 80 more questions will be added here ...
  {
    numb: 21,
    question: "How do you prevent SQL injection in your API routes?",
    answer: "Use parameterized queries or ORM methods",
    options: [
      "Use parameterized queries or ORM methods",
      "Concatenate strings for queries",
      "Use eval()",
      "No prevention needed",
    ],
  },
  {
    numb: 22,
    question:
      "Which package is commonly used for connecting to MongoDB in Next.js?",
    answer: "mongodb",
    options: ["mongodb", "mongoose", "mysql", "pg"],
  },
  {
    numb: 23,
    question: "How do you send JSON data in a POST request from the client?",
    answer: "Set the Content-Type header to application/json",
    options: [
      "Set the Content-Type header to application/json",
      "Send as form data",
      "No header needed",
      "Use multipart/form-data",
    ],
  },
  {
    numb: 24,
    question:
      "How do you handle form submissions for creating data in Next.js?",
    answer: "Send a POST request to an API route",
    options: [
      "Send a POST request to an API route",
      "Send a GET request",
      "Send a DELETE request",
      "Send a PUT request",
    ],
  },
  {
    numb: 25,
    question: "How do you fetch a list of items from a Next.js API route?",
    answer: "Send a GET request to the API route",
    options: [
      "Send a GET request to the API route",
      "Send a POST request",
      "Send a PUT request",
      "Send a DELETE request",
    ],
  },
  {
    numb: 26,
    question:
      "How do you update a record in a database from a Next.js API route?",
    answer: "Use a PUT or PATCH request and update the record in the handler",
    options: [
      "Use a PUT or PATCH request and update the record in the handler",
      "Use a GET request",
      "Use a POST request",
      "Use a DELETE request",
    ],
  },
  {
    numb: 27,
    question:
      "How do you delete a record from a database in a Next.js API route?",
    answer: "Use a DELETE request and remove the record in the handler",
    options: [
      "Use a DELETE request and remove the record in the handler",
      "Use a GET request",
      "Use a POST request",
      "Use a PUT request",
    ],
  },
  {
    numb: 28,
    question: "How do you handle validation in a Next.js API route?",
    answer: "Check the request body and return errors if invalid",
    options: [
      "Check the request body and return errors if invalid",
      "Skip validation",
      "Validate on the client only",
      "Use window.validate()",
    ],
  },
  {
    numb: 29,
    question: "How do you return a JSON response from a Next.js API route?",
    answer: "Use res.status().json()",
    options: [
      "Use res.status().json()",
      "Use res.send() only",
      "Use res.write()",
      "Use res.end()",
    ],
  },
  {
    numb: 30,
    question: "How do you handle errors in client-side fetch requests?",
    answer: "Use try/catch or .catch() to handle errors",
    options: [
      "Use try/catch or .catch() to handle errors",
      "Ignore errors",
      "Reload the page",
      "Use window.onerror",
    ],
  },
  {
    numb: 31,
    question: "How do you show a loading state while fetching data in Next.js?",
    answer: "Use a state variable to track loading",
    options: [
      "Use a state variable to track loading",
      "Reload the page",
      "Use window.loading",
      "No loading state needed",
    ],
  },
  {
    numb: 32,
    question: "How do you revalidate data after a CRUD operation in Next.js?",
    answer: "Refetch the data or use SWR/mutate",
    options: [
      "Refetch the data or use SWR/mutate",
      "Reload the page only",
      "No revalidation needed",
      "Use window.refresh()",
    ],
  },
  {
    numb: 33,
    question: "How do you paginate results from a Next.js API route?",
    answer: "Send page and limit parameters in the request",
    options: [
      "Send page and limit parameters in the request",
      "Fetch all data at once",
      "Use window.paginate()",
      "No pagination needed",
    ],
  },
  {
    numb: 34,
    question: "How do you secure API routes in Next.js?",
    answer: "Check authentication/authorization in the handler",
    options: [
      "Check authentication/authorization in the handler",
      "No security needed",
      "Use window.auth()",
      "Secure on the client only",
    ],
  },
  {
    numb: 35,
    question: "How do you upload files in a Next.js CRUD app?",
    answer: "Use FormData and handle uploads in the API route",
    options: [
      "Use FormData and handle uploads in the API route",
      "Send as JSON only",
      "Use window.upload()",
      "No file uploads supported",
    ],
  },
  {
    numb: 36,
    question: "How do you handle CORS in Next.js API routes?",
    answer: "Set headers in the API handler or use a CORS package",
    options: [
      "Set headers in the API handler or use a CORS package",
      "No CORS needed",
      "Use window.cors()",
      "CORS is automatic",
    ],
  },
  {
    numb: 37,
    question: "How do you test CRUD API routes in Next.js?",
    answer: "Use tools like Postman or write integration tests",
    options: [
      "Use tools like Postman or write integration tests",
      "Test in the browser only",
      "No testing needed",
      "Use window.test()",
    ],
  },
  {
    numb: 38,
    question: "How do you handle optimistic UI updates in CRUD operations?",
    answer: "Update UI before server response, then confirm or rollback",
    options: [
      "Update UI before server response, then confirm or rollback",
      "Wait for server response always",
      "No UI updates needed",
      "Use window.optimistic()",
    ],
  },
  {
    numb: 39,
    question: "How do you handle unique constraints in a CRUD API?",
    answer: "Check for duplicates before creating or updating",
    options: [
      "Check for duplicates before creating or updating",
      "Ignore duplicates",
      "Let the database handle errors only",
      "No constraints needed",
    ],
  },
  {
    numb: 40,
    question:
      "How do you return a 404 error for missing data in a Next.js API route?",
    answer: "Return res.status(404).json({ error: 'Not found' })",
    options: [
      "Return res.status(404).json({ error: 'Not found' })",
      "Return res.status(200).json({})",
      "Return res.status(500).json({})",
      "Return res.status(400).json({})",
    ],
  },
  // ... 60 more questions will be added here ...
  {
    numb: 41,
    question:
      "How do you handle bulk creation of records in a Next.js API route?",
    answer: "Accept an array in the request body and insert many records",
    options: [
      "Accept an array in the request body and insert many records",
      "Send multiple POST requests",
      "Use window.bulkCreate()",
      "Bulk creation is not supported",
    ],
  },
  {
    numb: 42,
    question: "How do you handle bulk deletion in a Next.js API route?",
    answer: "Accept an array of IDs and delete them in the handler",
    options: [
      "Accept an array of IDs and delete them in the handler",
      "Send multiple DELETE requests",
      "Use window.bulkDelete()",
      "Bulk deletion is not supported",
    ],
  },
  {
    numb: 43,
    question: "How do you handle partial updates in a Next.js API route?",
    answer: "Use the PATCH method and update only provided fields",
    options: [
      "Use the PATCH method and update only provided fields",
      "Use PUT for all updates",
      "Partial updates are not supported",
      "Use window.partialUpdate()",
    ],
  },
  {
    numb: 44,
    question:
      "How do you handle authentication for CRUD operations in Next.js?",
    answer: "Check authentication in the API handler before processing",
    options: [
      "Check authentication in the API handler before processing",
      "Authenticate on the client only",
      "No authentication needed",
      "Use window.auth()",
    ],
  },
  {
    numb: 45,
    question: "How do you handle authorization for CRUD operations in Next.js?",
    answer: "Check user permissions in the API handler",
    options: [
      "Check user permissions in the API handler",
      "Authorize on the client only",
      "No authorization needed",
      "Use window.authorize()",
    ],
  },
  {
    numb: 46,
    question: "How do you prevent overposting attacks in a CRUD API?",
    answer: "Validate and whitelist allowed fields in the handler",
    options: [
      "Validate and whitelist allowed fields in the handler",
      "Accept all fields from the client",
      "No validation needed",
      "Use window.overpost()",
    ],
  },
  {
    numb: 47,
    question: "How do you handle rate limiting in Next.js API routes?",
    answer: "Implement rate limiting logic or use a package",
    options: [
      "Implement rate limiting logic or use a package",
      "No rate limiting needed",
      "Use window.rateLimit()",
      "Rate limiting is automatic",
    ],
  },
  {
    numb: 48,
    question: "How do you log CRUD operations in Next.js?",
    answer: "Log actions in the API handler or use a logging service",
    options: [
      "Log actions in the API handler or use a logging service",
      "No logging needed",
      "Use window.log()",
      "Logging is automatic",
    ],
  },
  {
    numb: 49,
    question: "How do you handle concurrency issues in CRUD operations?",
    answer: "Use database transactions or versioning",
    options: [
      "Use database transactions or versioning",
      "Ignore concurrency",
      "Use window.concurrent()",
      "No concurrency issues possible",
    ],
  },
  {
    numb: 50,
    question: "How do you return a custom status code in a Next.js API route?",
    answer: "Use res.status(code).json()",
    options: [
      "Use res.status(code).json()",
      "Use res.send() only",
      "Use window.status()",
      "Status codes are automatic",
    ],
  },
  {
    numb: 51,
    question: "How do you handle large payloads in Next.js API routes?",
    answer: "Increase the bodyParser limit or handle streams",
    options: [
      "Increase the bodyParser limit or handle streams",
      "No handling needed",
      "Use window.largePayload()",
      "Large payloads are not supported",
    ],
  },
  {
    numb: 52,
    question: "How do you use Prisma for CRUD in Next.js?",
    answer: "Import Prisma client and use it in API routes",
    options: [
      "Import Prisma client and use it in API routes",
      "Use window.prisma()",
      "Prisma is not supported",
      "Use getStaticProps only",
    ],
  },
  {
    numb: 53,
    question: "How do you use SWR for client-side CRUD in Next.js?",
    answer: "Use useSWR hook and mutate after changes",
    options: [
      "Use useSWR hook and mutate after changes",
      "Use window.swr()",
      "SWR is not supported",
      "Use getServerSideProps only",
    ],
  },
  {
    numb: 54,
    question: "How do you use React Query for CRUD in Next.js?",
    answer: "Use useQuery and useMutation hooks",
    options: [
      "Use useQuery and useMutation hooks",
      "Use window.reactQuery()",
      "React Query is not supported",
      "Use getStaticProps only",
    ],
  },
  {
    numb: 55,
    question: "How do you handle soft deletes in a CRUD API?",
    answer: "Mark records as deleted instead of removing them",
    options: [
      "Mark records as deleted instead of removing them",
      "Delete records permanently",
      "No soft deletes needed",
      "Use window.softDelete()",
    ],
  },
  {
    numb: 56,
    question: "How do you restore soft-deleted records in a CRUD API?",
    answer: "Update the deleted flag to false",
    options: [
      "Update the deleted flag to false",
      "Recreate the record",
      "No restoration possible",
      "Use window.restore()",
    ],
  },
  {
    numb: 57,
    question: "How do you handle sorting in a CRUD API?",
    answer: "Accept sort parameters in the request and sort in the handler",
    options: [
      "Accept sort parameters in the request and sort in the handler",
      "Sort on the client only",
      "No sorting needed",
      "Use window.sort()",
    ],
  },
  {
    numb: 58,
    question: "How do you handle filtering in a CRUD API?",
    answer: "Accept filter parameters in the request and filter in the handler",
    options: [
      "Accept filter parameters in the request and filter in the handler",
      "Filter on the client only",
      "No filtering needed",
      "Use window.filter()",
    ],
  },
  {
    numb: 59,
    question: "How do you handle search in a CRUD API?",
    answer: "Accept a search query and filter results in the handler",
    options: [
      "Accept a search query and filter results in the handler",
      "Search on the client only",
      "No search needed",
      "Use window.search()",
    ],
  },
  {
    numb: 60,
    question: "How do you handle relationships between data in a CRUD API?",
    answer: "Join or populate related data in the handler",
    options: [
      "Join or populate related data in the handler",
      "No relationships needed",
      "Use window.relate()",
      "Relationships are not supported",
    ],
  },
  // ... 40 more questions will be added here ...
  {
    numb: 61,
    question: "How do you handle nested resources in a CRUD API?",
    answer: "Use nested routes and handle in the API handler",
    options: [
      "Use nested routes and handle in the API handler",
      "No nesting needed",
      "Use window.nest()",
      "Nested resources are not supported",
    ],
  },
  {
    numb: 62,
    question: "How do you handle file downloads in a Next.js API route?",
    answer: "Set appropriate headers and stream the file",
    options: [
      "Set appropriate headers and stream the file",
      "Send as JSON",
      "Use window.download()",
      "File downloads are not supported",
    ],
  },
  {
    numb: 63,
    question: "How do you handle CSV export in a CRUD API?",
    answer: "Generate CSV data and set Content-Type to text/csv",
    options: [
      "Generate CSV data and set Content-Type to text/csv",
      "Send as JSON only",
      "Use window.csv()",
      "CSV export is not supported",
    ],
  },
  {
    numb: 64,
    question: "How do you handle Excel export in a CRUD API?",
    answer: "Generate Excel file and set appropriate headers",
    options: [
      "Generate Excel file and set appropriate headers",
      "Send as JSON only",
      "Use window.excel()",
      "Excel export is not supported",
    ],
  },
  {
    numb: 65,
    question: "How do you handle PDF export in a CRUD API?",
    answer: "Generate PDF and set Content-Type to application/pdf",
    options: [
      "Generate PDF and set Content-Type to application/pdf",
      "Send as JSON only",
      "Use window.pdf()",
      "PDF export is not supported",
    ],
  },
  {
    numb: 66,
    question: "How do you handle timeouts in a Next.js API route?",
    answer: "Set a timeout and return an error if exceeded",
    options: [
      "Set a timeout and return an error if exceeded",
      "No timeout needed",
      "Use window.timeout()",
      "Timeouts are automatic",
    ],
  },
  {
    numb: 67,
    question: "How do you handle caching in a CRUD API?",
    answer: "Set cache headers or use a caching layer",
    options: [
      "Set cache headers or use a caching layer",
      "No caching needed",
      "Use window.cache()",
      "Caching is automatic",
    ],
  },
  {
    numb: 68,
    question: "How do you handle ETag headers in a CRUD API?",
    answer: "Generate and send ETag headers for resources",
    options: [
      "Generate and send ETag headers for resources",
      "No ETag needed",
      "Use window.etag()",
      "ETag is automatic",
    ],
  },
  {
    numb: 69,
    question: "How do you handle versioning in a CRUD API?",
    answer: "Add version info to the API route or data",
    options: [
      "Add version info to the API route or data",
      "No versioning needed",
      "Use window.version()",
      "Versioning is automatic",
    ],
  },
  {
    numb: 70,
    question: "How do you handle API documentation for CRUD routes?",
    answer: "Document endpoints and data formats in a README or Swagger",
    options: [
      "Document endpoints and data formats in a README or Swagger",
      "No documentation needed",
      "Use window.docs()",
      "Documentation is automatic",
    ],
  },
  {
    numb: 71,
    question: "How do you handle API testing for CRUD routes?",
    answer: "Write integration tests using a testing library",
    options: [
      "Write integration tests using a testing library",
      "Test in the browser only",
      "No testing needed",
      "Use window.test()",
    ],
  },
  {
    numb: 72,
    question: "How do you handle API mocking for CRUD routes?",
    answer: "Use a mocking library or mock server",
    options: [
      "Use a mocking library or mock server",
      "No mocking needed",
      "Use window.mock()",
      "Mocking is automatic",
    ],
  },
  {
    numb: 73,
    question: "How do you handle API rate limiting for CRUD routes?",
    answer: "Implement rate limiting logic or use a package",
    options: [
      "Implement rate limiting logic or use a package",
      "No rate limiting needed",
      "Use window.rateLimit()",
      "Rate limiting is automatic",
    ],
  },
  {
    numb: 74,
    question: "How do you handle API throttling for CRUD routes?",
    answer: "Limit the number of requests per user or IP",
    options: [
      "Limit the number of requests per user or IP",
      "No throttling needed",
      "Use window.throttle()",
      "Throttling is automatic",
    ],
  },
  {
    numb: 75,
    question: "How do you handle API logging for CRUD routes?",
    answer: "Log requests and responses in the API handler",
    options: [
      "Log requests and responses in the API handler",
      "No logging needed",
      "Use window.log()",
      "Logging is automatic",
    ],
  },
  {
    numb: 76,
    question: "How do you handle API monitoring for CRUD routes?",
    answer: "Use a monitoring service or custom logic",
    options: [
      "Use a monitoring service or custom logic",
      "No monitoring needed",
      "Use window.monitor()",
      "Monitoring is automatic",
    ],
  },
  {
    numb: 77,
    question: "How do you handle API analytics for CRUD routes?",
    answer: "Track usage and performance with analytics tools",
    options: [
      "Track usage and performance with analytics tools",
      "No analytics needed",
      "Use window.analytics()",
      "Analytics is automatic",
    ],
  },
  {
    numb: 78,
    question: "How do you handle API error tracking for CRUD routes?",
    answer: "Use an error tracking service or custom logic",
    options: [
      "Use an error tracking service or custom logic",
      "No error tracking needed",
      "Use window.error()",
      "Error tracking is automatic",
    ],
  },
  {
    numb: 79,
    question: "How do you handle API alerting for CRUD routes?",
    answer: "Set up alerts for failures or high error rates",
    options: [
      "Set up alerts for failures or high error rates",
      "No alerting needed",
      "Use window.alert()",
      "Alerting is automatic",
    ],
  },
  {
    numb: 80,
    question: "How do you handle API health checks for CRUD routes?",
    answer: "Implement a health check endpoint",
    options: [
      "Implement a health check endpoint",
      "No health checks needed",
      "Use window.health()",
      "Health checks are automatic",
    ],
  },
  // ... 20 more questions will be added here ...
  {
    numb: 81,
    question: "How do you handle API version deprecation for CRUD routes?",
    answer: "Notify users and remove old versions after a period",
    options: [
      "Notify users and remove old versions after a period",
      "Remove immediately",
      "No deprecation needed",
      "Use window.deprecate()",
    ],
  },
  {
    numb: 82,
    question: "How do you handle API documentation updates for CRUD routes?",
    answer: "Update docs whenever endpoints or data formats change",
    options: [
      "Update docs whenever endpoints or data formats change",
      "Update docs yearly",
      "No updates needed",
      "Use window.updateDocs()",
    ],
  },
  {
    numb: 83,
    question: "How do you handle API endpoint discovery for CRUD routes?",
    answer: "Provide a list of endpoints in the documentation",
    options: [
      "Provide a list of endpoints in the documentation",
      "No discovery needed",
      "Use window.discover()",
      "Discovery is automatic",
    ],
  },
  {
    numb: 84,
    question: "How do you handle API endpoint naming for CRUD routes?",
    answer: "Use RESTful conventions and resource names",
    options: [
      "Use RESTful conventions and resource names",
      "Use random names",
      "No naming needed",
      "Use window.name()",
    ],
  },
  {
    numb: 85,
    question: "How do you handle API endpoint grouping for CRUD routes?",
    answer: "Group endpoints by resource or functionality",
    options: [
      "Group endpoints by resource or functionality",
      "No grouping needed",
      "Use window.group()",
      "Grouping is automatic",
    ],
  },
  {
    numb: 86,
    question: "How do you handle API endpoint security for CRUD routes?",
    answer: "Use authentication, authorization, and HTTPS",
    options: [
      "Use authentication, authorization, and HTTPS",
      "No security needed",
      "Use window.secure()",
      "Security is automatic",
    ],
  },
  {
    numb: 87,
    question: "How do you handle API endpoint scalability for CRUD routes?",
    answer: "Use stateless handlers and scalable databases",
    options: [
      "Use stateless handlers and scalable databases",
      "No scalability needed",
      "Use window.scale()",
      "Scalability is automatic",
    ],
  },
  {
    numb: 88,
    question: "How do you handle API endpoint performance for CRUD routes?",
    answer: "Optimize queries and use caching",
    options: [
      "Optimize queries and use caching",
      "No optimization needed",
      "Use window.optimize()",
      "Performance is automatic",
    ],
  },
  {
    numb: 89,
    question: "How do you handle API endpoint reliability for CRUD routes?",
    answer: "Use retries, monitoring, and error handling",
    options: [
      "Use retries, monitoring, and error handling",
      "No reliability needed",
      "Use window.reliable()",
      "Reliability is automatic",
    ],
  },
  {
    numb: 90,
    question: "How do you handle API endpoint maintainability for CRUD routes?",
    answer: "Write clean code and document endpoints",
    options: [
      "Write clean code and document endpoints",
      "No maintainability needed",
      "Use window.maintain()",
      "Maintainability is automatic",
    ],
  },
  {
    numb: 91,
    question: "How do you handle API endpoint extensibility for CRUD routes?",
    answer: "Design endpoints to allow future changes",
    options: [
      "Design endpoints to allow future changes",
      "No extensibility needed",
      "Use window.extend()",
      "Extensibility is automatic",
    ],
  },
  {
    numb: 92,
    question: "How do you handle API endpoint consistency for CRUD routes?",
    answer: "Use consistent naming and response formats",
    options: [
      "Use consistent naming and response formats",
      "No consistency needed",
      "Use window.consistent()",
      "Consistency is automatic",
    ],
  },
  {
    numb: 93,
    question: "How do you handle API endpoint discoverability for CRUD routes?",
    answer: "Document endpoints and provide examples",
    options: [
      "Document endpoints and provide examples",
      "No discoverability needed",
      "Use window.discoverable()",
      "Discoverability is automatic",
    ],
  },
  {
    numb: 94,
    question: "How do you handle API endpoint usability for CRUD routes?",
    answer: "Provide clear documentation and error messages",
    options: [
      "Provide clear documentation and error messages",
      "No usability needed",
      "Use window.usable()",
      "Usability is automatic",
    ],
  },
  {
    numb: 95,
    question: "How do you handle API endpoint accessibility for CRUD routes?",
    answer: "Ensure endpoints are accessible to authorized users",
    options: [
      "Ensure endpoints are accessible to authorized users",
      "No accessibility needed",
      "Use window.accessible()",
      "Accessibility is automatic",
    ],
  },
  {
    numb: 96,
    question: "How do you handle API endpoint localization for CRUD routes?",
    answer: "Support multiple languages in responses if needed",
    options: [
      "Support multiple languages in responses if needed",
      "No localization needed",
      "Use window.localize()",
      "Localization is automatic",
    ],
  },
  {
    numb: 97,
    question:
      "How do you handle API endpoint internationalization for CRUD routes?",
    answer: "Support i18n in data and responses",
    options: [
      "Support i18n in data and responses",
      "No internationalization needed",
      "Use window.i18n()",
      "Internationalization is automatic",
    ],
  },
  {
    numb: 98,
    question: "How do you handle API endpoint compliance for CRUD routes?",
    answer: "Follow legal and industry standards (e.g., GDPR)",
    options: [
      "Follow legal and industry standards (e.g., GDPR)",
      "No compliance needed",
      "Use window.comply()",
      "Compliance is automatic",
    ],
  },
  {
    numb: 99,
    question: "How do you handle API endpoint auditing for CRUD routes?",
    answer: "Log changes and access for auditing purposes",
    options: [
      "Log changes and access for auditing purposes",
      "No auditing needed",
      "Use window.audit()",
      "Auditing is automatic",
    ],
  },
  {
    numb: 100,
    question: "How do you handle API endpoint rollback for CRUD routes?",
    answer: "Implement transactions or versioning to allow rollback",
    options: [
      "Implement transactions or versioning to allow rollback",
      "No rollback needed",
      "Use window.rollback()",
      "Rollback is automatic",
    ],
  },
];

let questions7 = [
  {
    numb: 1,
    question: "Was bedeutet das Verb 'erlassen' im Kontext von Gesetzen?",
    answer: "Ein Gesetz offiziell anordnen oder beschließen",
    options: [
      "Ein Gesetz offiziell anordnen oder beschließen",
      "Etwas vergessen",
      "Jemanden verlassen",
      "Etwas verlieren",
    ],
  },
  {
    numb: 2,
    question: "Was bedeutet 'kaltlassen' umgangssprachlich?",
    answer: "Etwas beeindruckt oder berührt mich nicht",
    options: [
      "Etwas beeindruckt oder berührt mich nicht",
      "Etwas ist sehr kalt",
      "Jemanden ignorieren",
      "Etwas vergessen",
    ],
  },
  {
    numb: 3,
    question: "Was bedeutet 'nachlassen'?",
    answer: "Etwas wird weniger oder schwächer",
    options: [
      "Etwas wird weniger oder schwächer",
      "Etwas wird stärker",
      "Etwas beginnt",
      "Etwas wird lauter",
    ],
  },
  {
    numb: 4,
    question: "Was bedeutet 'stehen lassen', wenn man etwas vergisst?",
    answer: "Etwas irgendwo vergessen, wo es steht",
    options: [
      "Etwas irgendwo vergessen, wo es steht",
      "Etwas aufheben",
      "Etwas verstecken",
      "Etwas verschenken",
    ],
  },
  {
    numb: 5,
    question: "Was bedeutet 'jemanden stehen lassen' im Gespräch?",
    answer: "Jemanden einfach zurücklassen oder ignorieren",
    options: [
      "Jemanden einfach zurücklassen oder ignorieren",
      "Jemanden begrüßen",
      "Jemanden anrufen",
      "Jemanden einladen",
    ],
  },
  {
    numb: 6,
    question: "Was bedeutet 'sitzen lassen' in einer Beziehung?",
    answer: "Den Partner oder die Partnerin verlassen",
    options: [
      "Den Partner oder die Partnerin verlassen",
      "Mit jemandem sitzen",
      "Jemanden besuchen",
      "Jemanden überraschen",
    ],
  },
  {
    numb: 7,
    question: "Was bedeutet 'etwas nicht auf sich sitzen lassen'?",
    answer: "Sich gegen eine Beleidigung oder einen Vorwurf wehren",
    options: [
      "Sich gegen eine Beleidigung oder einen Vorwurf wehren",
      "Sich hinsetzen",
      "Etwas akzeptieren",
      "Etwas vergessen",
    ],
  },
  {
    numb: 8,
    question: "Was bedeutet 'vorlassen' an der Kasse?",
    answer: "Jemandem erlauben, vor einem zu bezahlen",
    options: [
      "Jemandem erlauben, vor einem zu bezahlen",
      "Jemanden hinauswerfen",
      "Jemanden begrüßen",
      "Jemanden anrufen",
    ],
  },
  {
    numb: 9,
    question: "Was bedeutet 'auslassen' im Zusammenhang mit Frühstück?",
    answer: "Das Frühstück weglassen oder überspringen",
    options: [
      "Das Frühstück weglassen oder überspringen",
      "Frühstück doppelt essen",
      "Frühstück verschenken",
      "Frühstück verstecken",
    ],
  },
  {
    numb: 10,
    question: "Was bedeutet 'etwas unterlassen'?",
    answer: "Etwas nicht tun, aufhören oder vermeiden",
    options: [
      "Etwas nicht tun, aufhören oder vermeiden",
      "Etwas wiederholen",
      "Etwas verschenken",
      "Etwas vergessen",
    ],
  },
  // ... 40 weitere Fragen werden hier hinzugefügt ...
  {
    numb: 11,
    question: "Was bedeutet 'jemanden vorlassen'?",
    answer: "Jemandem erlauben, vor einem in der Schlange zu gehen",
    options: [
      "Jemandem erlauben, vor einem in der Schlange zu gehen",
      "Jemanden hinauswerfen",
      "Jemanden begrüßen",
      "Jemanden anrufen",
    ],
  },
  {
    numb: 12,
    question: "Was bedeutet 'erlassen' im Zusammenhang mit Schulden?",
    answer:
      "Jemandem Schulden erlassen bedeutet, dass er sie nicht mehr zahlen muss",
    options: [
      "Jemandem Schulden erlassen bedeutet, dass er sie nicht mehr zahlen muss",
      "Schulden aufnehmen",
      "Schulden bezahlen",
      "Schulden vergessen",
    ],
  },
  {
    numb: 13,
    question: "Was bedeutet 'auslassen' bei einer Prüfung?",
    answer: "Eine Frage überspringen oder nicht beantworten",
    options: [
      "Eine Frage überspringen oder nicht beantworten",
      "Alle Fragen beantworten",
      "Die Prüfung wiederholen",
      "Die Prüfung bestehen",
    ],
  },
  {
    numb: 14,
    question: "Was bedeutet 'auslassen' im technischen Kontext?",
    answer: "Ein Gerät ausschalten und nicht benutzen",
    options: [
      "Ein Gerät ausschalten und nicht benutzen",
      "Ein Gerät einschalten",
      "Ein Gerät reparieren",
      "Ein Gerät kaufen",
    ],
  },
  {
    numb: 15,
    question: "Was bedeutet 'seinen Ärger an jemandem auslassen'?",
    answer:
      "Seinen Ärger an einer anderen Person zeigen, die nichts dafür kann",
    options: [
      "Seinen Ärger an einer anderen Person zeigen, die nichts dafür kann",
      "Sich entschuldigen",
      "Jemanden loben",
      "Jemanden besuchen",
    ],
  },
  {
    numb: 16,
    question: "Was bedeutet 'sich über etwas auslassen'?",
    answer: "Sich ausführlich und meist negativ über etwas äußern",
    options: [
      "Sich ausführlich und meist negativ über etwas äußern",
      "Etwas vergessen",
      "Etwas loben",
      "Etwas verschenken",
    ],
  },
  {
    numb: 17,
    question: "Was bedeutet 'unterlassen' in einer Aufforderung?",
    answer: "Etwas nicht tun oder vermeiden (formell)",
    options: [
      "Etwas nicht tun oder vermeiden (formell)",
      "Etwas wiederholen",
      "Etwas verschenken",
      "Etwas vergessen",
    ],
  },
  {
    numb: 18,
    question: "Was ist 'unterlassene Hilfeleistung'?",
    answer: "Nicht helfen, obwohl es notwendig wäre",
    options: [
      "Nicht helfen, obwohl es notwendig wäre",
      "Jemanden besuchen",
      "Jemanden loben",
      "Jemanden überraschen",
    ],
  },
  {
    numb: 19,
    question: "Was bedeutet 'sein lassen' umgangssprachlich?",
    answer: "Etwas aufhören oder nicht mehr tun",
    options: [
      "Etwas aufhören oder nicht mehr tun",
      "Etwas beginnen",
      "Etwas verschenken",
      "Etwas vergessen",
    ],
  },
  {
    numb: 20,
    question: "Was bedeutet 'veranlassen'?",
    answer:
      "Dafür sorgen, dass etwas gemacht wird oder jemanden zu etwas motivieren",
    options: [
      "Dafür sorgen, dass etwas gemacht wird oder jemanden zu etwas motivieren",
      "Etwas vergessen",
      "Jemanden verlassen",
      "Etwas verlieren",
    ],
  },
  // ... 30 weitere Fragen werden hier hinzugefügt ...
  {
    numb: 21,
    question: "Was bedeutet 'jemanden sitzen lassen'?",
    answer: "Den Partner oder die Partnerin dauerhaft verlassen",
    options: [
      "Den Partner oder die Partnerin dauerhaft verlassen",
      "Jemanden kurz besuchen",
      "Jemanden überraschen",
      "Jemanden anrufen",
    ],
  },
  {
    numb: 22,
    question: "Was bedeutet 'etwas stehen lassen' beim Essen?",
    answer: "Etwas nicht (ganz) aufessen",
    options: [
      "Etwas nicht (ganz) aufessen",
      "Etwas verschenken",
      "Etwas kochen",
      "Etwas bestellen",
    ],
  },
  {
    numb: 23,
    question: "Was bedeutet 'einen Bart stehen lassen'?",
    answer: "Einen Bart wachsen lassen",
    options: [
      "Einen Bart wachsen lassen",
      "Einen Bart rasieren",
      "Einen Bart färben",
      "Einen Bart kaufen",
    ],
  },
  {
    numb: 24,
    question: "Was bedeutet 'jemanden auf sich sitzen lassen'? (Redewendung)",
    answer: "Eine Beleidigung oder einen Vorwurf nicht akzeptieren",
    options: [
      "Eine Beleidigung oder einen Vorwurf nicht akzeptieren",
      "Jemanden besuchen",
      "Jemanden loben",
      "Jemanden überraschen",
    ],
  },
  {
    numb: 25,
    question: "Was bedeutet 'jemanden veranlassen'?",
    answer: "Jemanden zu etwas motivieren oder bewegen",
    options: [
      "Jemanden zu etwas motivieren oder bewegen",
      "Jemanden verlassen",
      "Jemanden überraschen",
      "Jemanden besuchen",
    ],
  },
  {
    numb: 26,
    question: "Was bedeutet 'etwas veranlassen'?",
    answer: "Dafür sorgen, dass etwas gemacht wird (meistens durch andere)",
    options: [
      "Dafür sorgen, dass etwas gemacht wird (meistens durch andere)",
      "Etwas vergessen",
      "Etwas verschenken",
      "Etwas verlieren",
    ],
  },
  {
    numb: 27,
    question: "Was bedeutet 'jemandem eine Strafe erlassen'?",
    answer: "Die Strafe wird aufgehoben, muss nicht mehr gezahlt werden",
    options: [
      "Die Strafe wird aufgehoben, muss nicht mehr gezahlt werden",
      "Die Strafe wird erhöht",
      "Die Strafe wird bezahlt",
      "Die Strafe wird vergessen",
    ],
  },
  {
    numb: 28,
    question: "Was bedeutet 'etwas auslassen' bei einer Liste?",
    answer: "Einen Punkt überspringen oder nicht machen",
    options: [
      "Einen Punkt überspringen oder nicht machen",
      "Alle Punkte machen",
      "Die Liste wiederholen",
      "Die Liste verschenken",
    ],
  },
  {
    numb: 29,
    question:
      "Was bedeutet 'jemanden kalt lassen'? (Beispiel: Kritik lässt ihn kalt)",
    answer: "Etwas beeindruckt oder berührt ihn nicht",
    options: [
      "Etwas beeindruckt oder berührt ihn nicht",
      "Er wird wütend",
      "Er freut sich",
      "Er lacht darüber",
    ],
  },
  {
    numb: 30,
    question: "Was bedeutet 'jemanden vorlassen' im Supermarkt?",
    answer: "Jemandem erlauben, vor einem zu bezahlen",
    options: [
      "Jemandem erlauben, vor einem zu bezahlen",
      "Jemanden hinauswerfen",
      "Jemanden begrüßen",
      "Jemanden anrufen",
    ],
  },
  {
    numb: 31,
    question: "Was bedeutet 'jemandem Gebühren erlassen'?",
    answer: "Die Gebühren müssen nicht mehr gezahlt werden",
    options: [
      "Die Gebühren müssen nicht mehr gezahlt werden",
      "Die Gebühren werden erhöht",
      "Die Gebühren werden bezahlt",
      "Die Gebühren werden vergessen",
    ],
  },
  {
    numb: 32,
    question: "Was bedeutet 'jemandem Schulden erlassen'?",
    answer: "Die Schulden müssen nicht mehr gezahlt werden",
    options: [
      "Die Schulden müssen nicht mehr gezahlt werden",
      "Die Schulden werden erhöht",
      "Die Schulden werden bezahlt",
      "Die Schulden werden vergessen",
    ],
  },
  {
    numb: 33,
    question: "Was bedeutet 'jemanden stehen lassen' im übertragenen Sinn?",
    answer: "Jemanden ignorieren oder nicht beachten",
    options: [
      "Jemanden ignorieren oder nicht beachten",
      "Jemanden besuchen",
      "Jemanden loben",
      "Jemanden überraschen",
    ],
  },
  {
    numb: 34,
    question: "Was bedeutet 'etwas unterlassen' im Kino?",
    answer: "Etwas nicht tun, z.B. nicht rauchen",
    options: [
      "Etwas nicht tun, z.B. nicht rauchen",
      "Etwas wiederholen",
      "Etwas verschenken",
      "Etwas vergessen",
    ],
  },
  {
    numb: 35,
    question: "Was bedeutet 'jemanden zu etwas veranlassen'?",
    answer: "Jemanden motivieren, etwas zu tun",
    options: [
      "Jemanden motivieren, etwas zu tun",
      "Jemanden verlassen",
      "Jemanden überraschen",
      "Jemanden besuchen",
    ],
  },
  {
    numb: 36,
    question: "Was bedeutet 'jemanden im Gespräch stehen lassen'?",
    answer: "Jemanden einfach zurücklassen oder ignorieren",
    options: [
      "Jemanden einfach zurücklassen oder ignorieren",
      "Jemanden begrüßen",
      "Jemanden anrufen",
      "Jemanden einladen",
    ],
  },
  {
    numb: 37,
    question: "Was bedeutet 'jemanden auf der Party stehen lassen'?",
    answer: "Jemanden ignorieren oder alleine lassen",
    options: [
      "Jemanden ignorieren oder alleine lassen",
      "Jemanden begrüßen",
      "Jemanden anrufen",
      "Jemanden einladen",
    ],
  },
  {
    numb: 38,
    question: "Was bedeutet 'jemanden im Zug stehen lassen'?",
    answer: "Etwas im Zug vergessen",
    options: [
      "Etwas im Zug vergessen",
      "Etwas im Zug kaufen",
      "Etwas im Zug verschenken",
      "Etwas im Zug verstecken",
    ],
  },
  {
    numb: 39,
    question: "Was bedeutet 'jemanden auf sich sitzen lassen'? (Redewendung)",
    answer: "Eine Beleidigung nicht akzeptieren und sich wehren",
    options: [
      "Eine Beleidigung nicht akzeptieren und sich wehren",
      "Jemanden besuchen",
      "Jemanden loben",
      "Jemanden überraschen",
    ],
  },
  {
    numb: 40,
    question: "Was bedeutet 'jemanden an der Kasse vorlassen'?",
    answer: "Jemandem erlauben, vor einem zu bezahlen",
    options: [
      "Jemandem erlauben, vor einem zu bezahlen",
      "Jemanden hinauswerfen",
      "Jemanden begrüßen",
      "Jemanden anrufen",
    ],
  },
  {
    numb: 41,
    question: "Was bedeutet 'jemandem eine Verpflichtung erlassen'?",
    answer: "Die Verpflichtung gilt nicht mehr für die Person",
    options: [
      "Die Verpflichtung gilt nicht mehr für die Person",
      "Die Verpflichtung wird erhöht",
      "Die Verpflichtung wird bezahlt",
      "Die Verpflichtung wird vergessen",
    ],
  },
  {
    numb: 42,
    question: "Was bedeutet 'jemandem eine Strafe erlassen'?",
    answer: "Die Strafe muss nicht mehr gezahlt werden",
    options: [
      "Die Strafe muss nicht mehr gezahlt werden",
      "Die Strafe wird erhöht",
      "Die Strafe wird bezahlt",
      "Die Strafe wird vergessen",
    ],
  },
  {
    numb: 43,
    question:
      "Was bedeutet 'jemanden im Gespräch stehen lassen'? (Wortbedeutung)",
    answer: "Jemanden ignorieren oder nicht beachten",
    options: [
      "Jemanden ignorieren oder nicht beachten",
      "Jemanden besuchen",
      "Jemanden loben",
      "Jemanden überraschen",
    ],
  },
  {
    numb: 44,
    question: "Was bedeutet 'jemanden im Supermarkt vorlassen'?",
    answer: "Jemandem erlauben, vor einem zu bezahlen",
    options: [
      "Jemandem erlauben, vor einem zu bezahlen",
      "Jemanden hinauswerfen",
      "Jemanden begrüßen",
      "Jemanden anrufen",
    ],
  },
  {
    numb: 45,
    question: "Was bedeutet 'jemanden zu etwas veranlassen'? (Motivation)",
    answer: "Jemanden motivieren, etwas zu tun",
    options: [
      "Jemanden motivieren, etwas zu tun",
      "Jemanden verlassen",
      "Jemanden überraschen",
      "Jemanden besuchen",
    ],
  },
  {
    numb: 46,
    question: "Was bedeutet 'jemanden im Gespräch stehen lassen'? (Verhalten)",
    answer: "Jemanden einfach zurücklassen oder ignorieren",
    options: [
      "Jemanden einfach zurücklassen oder ignorieren",
      "Jemanden begrüßen",
      "Jemanden anrufen",
      "Jemanden einladen",
    ],
  },
  {
    numb: 47,
    question:
      "Was bedeutet 'jemanden auf der Party stehen lassen'? (Verhalten)",
    answer: "Jemanden ignorieren oder alleine lassen",
    options: [
      "Jemanden ignorieren oder alleine lassen",
      "Jemanden begrüßen",
      "Jemanden anrufen",
      "Jemanden einladen",
    ],
  },
  {
    numb: 48,
    question: "Was bedeutet 'jemanden im Zug stehen lassen'? (Vergessen)",
    answer: "Etwas im Zug vergessen",
    options: [
      "Etwas im Zug vergessen",
      "Etwas im Zug kaufen",
      "Etwas im Zug verschenken",
      "Etwas im Zug verstecken",
    ],
  },
  {
    numb: 49,
    question:
      "Was bedeutet 'jemanden auf sich sitzen lassen'? (Redewendung, Reaktion)",
    answer: "Eine Beleidigung nicht akzeptieren und sich wehren",
    options: [
      "Eine Beleidigung nicht akzeptieren und sich wehren",
      "Jemanden besuchen",
      "Jemanden loben",
      "Jemanden überraschen",
    ],
  },
  {
    numb: 50,
    question: "Was bedeutet 'jemanden an der Kasse vorlassen'? (Handlung)",
    answer: "Jemandem erlauben, vor einem zu bezahlen",
    options: [
      "Jemandem erlauben, vor einem zu bezahlen",
      "Jemanden hinauswerfen",
      "Jemanden begrüßen",
      "Jemanden anrufen",
    ],
  },
];

let questions8 = [
  {
    numb: 1,
    question: "ما معنى فعل 'erlassen' في سياق القوانين؟",
    answer: "إصدار قانون رسميًا أو إقراره",
    options: [
      "إصدار قانون رسميًا أو إقراره",
      "نسيان شيء",
      "ترك شخص",
      "خسارة شيء",
    ],
  },
  {
    numb: 2,
    question: "ما معنى 'kaltlassen' في اللغة العامية؟",
    answer: "عدم التأثر أو عدم الاهتمام بشيء",
    options: [
      "عدم التأثر أو عدم الاهتمام بشيء",
      "شيء بارد جدًا",
      "تجاهل شخص",
      "نسيان شيء",
    ],
  },
  {
    numb: 3,
    question: "ما معنى 'nachlassen'؟",
    answer: "أن يصبح الشيء أقل أو أضعف",
    options: [
      "أن يصبح الشيء أقل أو أضعف",
      "أن يصبح الشيء أقوى",
      "أن يبدأ الشيء",
      "أن يصبح الشيء أعلى صوتًا",
    ],
  },
  {
    numb: 4,
    question: "ما معنى 'stehen lassen' عندما تنسى شيئًا؟",
    answer: "نسيان شيء في مكان ما حيث كان موضوعًا",
    options: [
      "نسيان شيء في مكان ما حيث كان موضوعًا",
      "رفع شيء",
      "إخفاء شيء",
      "إعطاء شيء",
    ],
  },
  {
    numb: 5,
    question: "ما معنى 'jemanden stehen lassen' في المحادثة؟",
    answer: "ترك شخص أو تجاهله فجأة",
    options: ["ترك شخص أو تجاهله فجأة", "تحية شخص", "الاتصال بشخص", "دعوة شخص"],
  },
  {
    numb: 6,
    question: "ما معنى 'sitzen lassen' في العلاقة؟",
    answer: "ترك الشريك أو الشريكة بشكل دائم",
    options: [
      "ترك الشريك أو الشريكة بشكل دائم",
      "الجلوس مع شخص",
      "زيارة شخص",
      "مفاجأة شخص",
    ],
  },
  {
    numb: 7,
    question: "ما معنى 'etwas nicht auf sich sitzen lassen'؟",
    answer: "الدفاع عن النفس ضد إهانة أو اتهام",
    options: [
      "الدفاع عن النفس ضد إهانة أو اتهام",
      "الجلوس",
      "قبول شيء",
      "نسيان شيء",
    ],
  },
  {
    numb: 8,
    question: "ما معنى 'vorlassen' عند الدفع في السوبرماركت؟",
    answer: "السماح لشخص بالدفع قبلك في الطابور",
    options: [
      "السماح لشخص بالدفع قبلك في الطابور",
      "طرد شخص",
      "تحية شخص",
      "الاتصال بشخص",
    ],
  },
  {
    numb: 9,
    question: "ما معنى 'auslassen' فيما يخص الإفطار؟",
    answer: "تخطي أو عدم تناول الإفطار",
    options: [
      "تخطي أو عدم تناول الإفطار",
      "تناول الإفطار مرتين",
      "إعطاء الإفطار",
      "إخفاء الإفطار",
    ],
  },
  {
    numb: 10,
    question: "ما معنى 'unterlassen'؟",
    answer: "عدم القيام بشيء أو التوقف عنه أو تجنبه",
    options: [
      "عدم القيام بشيء أو التوقف عنه أو تجنبه",
      "تكرار شيء",
      "إعطاء شيء",
      "نسيان شيء",
    ],
  },
  // ... 90 more questions will be added here ...
  {
    numb: 11,
    question: "ما معنى 'stehen lassen' عند الحديث عن الطعام؟",
    answer: "ترك الطعام دون أكله بالكامل",
    options: [
      "ترك الطعام دون أكله بالكامل",
      "تناول الطعام بسرعة",
      "إعطاء الطعام لشخص آخر",
      "نسيان الطعام",
    ],
  },
  {
    numb: 12,
    question: "ما معنى 'einen Bart stehen lassen'؟",
    answer: "ترك اللحية تنمو",
    options: ["ترك اللحية تنمو", "حلق اللحية", "صبغ اللحية", "شراء لحية"],
  },
  {
    numb: 13,
    question: "ما معنى 'jemanden sitzen lassen' في العلاقة؟",
    answer: "ترك الشريك أو الشريكة بشكل دائم",
    options: [
      "ترك الشريك أو الشريكة بشكل دائم",
      "الجلوس مع شخص",
      "زيارة شخص",
      "مفاجأة شخص",
    ],
  },
  {
    numb: 14,
    question: "ما معنى 'jemanden vorlassen' في الطابور؟",
    answer: "السماح لشخص بالتقدم قبلك في الطابور",
    options: [
      "السماح لشخص بالتقدم قبلك في الطابور",
      "إخراج شخص من الطابور",
      "تحية شخص",
      "الاتصال بشخص",
    ],
  },
  {
    numb: 15,
    question: "ما معنى 'auslassen' في الامتحان؟",
    answer: "تخطي سؤال أو عدم الإجابة عليه",
    options: [
      "تخطي سؤال أو عدم الإجابة عليه",
      "الإجابة على جميع الأسئلة",
      "إعادة الامتحان",
      "النجاح في الامتحان",
    ],
  },
  {
    numb: 16,
    question: "ما معنى 'auslassen' عند الحديث عن الأجهزة؟",
    answer: "إطفاء الجهاز وعدم استخدامه",
    options: [
      "إطفاء الجهاز وعدم استخدامه",
      "تشغيل الجهاز",
      "إصلاح الجهاز",
      "شراء جهاز جديد",
    ],
  },
  {
    numb: 17,
    question: "ما معنى 'seinen Ärger an jemandem auslassen'؟",
    answer: "إظهار الغضب تجاه شخص آخر ليس السبب الحقيقي",
    options: [
      "إظهار الغضب تجاه شخص آخر ليس السبب الحقيقي",
      "الاعتذار لشخص",
      "مدح شخص",
      "زيارة شخص",
    ],
  },
  {
    numb: 18,
    question: "ما معنى 'sich über etwas auslassen'؟",
    answer: "التحدث بشكل مفصل وغالبًا سلبي عن شيء",
    options: [
      "التحدث بشكل مفصل وغالبًا سلبي عن شيء",
      "نسيان شيء",
      "مدح شيء",
      "إعطاء شيء",
    ],
  },
  {
    numb: 19,
    question: "ما معنى 'unterlassen' في جملة رسمية؟",
    answer: "عدم القيام بشيء أو التوقف عنه (رسمي)",
    options: [
      "عدم القيام بشيء أو التوقف عنه (رسمي)",
      "تكرار شيء",
      "إعطاء شيء",
      "نسيان شيء",
    ],
  },
  {
    numb: 20,
    question: "ما معنى 'unterlassene Hilfeleistung'؟",
    answer: "عدم تقديم المساعدة عندما يكون ذلك ضروريًا",
    options: [
      "عدم تقديم المساعدة عندما يكون ذلك ضروريًا",
      "زيارة شخص",
      "مدح شخص",
      "مفاجأة شخص",
    ],
  },
  // ... 80 more questions will be added here ...
  {
    numb: 21,
    question: "ما معنى 'zulassen' في سياق التعليم؟",
    answer: "السماح أو القبول بشيء (مثلاً القبول في الامتحان)",
    options: [
      "السماح أو القبول بشيء (مثلاً القبول في الامتحان)",
      "رفض شيء",
      "نسيان شيء",
      "إخفاء شيء",
    ],
  },
  {
    numb: 22,
    question: "ما معنى 'verlassen'؟",
    answer: "مغادرة مكان أو ترك شخص",
    options: [
      "مغادرة مكان أو ترك شخص",
      "البقاء في مكان",
      "نسيان شيء",
      "إعطاء شيء",
    ],
  },
  {
    numb: 23,
    question: "ما معنى 'überlassen'؟",
    answer: "ترك شيء لشخص آخر أو تسليمه له",
    options: [
      "ترك شيء لشخص آخر أو تسليمه له",
      "نسيان شيء",
      "إخفاء شيء",
      "شراء شيء",
    ],
  },
  {
    numb: 24,
    question: "ما معنى 'anlassen' عند الحديث عن الأجهزة؟",
    answer: "تشغيل الجهاز أو تركه يعمل",
    options: [
      "تشغيل الجهاز أو تركه يعمل",
      "إطفاء الجهاز",
      "إصلاح الجهاز",
      "شراء جهاز جديد",
    ],
  },
  {
    numb: 25,
    question: "ما معنى 'sich gehen lassen'؟",
    answer: "عدم الاهتمام بالمظهر أو التصرف بحرية زائدة",
    options: [
      "عدم الاهتمام بالمظهر أو التصرف بحرية زائدة",
      "الاهتمام الشديد بالمظهر",
      "نسيان شيء",
      "إعطاء شيء",
    ],
  },
  {
    numb: 26,
    question: "ما معنى 'loslassen'؟",
    answer: "ترك شيء أو شخص وعدم التمسك به",
    options: [
      "ترك شيء أو شخص وعدم التمسك به",
      "التمسك بشيء",
      "نسيان شيء",
      "إعطاء شيء",
    ],
  },
  {
    numb: 27,
    question: "ما معنى 'durchlassen'؟",
    answer: "السماح لشخص بالمرور",
    options: [
      "السماح لشخص بالمرور",
      "منع شخص من المرور",
      "نسيان شيء",
      "إعطاء شيء",
    ],
  },
  {
    numb: 28,
    question: "ما معنى 'nachlassen' في الأسعار؟",
    answer: "انخفاض الأسعار أو تراجعها",
    options: [
      "انخفاض الأسعار أو تراجعها",
      "ارتفاع الأسعار",
      "ثبات الأسعار",
      "نسيان الأسعار",
    ],
  },
  {
    numb: 29,
    question: "ما معنى 'über sich ergehen lassen'؟",
    answer: "تحمل شيء سلبي أو مزعج دون اعتراض",
    options: [
      "تحمل شيء سلبي أو مزعج دون اعتراض",
      "الاعتراض على شيء",
      "نسيان شيء",
      "إعطاء شيء",
    ],
  },
  {
    numb: 30,
    question: "ما معنى 'fallen lassen'؟",
    answer: "إسقاط شيء عمدًا أو تركه يسقط",
    options: [
      "إسقاط شيء عمدًا أو تركه يسقط",
      "إمساك شيء بقوة",
      "نسيان شيء",
      "إعطاء شيء",
    ],
  },
  {
    numb: 31,
    question: "ما معنى 'sich auf etwas einlassen'؟",
    answer: "الموافقة على الدخول في شيء أو تجربة جديدة",
    options: [
      "الموافقة على الدخول في شيء أو تجربة جديدة",
      "رفض شيء جديد",
      "نسيان شيء",
      "إعطاء شيء",
    ],
  },
  {
    numb: 32,
    question: "ما معنى 'sich einlassen auf jemanden'؟",
    answer: "الانخراط أو الدخول في علاقة مع شخص",
    options: [
      "الانخراط أو الدخول في علاقة مع شخص",
      "تجاهل شخص",
      "نسيان شخص",
      "إعطاء شيء",
    ],
  },
  {
    numb: 33,
    question: "ما معنى 'sich niederlassen'؟",
    answer: "الاستقرار في مكان أو السكن فيه",
    options: [
      "الاستقرار في مكان أو السكن فيه",
      "مغادرة مكان",
      "نسيان مكان",
      "إعطاء شيء",
    ],
  },
  {
    numb: 34,
    question: "ما معنى 'sich ablassen'؟",
    answer: "ترك شيء يخرج (مثل الماء من الحوض)",
    options: [
      "ترك شيء يخرج (مثل الماء من الحوض)",
      "إضافة الماء",
      "نسيان الماء",
      "إعطاء الماء",
    ],
  },
  {
    numb: 35,
    question: "ما معنى 'ablassen von etwas'؟",
    answer: "التوقف عن فعل شيء أو التخلي عنه",
    options: [
      "التوقف عن فعل شيء أو التخلي عنه",
      "الاستمرار في فعل شيء",
      "نسيان شيء",
      "إعطاء شيء",
    ],
  },
  {
    numb: 36,
    question: "ما معنى 'sich auslassen über jemanden'؟",
    answer: "التحدث بشكل سلبي عن شخص",
    options: ["التحدث بشكل سلبي عن شخص", "مدح شخص", "نسيان شخص", "إعطاء شيء"],
  },
  {
    numb: 37,
    question: "ما معنى 'sich fallen lassen'؟",
    answer: "الاسترخاء التام أو ترك النفس دون مقاومة",
    options: [
      "الاسترخاء التام أو ترك النفس دون مقاومة",
      "التمسك بشيء",
      "نسيان شيء",
      "إعطاء شيء",
    ],
  },
  {
    numb: 38,
    question: "ما معنى 'sich hängen lassen'؟",
    answer: "الاستسلام أو فقدان الحافز",
    options: [
      "الاستسلام أو فقدان الحافز",
      "التحفيز الشديد",
      "نسيان شيء",
      "إعطاء شيء",
    ],
  },
  {
    numb: 39,
    question: "ما معنى 'sich gehen lassen' في الحياة اليومية؟",
    answer: "عدم الاهتمام بالنظام أو النظافة الشخصية",
    options: [
      "عدم الاهتمام بالنظام أو النظافة الشخصية",
      "الاهتمام الشديد بالنظافة",
      "نسيان شيء",
      "إعطاء شيء",
    ],
  },
  {
    numb: 40,
    question: "ما معنى 'sich einlassen auf ein Abenteuer'؟",
    answer: "الموافقة على خوض مغامرة",
    options: [
      "الموافقة على خوض مغامرة",
      "رفض المغامرة",
      "نسيان المغامرة",
      "إعطاء شيء",
    ],
  },
  {
    numb: 41,
    question: "ما معنى 'Hilfeleistung'؟",
    answer: "تقديم المساعدة",
    options: [
      "تقديم المساعدة",
      "طلب المساعدة",
      "رفض المساعدة",
      "نسيان المساعدة",
    ],
  },
  {
    numb: 42,
    question: "ما معنى 'verlassen'؟",
    answer: "مغادرة مكان أو ترك شخص",
    options: [
      "مغادرة مكان أو ترك شخص",
      "الدخول إلى مكان",
      "زيارة شخص",
      "نسيان شيء",
    ],
  },
  {
    numb: 43,
    question: "ما معنى 'zulassen'؟",
    answer: "السماح بشيء أو قبوله",
    options: ["السماح بشيء أو قبوله", "منع شيء", "نسيان شيء", "رفض شيء"],
  },
  {
    numb: 44,
    question: "ما معنى 'überlassen'؟",
    answer: "ترك شيء لشخص آخر أو تسليمه",
    options: [
      "ترك شيء لشخص آخر أو تسليمه",
      "نسيان شيء",
      "إخفاء شيء",
      "شراء شيء",
    ],
  },
  {
    numb: 45,
    question: "ما معنى 'entlassen'؟",
    answer: "تسريح شخص من العمل أو إطلاق سراحه",
    options: [
      "تسريح شخص من العمل أو إطلاق سراحه",
      "توظيف شخص",
      "زيارة شخص",
      "نسيان شخص",
    ],
  },
  {
    numb: 46,
    question: "ما معنى 'anlassen' عند الحديث عن الأجهزة؟",
    answer: "تشغيل الجهاز أو تركه يعمل",
    options: [
      "تشغيل الجهاز أو تركه يعمل",
      "إطفاء الجهاز",
      "شراء جهاز جديد",
      "إصلاح الجهاز",
    ],
  },
  {
    numb: 47,
    question: "ما معنى 'nachlassen' في الأسعار؟",
    answer: "انخفاض الأسعار أو تراجعها",
    options: [
      "انخفاض الأسعار أو تراجعها",
      "ارتفاع الأسعار",
      "ثبات الأسعار",
      "نسيان الأسعار",
    ],
  },
  {
    numb: 48,
    question: "ما معنى 'über sich ergehen lassen'؟",
    answer: "تحمل شيء سلبي دون مقاومة",
    options: ["تحمل شيء سلبي دون مقاومة", "رفض شيء", "نسيان شيء", "مدح شيء"],
  },
  {
    numb: 49,
    question: "ما معنى 'sich gehen lassen'؟",
    answer: "إهمال النفس أو عدم الاعتناء بالمظهر",
    options: [
      "إهمال النفس أو عدم الاعتناء بالمظهر",
      "الاهتمام بالنفس",
      "شراء ملابس جديدة",
      "زيارة الطبيب",
    ],
  },
  {
    numb: 50,
    question: "ما معنى 'loslassen'؟",
    answer: "ترك شيء أو شخص وعدم التمسك به",
    options: [
      "ترك شيء أو شخص وعدم التمسك به",
      "التمسك بشيء",
      "نسيان شيء",
      "شراء شيء",
    ],
  },
  {
    numb: 51,
    question: "ما معنى 'durchlassen' في الامتحان؟",
    answer: "السماح لشخص بالنجاح أو المرور",
    options: [
      "السماح لشخص بالنجاح أو المرور",
      "منع شخص من النجاح",
      "نسيان الامتحان",
      "إعطاء شيء",
    ],
  },
  {
    numb: 52,
    question: "ما معنى 'entlassen' في المستشفى؟",
    answer: "خروج المريض من المستشفى بعد الشفاء",
    options: [
      "خروج المريض من المستشفى بعد الشفاء",
      "إدخال المريض إلى المستشفى",
      "نسيان المريض",
      "إعطاء شيء",
    ],
  },
  {
    numb: 53,
    question: "ما معنى 'freilassen' في السجن؟",
    answer: "إطلاق سراح سجين",
    options: ["إطلاق سراح سجين", "سجن شخص جديد", "نسيان السجين", "إعطاء شيء"],
  },
  {
    numb: 54,
    question: "ما معنى 'anlassen' في السيارة؟",
    answer: "تشغيل محرك السيارة",
    options: [
      "تشغيل محرك السيارة",
      "إطفاء المحرك",
      "نسيان السيارة",
      "إعطاء شيء",
    ],
  },
  {
    numb: 55,
    question: "ما معنى 'auslassen' في الرياضة؟",
    answer: "تخطي تمرين أو جزء من التدريب",
    options: [
      "تخطي تمرين أو جزء من التدريب",
      "أداء جميع التمارين",
      "نسيان التمرين",
      "إعطاء شيء",
    ],
  },
  {
    numb: 56,
    question: "ما معنى 'nachlassen' في الجهد؟",
    answer: "انخفاض الجهد أو الحماس",
    options: [
      "انخفاض الجهد أو الحماس",
      "زيادة الجهد",
      "ثبات الجهد",
      "نسيان الجهد",
    ],
  },
  {
    numb: 57,
    question: "ما معنى 'erlassen' في العقوبات؟",
    answer: "إلغاء العقوبة أو إعفاء منها",
    options: [
      "إلغاء العقوبة أو إعفاء منها",
      "فرض العقوبة",
      "نسيان العقوبة",
      "إعطاء العقوبة",
    ],
  },
  {
    numb: 58,
    question: "ما معنى 'verlassen' في الصداقة؟",
    answer: "ترك صديق أو إنهاء علاقة صداقة",
    options: [
      "ترك صديق أو إنهاء علاقة صداقة",
      "بدء صداقة جديدة",
      "نسيان الصديق",
      "إعطاء شيء",
    ],
  },
  {
    numb: 59,
    question: "ما معنى 'entlassen' في العمل؟",
    answer: "تسريح موظف من العمل",
    options: [
      "تسريح موظف من العمل",
      "توظيف موظف جديد",
      "نسيان الموظف",
      "إعطاء شيء",
    ],
  },
  {
    numb: 60,
    question: "ما معنى 'freilassen' في الطبيعة؟",
    answer: "إطلاق سراح حيوان إلى البرية",
    options: [
      "إطلاق سراح حيوان إلى البرية",
      "إمساك الحيوان",
      "نسيان الحيوان",
      "إعطاء شيء",
    ],
  },
  {
    numb: 61,
    question: "ما معنى 'überlassen' في العمل؟",
    answer: "تفويض مهمة أو مسؤولية لشخص آخر",
    options: [
      "تفويض مهمة أو مسؤولية لشخص آخر",
      "القيام بالمهمة بنفسك",
      "نسيان المهمة",
      "إعطاء شيء",
    ],
  },
  {
    numb: 62,
    question: "ما معنى 'zulassen' في الامتحان؟",
    answer: "السماح بالمشاركة في الامتحان",
    options: [
      "السماح بالمشاركة في الامتحان",
      "منع من الامتحان",
      "نسيان الامتحان",
      "إعطاء شيء",
    ],
  },
  {
    numb: 63,
    question: "ما معنى 'unterlassen' في القانون؟",
    answer: "عدم القيام بفعل كان يجب القيام به",
    options: [
      "عدم القيام بفعل كان يجب القيام به",
      "القيام بالفعل",
      "نسيان الفعل",
      "إعطاء شيء",
    ],
  },
  {
    numb: 64,
    question: "ما معنى 'erlassen' في الضرائب؟",
    answer: "إعفاء من دفع الضرائب",
    options: [
      "إعفاء من دفع الضرائب",
      "زيادة الضرائب",
      "نسيان الضرائب",
      "إعطاء الضرائب",
    ],
  },
  {
    numb: 65,
    question: "ما معنى 'überlassen' في الحياة اليومية؟",
    answer: "ترك شيء لشخص آخر ليقرر بشأنه",
    options: [
      "ترك شيء لشخص آخر ليقرر بشأنه",
      "اتخاذ القرار بنفسك",
      "نسيان القرار",
      "إعطاء شيء",
    ],
  },
  {
    numb: 66,
    question: "ما معنى 'loslassen' في العلاقات؟",
    answer: "التخلي عن شخص أو علاقة",
    options: [
      "التخلي عن شخص أو علاقة",
      "التمسك بالعلاقة",
      "نسيان العلاقة",
      "إعطاء شيء",
    ],
  },
  {
    numb: 67,
    question: "ما معنى 'anlassen' في الحاسوب؟",
    answer: "تشغيل الحاسوب أو تركه يعمل",
    options: [
      "تشغيل الحاسوب أو تركه يعمل",
      "إطفاء الحاسوب",
      "نسيان الحاسوب",
      "إعطاء شيء",
    ],
  },
  {
    numb: 68,
    question: "ما معنى 'auslassen' في الطبخ؟",
    answer: "تجاهل مكون أو عدم إضافته",
    options: [
      "تجاهل مكون أو عدم إضافته",
      "إضافة كل المكونات",
      "نسيان المكون",
      "إعطاء شيء",
    ],
  },
  {
    numb: 69,
    question: "ما معنى 'nachlassen' في المطر؟",
    answer: "تراجع أو توقف المطر تدريجيًا",
    options: [
      "تراجع أو توقف المطر تدريجيًا",
      "زيادة المطر",
      "ثبات المطر",
      "نسيان المطر",
    ],
  },
  {
    numb: 70,
    question: "ما معنى 'erlassen' في القوانين الجديدة؟",
    answer: "إصدار قانون جديد رسميًا",
    options: [
      "إصدار قانون جديد رسميًا",
      "إلغاء القانون",
      "نسيان القانون",
      "إعطاء القانون",
    ],
  },
];
let questions9 = [
  {
    numb: 1,
    question: `What is the output of the following code?\n\nfunction App() {\n  return <h1>Hello React</h1>;\n}`,
    answer: "Displays the text Hello React on the web page",
    options: [
      "Throws an error",
      "Displays the text Hello React on the web page",
      "Displays nothing",
      "Displays the text Hello World on the web page",
    ],
  },
  {
    numb: 2,
    question: `What is the typical root element in a React app?\n\nfunction App() {\n  return <div>...</div>;\n}`,
    answer: "div",
    options: ["span", "section", "div", "main"],
  },
  {
    numb: 3,
    question: `What is the output of the following code?\n\nfunction App() {\n  return <button>Click me</button>;\n}`,
    answer: "A button with the text Click me",
    options: [
      "A button with the text Click me",
      "Nothing",
      "Just text",
      "An input field",
    ],
  },
  {
    numb: 4,
    question: `What is the output of the following code?\n\nfunction App() {\n  return <input type=\"text\" />;\n}`,
    answer: "A text input field",
    options: ["A button", "A text input field", "Just text", "Nothing"],
  },
  {
    numb: 5,
    question: `What is the output of the following code?\n\nfunction App() {\n  return <img src=\"logo.png\" alt=\"logo\" />;\n}`,
    answer: "An image with alt text logo",
    options: [
      "A button",
      "Just text",
      "An image with alt text logo",
      "Nothing",
    ],
  },
  {
    numb: 6,
    question: `What does the following code render?\n\nfunction App() {\n  return <p>Welcome!</p>;\n}`,
    answer: "A paragraph with the text Welcome!",
    options: [
      "A paragraph with the text Welcome!",
      "A heading",
      "A button",
      "Nothing",
    ],
  },
  {
    numb: 7,
    question: `What is the output?\n\nfunction App() {\n  return <ul><li>One</li><li>Two</li></ul>;\n}`,
    answer: "An unordered list with two items: One and Two",
    options: [
      "A button",
      "An unordered list with two items: One and Two",
      "A single list item",
      "Nothing",
    ],
  },
  {
    numb: 8,
    question: `What does this code display?\n\nfunction App() {\n  return <span>React</span>;\n}`,
    answer: "A span with the text React",
    options: [
      "A span with the text React",
      "A div with the text React",
      "Nothing",
      "A button",
    ],
  },
  {
    numb: 9,
    question: `What is rendered?\n\nfunction App() {\n  return <h2>Quiz</h2>;\n}`,
    answer: "A level 2 heading with the text Quiz",
    options: [
      "A level 2 heading with the text Quiz",
      "A paragraph",
      "A button",
      "Nothing",
    ],
  },
  {
    numb: 10,
    question: `What is the output?\n\nfunction App() {\n  return <input type=\"checkbox\" />;\n}`,
    answer: "A checkbox input field",
    options: [
      "A button",
      "A checkbox input field",
      "A text input field",
      "Nothing",
    ],
  },
  {
    numb: 11,
    question: `What does this code render?\n\nfunction App() {\n  return <form><button>Send</button></form>;\n}`,
    answer: "A form with a button labeled Send",
    options: [
      "A form with a button labeled Send",
      "A button only",
      "A form with no button",
      "Nothing",
    ],
  },
  {
    numb: 12,
    question: `What is the output?\n\nfunction App() {\n  return <hr />;\n}`,
    answer: "A horizontal line",
    options: ["A horizontal line", "A vertical line", "Nothing", "A button"],
  },
  {
    numb: 13,
    question: `What does this code display?\n\nfunction App() {\n  return <label>Name</label>;\n}`,
    answer: "A label with the text Name",
    options: ["A button", "A label with the text Name", "A heading", "Nothing"],
  },
  {
    numb: 14,
    question: `What is rendered?\n\nfunction App() {\n  return <select><option>One</option></select>;\n}`,
    answer: "A dropdown with one option: One",
    options: [
      "A dropdown with one option: One",
      "A text input field",
      "A button",
      "Nothing",
    ],
  },
  {
    numb: 15,
    question: `What is the output?\n\nfunction App() {\n  return <textarea>Type here</textarea>;\n}`,
    answer: "A textarea with the text Type here",
    options: [
      "A textarea with the text Type here",
      "A text input field",
      "A button",
      "Nothing",
    ],
  },
  {
    numb: 16,
    question: `What does this code render?\n\nfunction App() {\n  return <footer>Footer</footer>;\n}`,
    answer: "A footer with the text Footer",
    options: [
      "A button",
      "A footer with the text Footer",
      "A header",
      "Nothing",
    ],
  },
  {
    numb: 17,
    question: `What is the output?\n\nfunction App() {\n  return <header>Header</header>;\n}`,
    answer: "A header with the text Header",
    options: [
      "A header with the text Header",
      "A footer",
      "A button",
      "Nothing",
    ],
  },
  {
    numb: 18,
    question: `What does this code display?\n\nfunction App() {\n  return <nav>Menu</nav>;\n}`,
    answer: "A nav element with the text Menu",
    options: [
      "A nav element with the text Menu",
      "A button",
      "A header",
      "Nothing",
    ],
  },
  {
    numb: 19,
    question: `What is rendered?\n\nfunction App() {\n  return <main>Main Content</main>;\n}`,
    answer: "A main element with the text Main Content",
    options: [
      "A button",
      "A main element with the text Main Content",
      "A header",
      "Nothing",
    ],
  },
  {
    numb: 20,
    question: `What is the output?\n\nfunction App() {\n  return <strong>Bold</strong>;\n}`,
    answer: "A bold text Bold",
    options: ["A bold text Bold", "A button", "A header", "Nothing"],
  },
  {
    numb: 21,
    question: `What does this code render?\n\nfunction App() {\n  return <em>Italic</em>;\n}`,
    answer: "An italic text Italic",
    options: ["A button", "An italic text Italic", "A header", "Nothing"],
  },
  {
    numb: 22,
    question: `What is the output?\n\nfunction App() {\n  return <small>Small</small>;\n}`,
    answer: "A small text Small",
    options: ["A button", "A header", "A small text Small", "Nothing"],
  },
  {
    numb: 23,
    question: `What does this code display?\n\nfunction App() {\n  return <abbr title=\"World Health Organization\">WHO</abbr>;\n}`,
    answer: "An abbreviation WHO with a title World Health Organization",
    options: [
      "A button",
      "An abbreviation WHO with a title World Health Organization",
      "A header",
      "Nothing",
    ],
  },
  {
    numb: 24,
    question: `What is rendered?\n\nfunction App() {\n  return <code>let x = 5;</code>;\n}`,
    answer: "A code element displaying let x = 5;",
    options: [
      "A code element displaying let x = 5;",
      "A button",
      "A header",
      "Nothing",
    ],
  },
  {
    numb: 25,
    question: `What is the output?\n\nfunction App() {\n  return <pre>Line1\nLine2</pre>;\n}`,
    answer: "A preformatted block with Line1 and Line2 on separate lines",
    options: [
      "A preformatted block with Line1 and Line2 on separate lines",
      "A button",
      "A header",
      "Nothing",
    ],
  },
  {
    numb: 26,
    question: `What does this code render?\n\nfunction App() {\n  return <mark>Highlight</mark>;\n}`,
    answer: "A highlighted text Highlight",
    options: [
      "A highlighted text Highlight",
      "A button",
      "A header",
      "Nothing",
    ],
  },
  {
    numb: 27,
    question: `What is the output?\n\nfunction App() {\n  return <del>Remove</del>;\n}`,
    answer: "A deleted (strikethrough) text Remove",
    options: [
      "A deleted (strikethrough) text Remove",
      "A button",
      "A header",
      "Nothing",
    ],
  },
  {
    numb: 28,
    question: `What does this code display?\n\nfunction App() {\n  return <ins>Inserted</ins>;\n}`,
    answer: "An inserted (underlined) text Inserted",
    options: [
      "A button",
      "A header",
      "Nothing",
      "An inserted (underlined) text Inserted",
    ],
  },
  {
    numb: 29,
    question: `What is rendered?\n\nfunction App() {\n  return <sup>2</sup>;\n}`,
    answer: "A superscript 2",
    options: ["A button", "A header", "A superscript 2", "Nothing"],
  },
  {
    numb: 30,
    question: `What is the output?\n\nfunction App() {\n  return <sub>2</sub>;\n}`,
    answer: "A subscript 2",
    options: ["A subscript 2", "A button", "A header", "Nothing"],
  },
  {
    numb: 31,
    question: `What does this code render?\n\nfunction App() {\n  return <time dateTime=\"2025-05-22\">Today</time>;\n}`,
    answer: "A time element with the text Today",
    options: [
      "A button",
      "A time element with the text Today",
      "A header",
      "Nothing",
    ],
  },
  {
    numb: 32,
    question: `What is the output?\n\nfunction App() {\n  return <progress value={50} max={100}></progress>;\n}`,
    answer: "A progress bar at 50%",
    options: ["A progress bar at 50%", "A button", "A header", "Nothing"],
  },
  {
    numb: 33,
    question: `What does this code display?\n\nfunction App() {\n  return <meter value={0.7}>70%</meter>;\n}`,
    answer: "A meter element showing 70%",
    options: ["A button", "A header", "A meter element showing 70%", "Nothing"],
  },
  {
    numb: 34,
    question: `What is rendered?\n\nfunction App() {\n  return <fieldset><legend>Info</legend></fieldset>;\n}`,
    answer: "A fieldset with a legend Info",
    options: [
      "A fieldset with a legend Info",
      "A button",
      "A header",
      "Nothing",
    ],
  },
  {
    numb: 35,
    question: `What is the output?\n\nfunction App() {\n  return <table><tbody><tr><td>Cell</td></tr></tbody></table>;\n}`,
    answer: "A table with one cell containing Cell",
    options: [
      "A button",
      "A table with one cell containing Cell",
      "A header",
      "Nothing",
    ],
  },
  {
    numb: 36,
    question: `What does this code render?\n\nfunction App() {\n  return <caption>Table Caption</caption>;\n}`,
    answer: "A caption Table Caption for a table",
    options: [
      "A caption Table Caption for a table",
      "A button",
      "A header",
      "Nothing",
    ],
  },
  {
    numb: 37,
    question: `What is the output?\n\nfunction App() {\n  return <thead><tr><th>Head</th></tr></thead>;\n}`,
    answer: "A table head with one column Head",
    options: [
      "A button",
      "A table head with one column Head",
      "A header",
      "Nothing",
    ],
  },
  {
    numb: 38,
    question: `What does this code display?\n\nfunction App() {\n  return <tbody><tr><td>Body</td></tr></tbody>;\n}`,
    answer: "A table body with one row Body",
    options: [
      "A button",
      "A header",
      "A table body with one row Body",
      "Nothing",
    ],
  },
  {
    numb: 39,
    question: `What is rendered?\n\nfunction App() {\n  return <tfoot><tr><td>Foot</td></tr></tfoot>;\n}`,
    answer: "A table foot with one row Foot",
    options: [
      "A table foot with one row Foot",
      "A button",
      "A header",
      "Nothing",
    ],
  },
  {
    numb: 40,
    question: `What is the output?\n\nfunction App() {\n  return <colgroup><col /></colgroup>;\n}`,
    answer: "A colgroup element for table columns",
    options: [
      "A button",
      "A header",
      "A colgroup element for table columns",
      "Nothing",
    ],
  },
  {
    numb: 41,
    question: `What does this code render?\n\nfunction App() {\n  return <dl><dt>Term</dt><dd>Definition</dd></dl>;\n}`,
    answer: "A description list with one term and definition",
    options: [
      "A description list with one term and definition",
      "A button",
      "A header",
      "Nothing",
    ],
  },
  {
    numb: 42,
    question: `What is the output?\n\nfunction App() {\n  return <blockquote>Quote</blockquote>;\n}`,
    answer: "A blockquote with the text Quote",
    options: [
      "A button",
      "A header",
      "A blockquote with the text Quote",
      "Nothing",
    ],
  },
  {
    numb: 43,
    question: `What does this code display?\n\nfunction App() {\n  return <cite>Reference</cite>;\n}`,
    answer: "A citation Reference",
    options: ["A citation Reference", "A button", "A header", "Nothing"],
  },
  {
    numb: 44,
    question: `What is rendered?\n\nfunction App() {\n  return <b>Bold</b>;\n}`,
    answer: "A bold text Bold",
    options: ["A button", "A bold text Bold", "A header", "Nothing"],
  },
  {
    numb: 45,
    question: `What is the output?\n\nfunction App() {\n  return <i>Italic</i>;\n}`,
    answer: "An italic text Italic",
    options: ["A button", "A header", "An italic text Italic", "Nothing"],
  },
  {
    numb: 46,
    question: `What does this code render?\n\nfunction App() {\n  return <u>Underline</u>;\n}`,
    answer: "An underlined text Underline",
    options: [
      "A button",
      "A header",
      "Nothing",
      "An underlined text Underline",
    ],
  },
  {
    numb: 47,
    question: `What is the output?\n\nfunction App() {\n  return <s>Strike</s>;\n}`,
    answer: "A strikethrough text Strike",
    options: ["A strikethrough text Strike", "A button", "A header", "Nothing"],
  },
  {
    numb: 48,
    question: `What does this code display?\n\nfunction App() {\n  return <br />;\n}`,
    answer: "A line break",
    options: ["A button", "A line break", "A header", "Nothing"],
  },
  {
    numb: 49,
    question: `What is rendered?\n\nfunction App() {\n  return <wbr />;\n}`,
    answer: "A word break opportunity",
    options: ["A button", "A header", "A word break opportunity", "Nothing"],
  },
  {
    numb: 50,
    question: `What is the output?\n\nfunction App() {\n  return <div></div>;\n}`,
    answer: "An empty div element",
    options: ["A button", "A header", "Nothing", "An empty div element"],
  },
];

let questions10 = [
  {
    numb: 1,
    question: "What is the Virtual DOM in React?",
    answer: "A lightweight copy of the real DOM used for efficient updates",
    options: [
      "A lightweight copy of the real DOM used for efficient updates",
      "A browser API for rendering HTML",
      "A server-side database",
      "A CSS styling method",
    ],
  },
  {
    numb: 2,
    question: "What is a React component?",
    answer: "A reusable piece of UI",
    options: [
      "A reusable piece of UI",
      "A database table",
      "A CSS class",
      "A JavaScript variable",
    ],
  },
  {
    numb: 3,
    question: "Which hook is used to manage state in a functional component?",
    answer: "useState",
    options: ["useState", "useEffect", "useContext", "useReducer"],
  },
  {
    numb: 4,
    question: "What does JSX stand for?",
    answer: "JavaScript XML",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JavaScript Extension",
      "JavaScript XHR",
    ],
  },
  {
    numb: 5,
    question: "How do you pass data from a parent to a child component?",
    answer: "Using props",
    options: ["Using props", "Using state", "Using context", "Using refs"],
  },
  {
    numb: 6,
    question: "What is the purpose of the useEffect hook?",
    answer: "To perform side effects in function components",
    options: [
      "To perform side effects in function components",
      "To manage state",
      "To create refs",
      "To render JSX",
    ],
  },
  {
    numb: 7,
    question: "What is a controlled component in React?",
    answer: "A component whose form data is handled by React state",
    options: [
      "A component whose form data is handled by React state",
      "A component that controls other components",
      "A component with no state",
      "A component rendered on the server",
    ],
  },
  {
    numb: 8,
    question: "How do you update state in a functional component?",
    answer: "By calling the state updater function returned by useState",
    options: [
      "By calling the state updater function returned by useState",
      "By directly modifying the state variable",
      "By using setProps",
      "By calling forceUpdate()",
    ],
  },
  {
    numb: 9,
    question: "What is prop drilling?",
    answer: "Passing data through many nested components via props",
    options: [
      "Passing data through many nested components via props",
      "Using context to share data",
      "Updating state in a reducer",
      "Passing refs between components",
    ],
  },
  {
    numb: 10,
    question: "What is the key prop used for in lists?",
    answer:
      "To help React identify which items have changed, are added, or are removed",
    options: [
      "To help React identify which items have changed, are added, or are removed",
      "To set a unique ID for each component",
      "To pass data to child components",
      "To style list items",
    ],
  },
  {
    numb: 11,
    question: "What is the difference between state and props in React?",
    answer:
      "State is managed within the component, props are passed from parent to child",
    options: [
      "State is managed within the component, props are passed from parent to child",
      "Props are mutable, state is immutable",
      "State is for styling, props are for logic",
      "There is no difference",
    ],
  },
  {
    numb: 12,
    question: "What does lifting state up mean in React?",
    answer: "Moving state to a common ancestor to share it between components",
    options: [
      "Moving state to a common ancestor to share it between components",
      "Passing state down as props",
      "Using context for state",
      "Using Redux for state",
    ],
  },
  {
    numb: 13,
    question: "What is the use of useContext hook?",
    answer: "To access context values in functional components",
    options: [
      "To access context values in functional components",
      "To manage state",
      "To fetch data",
      "To create refs",
    ],
  },
  {
    numb: 14,
    question: "What is a pure component in React?",
    answer:
      "A component that renders the same output for the same props and state",
    options: [
      "A component that renders the same output for the same props and state",
      "A component with no props",
      "A component with only state",
      "A component that fetches data",
    ],
  },
  {
    numb: 15,
    question: "What is the use of useRef hook?",
    answer: "To persist values across renders and access DOM elements",
    options: [
      "To persist values across renders and access DOM elements",
      "To manage state",
      "To fetch data",
      "To update props",
    ],
  },
  {
    numb: 16,
    question: "What is the default value of a React component's state?",
    answer: "It is set in the constructor or useState hook",
    options: [
      "It is set in the constructor or useState hook",
      "It is always null",
      "It is always an empty object",
      "It is always undefined",
    ],
  },
  {
    numb: 17,
    question: "What is the use of React.Fragment?",
    answer: "To group multiple elements without adding extra nodes to the DOM",
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To create a new component",
      "To fetch data",
      "To manage state",
    ],
  },
  {
    numb: 18,
    question: "What is reconciliation in React?",
    answer: "The process of updating the DOM to match the React elements",
    options: [
      "The process of updating the DOM to match the React elements",
      "The process of fetching data",
      "The process of creating components",
      "The process of updating state",
    ],
  },
  {
    numb: 19,
    question: "What is the use of keys in React lists?",
    answer:
      "To help React identify which items have changed, are added, or are removed",
    options: [
      "To help React identify which items have changed, are added, or are removed",
      "To style list items",
      "To pass data to child components",
      "To set a unique ID for each component",
    ],
  },
  {
    numb: 20,
    question: "What is the use of useMemo hook?",
    answer:
      "To memoize expensive calculations and avoid unnecessary recalculations",
    options: [
      "To memoize expensive calculations and avoid unnecessary recalculations",
      "To manage state",
      "To fetch data",
      "To update props",
    ],
  },
  {
    numb: 21,
    question: "What is the use of useCallback hook?",
    answer: "To memoize callback functions and prevent unnecessary re-renders",
    options: [
      "To memoize callback functions and prevent unnecessary re-renders",
      "To manage state",
      "To fetch data",
      "To update props",
    ],
  },
  {
    numb: 22,
    question: "What is the difference between useEffect and useLayoutEffect?",
    answer:
      "useEffect runs after paint, useLayoutEffect runs synchronously after all DOM mutations",
    options: [
      "useEffect runs after paint, useLayoutEffect runs synchronously after all DOM mutations",
      "There is no difference",
      "useEffect is for state, useLayoutEffect is for props",
      "useLayoutEffect is for server-side rendering",
    ],
  },
  {
    numb: 23,
    question: "What is the purpose of shouldComponentUpdate?",
    answer: "To control whether a component should re-render or not",
    options: [
      "To control whether a component should re-render or not",
      "To fetch data",
      "To update state",
      "To update props",
    ],
  },
  {
    numb: 24,
    question: "What is the use of React.PureComponent?",
    answer:
      "It implements shouldComponentUpdate with a shallow prop and state comparison",
    options: [
      "It implements shouldComponentUpdate with a shallow prop and state comparison",
      "It is the same as React.Component",
      "It is used for context",
      "It is used for refs",
    ],
  },
  {
    numb: 25,
    question: "What is the use of React.memo?",
    answer:
      "To memoize functional components and prevent unnecessary re-renders",
    options: [
      "To memoize functional components and prevent unnecessary re-renders",
      "To manage state",
      "To fetch data",
      "To update props",
    ],
  },
  {
    numb: 26,
    question: "What is the use of error boundaries in React?",
    answer:
      "To catch JavaScript errors in child components and display a fallback UI",
    options: [
      "To catch JavaScript errors in child components and display a fallback UI",
      "To manage state",
      "To fetch data",
      "To update props",
    ],
  },
  {
    numb: 27,
    question:
      "What lifecycle method is called after a component is rendered for the first time?",
    answer: "componentDidMount",
    options: [
      "componentDidMount",
      "componentWillUnmount",
      "componentDidUpdate",
      "shouldComponentUpdate",
    ],
  },
  {
    numb: 28,
    question: "What is the use of componentWillUnmount?",
    answer: "To perform cleanup before a component is removed from the DOM",
    options: [
      "To perform cleanup before a component is removed from the DOM",
      "To fetch data",
      "To update state",
      "To update props",
    ],
  },
  {
    numb: 29,
    question: "What is the use of getDerivedStateFromProps?",
    answer: "To update state based on changes in props before rendering",
    options: [
      "To update state based on changes in props before rendering",
      "To fetch data",
      "To update props",
      "To update refs",
    ],
  },
  {
    numb: 30,
    question: "What is the use of getSnapshotBeforeUpdate?",
    answer: "To capture information from the DOM before it is changed",
    options: [
      "To capture information from the DOM before it is changed",
      "To fetch data",
      "To update state",
      "To update props",
    ],
  },
  {
    numb: 31,
    question: "What is the use of React.StrictMode?",
    answer: "To highlight potential problems in an application",
    options: [
      "To highlight potential problems in an application",
      "To manage state",
      "To fetch data",
      "To update props",
    ],
  },
  {
    numb: 32,
    question: "What is the use of React.lazy?",
    answer: "To enable code-splitting and lazy loading of components",
    options: [
      "To enable code-splitting and lazy loading of components",
      "To manage state",
      "To fetch data",
      "To update props",
    ],
  },
  {
    numb: 33,
    question: "What is the use of Suspense in React?",
    answer: "To display a fallback UI while waiting for lazy-loaded components",
    options: [
      "To display a fallback UI while waiting for lazy-loaded components",
      "To manage state",
      "To fetch data",
      "To update props",
    ],
  },
  {
    numb: 34,
    question: "What is the use of useReducer hook?",
    answer: "To manage complex state logic in functional components",
    options: [
      "To manage complex state logic in functional components",
      "To fetch data",
      "To update props",
      "To update refs",
    ],
  },
  {
    numb: 35,
    question: "What is the use of useImperativeHandle hook?",
    answer:
      "To customize the instance value that is exposed to parent components when using refs",
    options: [
      "To customize the instance value that is exposed to parent components when using refs",
      "To manage state",
      "To fetch data",
      "To update props",
    ],
  },
  {
    numb: 36,
    question: "What is the use of useDebugValue hook?",
    answer: "To display a label for custom hooks in React DevTools",
    options: [
      "To display a label for custom hooks in React DevTools",
      "To manage state",
      "To fetch data",
      "To update props",
    ],
  },
  {
    numb: 37,
    question: "What is the use of forwardRef in React?",
    answer: "To pass refs to child components",
    options: [
      "To pass refs to child components",
      "To manage state",
      "To fetch data",
      "To update props",
    ],
  },
  {
    numb: 38,
    question: "What is the use of defaultProps in React?",
    answer: "To set default values for props",
    options: [
      "To set default values for props",
      "To manage state",
      "To fetch data",
      "To update refs",
    ],
  },
  {
    numb: 39,
    question: "What is the use of propTypes in React?",
    answer: "To validate the types of props passed to a component",
    options: [
      "To validate the types of props passed to a component",
      "To manage state",
      "To fetch data",
      "To update refs",
    ],
  },
  {
    numb: 40,
    question: "What is the use of context API in React?",
    answer: "To share data between components without passing props manually",
    options: [
      "To share data between components without passing props manually",
      "To manage state",
      "To fetch data",
      "To update refs",
    ],
  },
  {
    numb: 41,
    question: "What is the use of portals in React?",
    answer:
      "To render children into a DOM node outside the parent component hierarchy",
    options: [
      "To render children into a DOM node outside the parent component hierarchy",
      "To manage state",
      "To fetch data",
      "To update refs",
    ],
  },
  {
    numb: 42,
    question: "What is the use of ReactDOM.hydrate?",
    answer: "To attach event listeners to server-rendered markup",
    options: [
      "To attach event listeners to server-rendered markup",
      "To manage state",
      "To fetch data",
      "To update refs",
    ],
  },
  {
    numb: 43,
    question: "What is the use of ReactDOM.createPortal?",
    answer:
      "To render children into a DOM node outside the parent component hierarchy",
    options: [
      "To render children into a DOM node outside the parent component hierarchy",
      "To manage state",
      "To fetch data",
      "To update refs",
    ],
  },
  {
    numb: 44,
    question: "What is the use of ReactDOM.render?",
    answer: "To render a React element into the DOM",
    options: [
      "To render a React element into the DOM",
      "To manage state",
      "To fetch data",
      "To update refs",
    ],
  },
  {
    numb: 45,
    question: "What is the use of ReactDOM.unmountComponentAtNode?",
    answer: "To remove a mounted React component from the DOM",
    options: [
      "To remove a mounted React component from the DOM",
      "To manage state",
      "To fetch data",
      "To update refs",
    ],
  },
  {
    numb: 46,
    question: "What is the use of React.Children.map?",
    answer: "To iterate over children and manipulate them",
    options: [
      "To iterate over children and manipulate them",
      "To manage state",
      "To fetch data",
      "To update refs",
    ],
  },
  {
    numb: 47,
    question: "What is the use of React.Children.only?",
    answer: "To ensure that only one child is passed to a component",
    options: [
      "To ensure that only one child is passed to a component",
      "To manage state",
      "To fetch data",
      "To update refs",
    ],
  },
  {
    numb: 48,
    question: "What is the use of React.cloneElement?",
    answer: "To clone and return a new React element",
    options: [
      "To clone and return a new React element",
      "To manage state",
      "To fetch data",
      "To update refs",
    ],
  },
  {
    numb: 49,
    question: "What is the use of React.isValidElement?",
    answer: "To check if a value is a valid React element",
    options: [
      "To check if a value is a valid React element",
      "To manage state",
      "To fetch data",
      "To update refs",
    ],
  },
  {
    numb: 50,
    question: "What is the use of React.forwardRef?",
    answer: "To forward refs to child components",
    options: [
      "To forward refs to child components",
      "To manage state",
      "To fetch data",
      "To update refs",
    ],
  },
  // 50 more questions will be added in the next step ...
];

let questions = [
  {
    numb: 1,
    question: "ما معنى شو بدنا نعمل هيك الوضع؟",
    answer: "aber nützt ja nichts",
    options: [
      "aber es ist nicht so schlimm",
      "aber nützt ja nichts",
      "aber es ist nicht so wichtig",
      "aber es ist nicht so einfach",
    ],
  },
  {
    numb: 2,
    question: "راحت عن بالي؟",
    answer: "Es ist mir entfallen",
    options: [
      "Es ist mir egal",
      "Es ist mir wichtig",
      "Es ist mir zu schwer",
      "Es ist mir entfallen",
    ],
  },
  {
    numb: 3,
    question: "ما معنى ما في داعي؟",
    answer: "Es ist nicht nötig",
    options: [
      "Es ist nicht nötig",
      "Es ist nicht möglich",
      "Es ist nicht erlaubt",
      "Es ist nicht wichtig",
    ],
  },
  {
    numb: 4,
    question: "ما معنى ما في مشكلة؟",
    answer: "Es gibt kein Problem",
    options: [
      "Es gibt ein Problem",
      "Es gibt keine Lösung",
      "Es gibt kein Problem",
      "Es gibt keine Antwort",
    ],
  },
  {
    numb: 5,
    question: "ما معنى ما في داعي للقلق؟",
    answer: "Es besteht kein Grund zur Sorge",
    options: [
      "Es besteht ein Grund zur Sorge",
      "Es besteht keine Möglichkeit zur Sorge",
      "Es besteht keine Notwendigkeit zur Sorge",
      "Es besteht kein Grund zur Sorge",
    ],
  },
  {
    numb: 6,
    question: "فترة وتعدي؟",
    answer: "Das ist nur eine Phase das geht vorbei",
    options: [
      "Das ist nur ein Problem das geht vorbei",
      "Das ist nur eine Phase das geht vorbei",
      "Das ist nur eine Lösung das geht vorbei",
      "Das ist nur eine Antwort das geht vorbei",
    ],
  },
  {
    numb: 7,
    question: "ممكن تعمللي معروف؟",
    answer: "könntest du mir einen Gefallen tun?",
    options: [
      "könntest du mir einen Gefallen tun?",
      "könntest du mir helfen?",
      "könntest du mir eine Frage stellen?",
      "könntest du mir eine Antwort geben?",
    ],
  
  },

    {
    numb: 8,
    question: "جيت بوقتك؟",
    answer: "Du kommst wie gerufen",  
      
    options: [
      ,
      "Du kommst zu spät",
      "Du kommst zu früh",
      "Du kommst nicht",
      "Du kommst wie gerufen"
    ],
  },
  {
     numb: 9,
    question: "أنا عندي قصر بالنظر؟",
    answer: "Ich bin kurzsichtig",
    options: [
      "Ich bin weitsichtig",
      "Ich bin kurzsichtig",
      "Ich habe gute Augen",
      "Ich sehe gut",
    ],

  },
  {    numb: 10,
     
    question: "لوين بدك توصل تستخدم لما بدك  تسأل حدا عن المغزى او الهدف من كلامه؟",
    answer: "Worauf willst du hinaus?",
    options: [
      
      "Was meinst du damit?",
      "Was ist dein Ziel?",
      "Worauf willst du hinaus?",
      "Was ist der Zweck?",
    ],
  },
  {
     numb: 11,
    question: "بدك فت خبز كتير؟",
    answer: "Du bist noch grün hinter den Ohren",
    options: [
      "Du bist noch grün hinter den Ohren",
      "Du bist schon alt",
      "Du bist sehr erfahren",
      "Du bist sehr jung",
    ],
  },
  {
     numb: 12,
    question: "هاد فوق طاقتي؟",
    answer: "Das geht über meine Kräfte",
    options: [
      
      "Das ist zu einfach für mich",
      "Das ist zu schwer für mich",
      "Das geht über meine Kräfte",
      "Das ist zu leicht für mich",
    ],
  },
  {
     numb: 13,
    question: "سر النجاح هو العمل ؟",
    answer: "Erfolg hat drei Buchstaben: TUN",
    options: [
      
      "Erfolg hat vier Buchstaben: ARBEIT",
      "Erfolg hat zwei Buchstaben: GE",
      "Erfolg hat fünf Buchstaben: LERNEN",
      "Erfolg hat drei Buchstaben: TUN",
    ],
  },
  {
     numb: 14,
    question: "ما بتفرق معي؟",
    answer: "Das ist mir Jache wie Hose",
    options: [
      
      "Das ist mir egal",
      "Das ist mir wichtig",
      "Das ist mir Jache wie Hose",
      "Das ist mir zu schwer",
    ],
  },
  {
    numb: 15,
    question: "نفذ صبري؟",
    answer: "Mein Geduld ist am Ende",
    options: [
      "Mein Geduld ist am Anfang",
      "Mein Geduld ist am Ende",
      "Mein Geduld ist unendlich",
      "Mein Geduld ist stark",
    ],

  },
  {
    numb:16,
    question:"اسف انا مستعجل ؟",
    answer: "Entschuldigung, ich habe es eilig",
      options: [
        "Entschuldigung, ich habe Zeit",
        "Entschuldigung, ich habe es eilig",
        "Entschuldigung, ich bin müde",
        "Entschuldigung, ich bin hungrig",
      ],
  },
  {
    numb:17,
    question:"من طقطق للسلام عليكم؟",
    answer: "Vom Anfang bis zum Ende",
    options: [
      "Vom Anfang bis zum Ende",
      "Vom Ende bis zum Anfang",
      "Vom Anfang bis zur Mitte",
      "Vom Ende bis zur Mitte",
    ],
  },
  {
    numb:18,
    question:"انا عاملة ريجيم؟",
    answer: "Ich bin auf Diät",
    options: [
      
      "Ich bin hungrig",
      "Ich bin satt",
      "Ich bin auf Diät",
      "Ich bin müde",
    ],
  },
  {
    numb: 19,
    question:"الأكل كان طيب؟",
    answer: "Mir hat es geschmeckt",
    options: [
      "Mir hat es nicht geschmeckt",
      "Mir hat es geschmeckt",
      "Mir war es egal",
      "Mir war es wichtig",
    ],
  },
  {
    numb:20,
    question:"جلدي عما يحكني؟",
    answer: "Meine Haut juckt",
    options: [
      "Meine Haut ist trocken",
      "Meine Haut ist fettig",
      "Meine Haut juckt",
      "Meine Haut ist gesund",
    ],
  },
  {
    numb: 21,
    question: "مالك دخل؟",
    answer: "Das geht dich einen Scheißdreck an",
    options: [
      "Das geht dich nichts an",
      "Das geht dich einen Scheißdreck an",
      "Das geht dich alles an",
      "Das geht dich etwas an",
    ],
   
  },
  {
    numb: 22,
    question: "فكر منيح قبل ما تقرر؟",
    answer: "Erst besinnen dann beginnen",
    options: [
      "Erst handeln dann denken",
      "Erst besinnen dann beginnen",
      "Erst entscheiden dann handeln",
      "Erst reden dann handeln",
    ],

  },
  {
    numb:23,
    question:"خليني أحضنك؟",
    answer: "Lass mich dich drücken",
    options: [
      "Lass mich dich drücken",
      "Lass mich dich küssen",
      "Lass mich dich schlagen",
      "Lass mich dich ignorieren",
    ],
  },
  {
    numb:24,
    question: "أنت جاهز؟",
    answer: "Bist du so weit",
    options: [
      "Bist du so weit",
      "Bist du bereit",
      "Bist du müde",
      "Bist du hungrig",
    ],
  },
  {
    numb:25,
    question: "لا تغلط غلطتي؟",
    answer: "Mach nicht den Selben Fehler wie ich",
    options: [
      "Mach nicht den Selben Fehler wie ich",
      "Mach nicht den gleichen Fehler wie ich",
      "Mach nicht den anderen Fehler wie ich",
      "Mach nicht den besten Fehler wie ich",
    ],
  }
  
];





/**
 * 
 *  {
    numb: 7,
    question: "",
    answer: "",
    options: [
      "könntest du mir einen Gefallen tun?",
      "könntest du mir helfen?",
      "könntest du mir eine Frage stellen?",
      "könntest du mir eine Antwort geben?",
    ],
  
  },
 */
