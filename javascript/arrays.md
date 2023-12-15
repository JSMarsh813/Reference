## Create Array

### Array.from(arrayLike, mapFn, thisArg)

1.

```
Array.from( {length:n},
                   (_, i)
                        => i);
```

- \_ because the elements in our array are blank and not needed
- in this example, we fill all those blank spots with the index numbers

2.

```
> Array.from (new Array(b-a+i),
        //created as many blank slots as needed

                         (_, i)

                             => a + i);
                    //=> is the mapping function to put values in the new array
```

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

# Looping

## for loop

```
function countSheeps(arrayOfSheep){
let sum = 0

for (let i=0; i< arrayOfSheep.length; ++i>){ //go through each sheep in the array

  if (arrayOfSheep[i]===true) // if sheep= true then do next thing

  sum ++; //add 1 to the sum of sheep
}

return sum // return sum to the place it was called

}

```

## If else and recursion

```
function isEven(num){

      if( num >= 0) {
        // if number is > 0, snd to nested if

         if (num == 0) {
               return true    }

            else if (num == 1) {
                return false

            }else {
                   return (isEven(num-2))
             // num gets 2 removed
             // relooped until it reaches 0 or 1
             }

    } else {
            return "negative"
    }
}
```

## Remove specific value from string

```
return string
        .split("!") //turns it into an array
        .join(") // turns it back into a string

```

## remove a specific type of value ==> filter && type of

```
return arrayList.filter(function(v)
       {return type of v =="number"})
```

## Sort

```
let filteredArray = inventorsByYear.sort((a,b)=>
    a.year > b.year ? 1: -1
)
console.table(filteredArray)
```

![Alt text](image-3.png)

![Alt text](image-10.png)
