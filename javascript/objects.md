# Table Of contents

1. Create an object
2. iterate through object
3.

## Create an Object

### with reduce from text/array

```
function duplicateCount(text){

  let count = text.split('')
                  .reduce((accum, curr) => {
    accum[curr] ?
             accum[curr] += 1 :
             accum[curr] = 1;
    return accum;

  }, {});


  return Object.keys(count).filter(key => count[key] > 1).length;

  //ex: bobobo

  //accum= {b:3
     o:3}
}

```

- use split to turn text to an array
- does the accumulator {} have a key equal to the current value "b" from the array?
- if add one to its value ex: b:2
- otherwise make a property which is equal to the current value (ex o), and give it a value of 1

## Iterate though Object

> for (key in Obj )

```
  let lettersAndNumbers=
  {
   "b":3,
   "o":3
  }

   let arrayOfMoreThanOne=[]


 for (key in lettersAndNumbers){
    lettersAndNumbers[key]>=2&& arrayOfMoreThanOne.push(key);
 }
```

## add old object to new one, replace a property

1. Spread syntax

- use spread syntax to say in a new object, spread out the player object into it

```
let player = {score: 1
              name:"jeff"
              }

let player2 = {...player,
                score:2
               };
                  // {score:2, name:"jeff"}
```

2. Object.assign({})

```
let newPlayer= Object.assign({},
                                 player,
                                 {score:2}
                            )
```

![Alt text](image-13.png)
