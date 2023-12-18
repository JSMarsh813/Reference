## Create Array

### Array.from(arrayLike, mapFn, thisArg)

1.

```
Array.from( {length:n},
                   (_, index)
                        => index);
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

## remove a specific type of value ==> filter && type of

```
return arrayList.filter(function(v)
       {return type of v =="number"})
```

## Remove specific value from string

```
return string
        .split("!") //turns it into an array
        .join(") // turns it back into a string

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
