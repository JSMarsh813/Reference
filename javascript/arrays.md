# Table of contents

1. Create an Array
   > Array.from(arrayLike, mapFn, thisArg)

- from a given length
- make an array of a specific size
- integer to array of integers

2. map(Number)

- integer to array of integers

2. Sum to one value/ Reduce
3. Filter/remove values
4. Sort
5. Iterate through two arrays

## Create An Array

### from a given length

1. Array.from(arrayLike, mapFn, thisArg)

```
Array.from( {length:n},
                   (_, index)
                        => index);
```

- \_ because the elements in our array are blank and not needed
- in this example, we fill all those blank spots with the index numbers

```
2. Array.from (new Array(b-a+i),
        //created as many blank slots as needed

                         (_, i)

                             => a + i);
                    //=> is the mapping function to put values in the new array

```

1. [...Array(n)] Empty array

```
[...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
```

returns an Array of length n where each element is undefined, until mapped

"by

- deconstructing the empty array using spread syntax (...)
- reconstructing the array with brackets,
- you can easily convert [ <n empty items> ] into [n * undefined]
- make an array of a specific size

2.  integer to array of integers

```

let n=942

function digitalRoot(n) {
   let convertStringToNumber= num => Number(num);

   let nToArray=Array.from(String(n),convertStringToNumber);

}

```

3. From a string

let goodLetters = "abcdefghijklm".split("");

### Flattened nested arrays

```
function flattenAndSort(array) {
 let flattened=[].concat(...array)

 return flattened.sort((a,b)=>a-b)
}
(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])
//[1, 2, 3, 4, 5, 6, 7, 8, 9]);
```

## flatten deeply nested array

```
const flattenAndSort = (array) => array.flat().sort((a, b) => a-b);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

## map(Number)

### integer to array of integers

```
n.toString(2)
  .split("")
      .map(Number)
          .reduce((a,b) => a+b,0);
```

//change number to binary string
//split to array
// turn it into an array of numbers
// add accumulator to each value (b)

> turn n into a string so its splitable

> use Array.from()'s mapping function' (second parameter)

- to change the arrays elements from strings ===? numbers, by "MAPPING" through it

## Sum to one value

## Reduce Function

```
function squareSum(numbers){
    return numbers.reduce(function(sum,n){
       return (n*n) +sum
    },0)
}
```

## Reduce Arrow

```
function squareSum(numbers){
    return numbers.reduce((sum,n)=>
            (n*n)+sum
            ,0)
}
```

## Reduce, combining arrays

```
const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,10];

let result= arr1.map(x=>x*x)
//new arr from squared arr1

.reduce((a,b,i,ar)
//(accumulator, current value (b), index, array)

=>a.concat(ar[i],arr2[i])
,[])
//we're concatting the accumulator [] to two arrays:
ar[i] [1,4,9,16,25]
arr2[i] [6,7,8,9,10]

console.log(result);
```

## Reduce, pushing values into accumulator (an empty array)

Array.reduce MUST return accumulator on every loop, since it will use the last value on the next loop

so if you're checking for a trait you CAN"T tell it to ignore that cycle

so in the following example, if check(item) returns false, then nothing gets pushed to the array

so the accumulator will use this undefined value for the next reduce cycle, aka it will no longer be an array and fail

```
function keysAndValues(data){

 return Object.entries(data).reduce((acc,item)=>{
      acc[0].push(item[0])
      acc[1].push(item[1])
     return acc},

                [[],[]])
}

```

```
ERROR ACC.PUSH() IS NOT A FUNCTION
return arr.reduce((acc,item)=>check(item)<=n&&acc.push(item)
                              ,[])


```

### GOOD EXAMPLES

push:

```
const deleteNthPush = arr.reduce((acc, item) => {
    check(item)<=n&&acc.push(item)
           //return must be on a new line, or we'll get an error
           //the accumulator for next iteration will be the return value of the callback for the current iteration
           //so  without return, it won't return anything
           //so the second time that the callback is called without return, acc will be undefined
    return acc
          // return acc so it can be used in the next cycle
},[])
```

concat:

```
return arr.reduce((acc,item)=>acc.concat(item)
                              ,[])
```

```
return arr.reduce((acc,item)=>
{return
                                     (check(item)<=n)?
                                                 acc.concat(item)
                                                 :acc}
                              ,[])


```

## Reduce, pushing values into accumulator (an empty object)

```
function stray(numbers) {

  let howManyTimesNumberOccurs= numbers.reduce((acc, currentvalue)=>   {
                !acc[currentvalue]?acc[currentvalue]=1:acc[currentvalue]++
                   return acc }
                        ,{})

    for (let key in howManyTimesNumberOccurs){
       if (howManyTimesNumberOccurs[key]===1){
       console.log(key)
       return key
       }
    }
}


stray([1, 1, 2])

```

## Create an Object with reduce

```
function scramble(str, arr) {

  let arrayOfStr=str.split("")
  let hashMap= [...arr].reduce((acc,item,index)=>{
    acc[item]=arrayOfStr[index]
    return acc
  },{})

  //{ '0': 'a',
  // '1': 'c',
  // '2': 'd',
  //'3': 'b' }


  return  Object.values(hashMap).join("")

  }
```

## Replace values

### Using Reduce with replace

```
function createPhoneNumber(numbers){
   return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// => returns "(123) 456-7890"

```

## Filter/remove values

### remove a specific type of value ==> filter && type of

```
return arrayList.filter(function(v)
       {return type of v =="number"})
```

### check an objects property, to determine what to filter

```
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}

