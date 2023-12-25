/* Programs in Arrow function */

/* a. Print odd numbers in an array */
var oddNumber = (arr = []) => {
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
var Capitalize = (arr = []) => {
    for(let i =0; i<arr.length; i++){
        let splitString = arr[i].split("");
        let upperCase = splitString[0].toUpperCase() + splitString.slice(1,splitString.length+1);
        console.log(upperCase.replaceAll(",",""));
    }
}
Capitalize(["madan", "naveen", "sudar", "vishnu"]);


// c. Sum of all numbers in an array
var arr = [1, 2, 3, 4, 5, 6, 7];

var sumAll = (arr) => {
  let n = arr.length;
  let sum = n*n/2 + n/2;
console.log(sum);
};

sumAll(arr);


// d. Return all the prime numbers in an array
const primeNumber = (arr = []) => {
    let output = []; 
    for(let i =0; i<arr.length; i++){
      if(arr[i] % 2 !== 0 && arr[i] % 3 !== 0){
          output.push(arr[i]);
      }
    }
console.log(output);
}

primeNumber([1, 2, 3, 5, 6, 8, 9, 11, 13, 19]);


// e. Return all the palindromes in an array
var arr = ["nadan", "mum", "dad", "son", "madam", "type", "load"];
var findPalindrome = (arr) => {
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