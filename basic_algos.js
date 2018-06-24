/*
Basic Algorithm Scripting: Convert Celsius to Fahrenheit
*/

function convertToF(celsius) {
  return celsius * (9 / 5) + 32;
}

convertToF(30);

/* 
Basic Algorithm Scripting: Reverse a String
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
}

reverseString("hello");

/*
Basic Algorithm Scripting: Factorialize a Number
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.
*/

function factorialize(num) {
  let factoral = 1;
  for (let i = 1; i <= num; i++) {
    factoral *= i;
  }
  return factoral;
}

factorialize(5);

/*
Basic Algorithm Scripting: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > maxLength) {
      maxLength = strArr[i].length;
    }
  }

  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

/*
Basic Algorithm Scripting: Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  let maxNums = [];
  for (let i = 0; i < arr.length; i++) {
    maxNums.push(arr[i].reduce((accum, curVal) => Math.max(accum, curVal)));
  }

  return maxNums;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

/*
Basic Algorithm Scripting: Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this 
challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
  let endOfStr = str.substring(str.length - target.length, str.length);
  return endOfStr === target;
}

confirmEnding("Bastian", "n");

/*
Basic Algorithm Scripting: Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  let repeatedStr = "";
  if (num <= 0) {
    return "";
  } else {
    for (let i = 0; i < num; i++) {
      repeatedStr += str;
    }
  }
  return repeatedStr;
}

repeatStringNumTimes("abc", 3);

/*
Basic Algorithm Scripting: Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

/*
Basic Algorithm Scripting: Finders Keepers
Create a function that looks through an array (first argument) and returns the first 
element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

/*
Basic Algorithm Scripting: Boo who
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/

function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  }
  return false;
}

booWho(null);

/*
Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  let startStr = str.toLowerCase();
  let strArr = startStr.split(" ");
  let capArr = [];
  for (let i = 0; i < strArr.length; i++) {
    capArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1));
  }
  return capArr.join(" ");
}

titleCase("I'm a little tea pot");

/*
Basic Algorithm Scripting: Slice and Splice
You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
  let retArr = arr2.slice(0);
  retArr.splice(n, 0, ...arr1);
  return retArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

/*
Basic Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
    let truthyArr = arr.filter((curVal) => (curVal));
    return truthyArr;
  }
  
bouncer([7, "ate", "", false, 9]);

/*
Basic Algorithm Scripting: Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] 
and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/


  function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      if (num <= arr[i]) {
        return i;
      }
    }
    if (arr[arr.length - 1] < num) {
      return arr.length;
    }
    return 0;
  }
  
  getIndexToIns([40, 60], 50);

/*
Basic Algorithm Scripting: Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/


  function mutation(arr) {
    let charArr = arr[1].toLowerCase().split("");
    let testedStr = arr[0].toLowerCase();
    let testSum = 0;
  
    for (let i = 0; i < charArr.length; i++) {
      if (testedStr.indexOf(charArr[i]) >= 0) {
        testSum++;
      }
    }
    
    if (testSum === charArr.length) {
      return true;
    } else {
      return false;
    }
  }
  
  mutation(["hello", "hey"]);

/*
Basic Algorithm Scripting: Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.
*/

  function chunkArrayInGroups(arr, size) {
    let returnArr = [];
    while (arr.length > 0) {
      let chunk = [];
      for (let i = 0; i < size; i++) {
        if (arr.length === 0) {
          break;
        }
        chunk.push(arr.shift());
      }
      returnArr.push(chunk);
    }
    return returnArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);