// for each item in an array, in this example 21
// cache["21"] = (whatever cache[21]'s previous value was or 0)
// +1 since 21 occured again
// return the item, 21, only if cache["21] <= 3, aka it occured less than or exactly 3 times
```

### Compare two arrays, use set.has() instead of Array.includes()

> set.has() is significantly faster than includes() for larger arrays (~>50)

> Array.includes() ==> o(n) (linear)

> set.has() has better time complexity of o(1) (constant)

See zloyrusskiy's explanation (a reply) here to understand why this is better for larger arrays

https://www.codewars.com/kata/523f5d21c841566fde000009/solutions/javascript

- let a= [1,2,2,2,3]
- let b= [2]
- If a value is present in b, all of its occurrences must be removed from the other:
- end result: [1,3]

```
function array_diff(a, b) {
  b = new Set(b)
  //get rid of the duplicates so theres less to iterate to and because it will give us access to .has()

  return a.filter(v => !b.has(v))

}
```

### Remove specific value from string

```
return string
        .split("!") //turns it into an array
        .join(") // turns it back into a string

```

## Sort

### Sort

```
let filteredArray = inventorsByYear.sort((a,b)=>
    a.year > b.year ? 1: -1
)
console.table(filteredArray)
```

![Alt text](image-3.png)

![Alt text](image-10.png)

## Sort by length of strings

```
function sortByLength (array) {
  // Return an array containing the same strings,
  // ordered from shortest to longest

return [...array].sort(compareLengths)
// [...array] since sort will modify the original array

  function compareLengths(a, b) {
  return a.length - b.length;
}

}

console.log(sortByLength(["Beg", "Life", "I", "To"]))
```

5. Iterating through two arrays of different lengths
   Or given array + integer (the integer==length of new array to create)

Using index % amountOfSecondArray with a for loop

```
function beggars(arrayOfFood, amountOfBeggars) {

 //arrayOfFood=[1,2,3,4,5]
 //3 amountOfBeggars
 //answer = [5,7,3]
 // n beggars are taking turns taking food (integers)

  let foodPerBeggar = Array(amountOfBeggars).fill(0);
//create an array of beggars that all start with 0,
//that way even if arrayOfFood is smaller than the beggar list,
// the beggars with nothing are still accounted for

//we'll iterate through the food Array
  for (let i = 0; i < arrayOfFood.length; i++)
    foodPerBeggar[i % amountOfBeggars] += arrayOfFood[i];
    //to figure out which beggar gets food we use i % n
       //to figure out the beggars index, we use remainder of food array index by the amount of beggars :D

  return foodPerBeggar;

}
console.log(beggars([1,2,3,4,5],3))
```

Using index % amountOfSecondArray with reduce

```
const beggars = (arrayOfFood, numberOfBeggars) => {
//arrayOffood [1,2,3,4,5]
// number of Beggars 3
// RETURN an array === to the length of beggars : [5,7,3]

        //as we iterate through the food array [1,2,3,4,5]
      return arrayOfFood
           .reduce((foodPerBeggarArray, arrayOfFood, indexOfCurrentFood) =>
                   {
               // we need to figure out which of the 3 beggars we actually want to send the current food to
                     //aka do we want to target
                     //accumlator[0] aka foodPerBeggarArray[0]===beggar 0
                     //accumulator[1]===beggar 1
              // *** we use the creative bit,  indexOfCurrentFood%numberOfBeggars to do this ***
                            // index 0 % 3 === beggar 0
                            // index 1 % 3 === beggar  1
                            // index 2 % 3 === beggar  2
                            // index 3 % 3 ==  beggar  0
                            // index 4 % 3 === beggar 1
             //so ex: the index 4%3=1 left over, so the food at index 4 will go to the beggar at index 1


                    foodPerBeggarArray[indexOfCurrentFood%numberOfBeggars]

                                        += arrayOfFood;

                     return foodPerBeggarArray;
                        }, Array(numberOfBeggars).fill(0)
                        );
}

console.log(beggars([1,2,3,4,5],3))

```

using two for loops

```
function beggars(arrayOfFood, amountOfBeggars) {

  var outputValues = [];

  //we're looping by the amountOfBeggars (ex:3)
       //BEGGAR 0: so in the FIRST FOR LOOP we start with the first beggar 0
           //the beggar stores all his food in a bag variable that's in this first for loop, that starts with a 0 value
                // in the INNER FOR LOOP the beggar will grab all the items slotted for him all at once
               // we do this by iterating through the currentfood Array by amount of beggars, so we skip the items that aren't his!
               //we then push each item to the current beggars food bag, which is stored in the first loop
          //once the second for loop is done, push the currentBeggarsFoodBag/total to the outputValues array
          //Then once beggar 0 is done we go to
      //BEGGAR 1:
            //same as before
      //EDGE CASES: if there are more beggars (4) than food items (3)
          //then indexOfCurrentFood 4 <arrayOfFood.length so the inner for loop won't run
         //so it pushes the empty beggar bag (0) to the final array

  for (var indexOfBeggar = 0; indexOfBeggar < amountOfBeggars; indexOfBeggar++) {
    var currentBeggarsFoodBag = 0;

    for (var indexOfCurrentFood = indexOfBeggar; indexOfCurrentFood < arrayOfFood.length; indexOfCurrentFood += amountOfBeggars) {
      currentBeggarsFoodBag += arrayOfFood[indexOfCurrentFood];
    }
    outputValues.push(currentBeggarsFoodBag);
  }
  return outputValues;
}
console.log(beggars([1,2,3,4,5],3))
```
