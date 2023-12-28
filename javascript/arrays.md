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

## Create An Array

### Array.from(arrayLike, mapFn, thisArg)

1. from a given length

```
Array.from( {length:n},
                   (_, index)
                        => index);
```

- \_ because the elements in our array are blank and not needed
- in this example, we fill all those blank spots with the index numbers

2. make an array of a specific size

```
> Array.from (new Array(b-a+i),
        //created as many blank slots as needed

                         (_, i)

                             => a + i);
                    //=> is the mapping function to put values in the new array

```

3.  integer to array of integers

```

let n=942

function digitalRoot(n) {
   let convertStringToNumber= num => Number(num);

   let nToArray=Array.from(String(n),convertStringToNumber);

}

```

4. From a string

let goodLetters = "abcdefghijklm".split("");

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

### Reduce Function

```
function squareSum(numbers){
    return numbers.reduce(function(sum,n){
       return (n*n) +sum
    },0)
}
```

### Reduce Arrow

```
function squareSum(numbers){
    return numbers.reduce((sum,n)=>
            (n*n)+sum
            ,0)
}
```

### Reduce, combining arrays

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
