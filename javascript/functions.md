# Table Of Contents

- General

- Validating input/ Error Throwing

## General

\>= will automatically convert strings to numbers, so you don't have to do `Number(str[i]>=5)`
you can just do `str[i]>5`

## switch statements

![Alt text](image-8.png)

## Object behaving like switch statement

![](image-22.png)

- we're creating the object then saying return it at this given index, and using Math.min to decide if we're going with the max of 4, or the given names.length

## prompt

> let hour =(+prompt("what hour"))

## string

```
function hello(name) {
  return `Hello,
          ${name ? name[0].toUpperCase()+
          name.slice(1).toLowerCase()
          : "World"}
          !`;

}
```

## return string from mix of string and variables

```
return "Hello, " +
          name.substring(0,1).toUppercase +
          name.substring(1).toLowerCase +
          "!";

```

# Destructuring Assignment / multiple variables

1. naming and calculating values for new array
   if (age >600) [min,max] = [Math.floor(age/2+7), age* 2-14]

![Alt text](image-20.png)

2.  renaming values from given array
    ![Alt text](image-21.png)

# Looping

## for loop

### normal for loop

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

### Stopping variable unrelated to iterator

loop will continue without care to the years/iterator, it only will pay attention to the yearly population

```
function nbYear(popStart, percent, aug, goalPopulation) {

  for (let years = 0; popStart < goalPopulation; years++) {
    popStart = Math.floor(popStart + popStart * percent / 100 + aug);
  }
  return years
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

### recursion

```
function nbYear(p0, percent, aug, p) {

  let percentConverted=percent/100
   let finalYearlyAmount=p0
   let loop=0

   return AddPeople(p0)

function AddPeople(lastYear){
   let percentIncrease=lastYear*percentConverted
   let newImigrants=aug
   loop++
   finalYearlyAmount=Math.floor(lastYear + percentIncrease + newImigrants)

   return finalYearlyAmount<p? AddPeople(finalYearlyAmount):loop
}

  }
```

### Validating input/ Error Throwing

- by using typeOf

```
function addBinary(a,b) {
  // validate input
  if (typeof(a) !== 'number' || typeof(b) !== 'number') throw new Error('addBinary: invalid non-numeric input parameters!');
  return ((a+b) >>> 0).toString(2);
}
```

# Controlling where "this" is pointing at/ Create a bond between a function and object

https://www.youtube.com/watch?v=9eUe1-gLeKs

Call, apply, bind are the same for passing an object as this, but they vary if you want to add extra parameters.

## Basic use

call/apply/bind says hey function your THIS == object I'm passing to you

```
const game ={
  title: "sonic the hedgehog",
  year: 1991,
};

function info(){
    console.log(`${this.title} was released ${this.year}`)
    console.log(this)
}

info.call(game)
// tells function where to find the "this" object with the properties it needs
// so it says hey, the game object is your "this" now
```

![Alt text](image-24.png)

## call versus apply versus bind

call

- arguement values seperated by commas
- can only use once, aka won't change the functions this forever

apply

- arguement values passed in an array
- can only use once, aka won't change the functions this forever

bind

- arguement values seperated by commas
- use forever, will change the functions this forever
- if you try to bind a new object to the function, it won't work. Once bound, it will never consider another

### call example

```
const game ={ ...}
function info(platform,character){
  ....
}
info.apply(game,"sega","sonic) <====PASSING HERE

```

### apply example

```
const game ={ ...}
function info(platform,character){
  ....
}
info.apply(game,["sega","sonic]) <===PASSING HERE

```

### bind example
