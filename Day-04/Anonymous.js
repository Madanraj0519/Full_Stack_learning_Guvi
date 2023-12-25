/* Programs in anonymous function & IIFE */

/* a. Print odd numbers in an array */
var oddNumber = function (arr = []){
    let output = [];
    for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 !== 0){
       output.push(arr[i]);
    }
    }
  console.log(output);
  };
  oddNumber([1, 5, 17, 45, 2, 9, 8]);


// b. Convert all the strings to title caps in a string array
(function(arr = []){
    for(let i =0; i<arr.length; i++){
        let splitString = arr[i].split("");
        let upperCase = splitString[0].toUpperCase() + splitString.slice(1,splitString.length+1);
        console.log(upperCase.replaceAll(",",""));
    }
})(["madan", "naveen", "sudar", "vishnu"]);


// c. Sum of all numbers in an array
var arr = [1, 2, 3, 4, 5, 6, 7];

var sumAll = function(arr) {
  let n = arr.length;
  let sum = n*n/2 + n/2;
console.log(sum);
};

sumAll(arr);

// d. Return all the prime numbers in an array
(function(arr = []){
    let output = []; 
    for(let i =0; i<arr.length; i++){
      if(arr[i] % 2 !== 0 && arr[i] % 3 !== 0){
          output.push(arr[i]);
      }
    }
console.log(output);
})([1, 2, 3, 5, 6, 8, 9, 11, 13, 19]);


// e. Return all the palindromes in an array
var arr = ["nadan", "mum", "dad", "son", "madam", "type", "load"];
var findPalindrome = function(arr) {
    for(let i=0; i<arr.length; i++){
        let subArray = arr[i].split("");
        let is_true = true; 
        for(let j=1; j<=subArray; j++){
            if(subArray[i] !== subArray[subArray.length - 1+i]){
                is_true = false;
                break;
            }
        }
        if(true){
            console.log("yes");
        }else{
            console.log("no");
        }
    }
};

findPalindrome(arr);


// f. Return median of two sorted arrays of the same size.
const findMedianSortedArrays = function(arr1, arr2) {
    const mergeSortedArrays = function(arr1, arr2) {
      const mergedArray = [];
      let i = 0;
      let j = 0;
  
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
          mergedArray.push(arr1[i]);
          i++;
        } else {
          mergedArray.push(arr2[j]);
          j++;
        }
      }
  
      while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
      }
  
      while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
      }
  
      return mergedArray;
    };
  
    const mergedArray = mergeSortedArrays(arr1, arr2);
    const n = mergedArray.length;
  
    if (n % 2 === 0) {
      const mid1 = mergedArray[n / 2 - 1];
      const mid2 = mergedArray[n / 2];
      return (mid1 + mid2) / 2;
    } else {
      return mergedArray[Math.floor(n / 2)];
    }
  };
  
  // Example usage:
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  const median = findMedianSortedArrays(arr1, arr2);
  
  console.log("Median:", median);


// g. Remove duplicates from an array
  (function(nums) {
    let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
})([1, 1, 3, 4, 5, 5]);


// h. Rotate an array by k times
(function() {
    function rotateLeft(arr, k) {
      k = k % arr.length;
      const rotated = arr.slice(k).concat(arr.slice(0, k));
      return rotated;
    }
  
    return function(arr, k) {
      const rotatedArray = rotateLeft(arr, k);
      return rotatedArray;
    };
  })([1, 2, 3, 4, 5], 2);



  

