# Contents

1. Converting
2. Grabbing
3. Repeating
4. Reversing
5. Checking for/comparing

## Converting

### To upper or lowercase

> StringSelection.toUpperCase()

> StringSelection.toLowerCase()

### Number To Binary

> (a + b).toString(2)

> Number.toString(2)

### change letters into something else based on some condition

Example 1: If letters occur more than once change to ")"

- change to array
- reduce into a new object, giving the sum of each letters occurance
- use for loop to create array of same size, depending on the letters value in the accumulator object

> word ==>"Success"

> if word occurs once ==> (

> if word 2+ times ==> )

> result ==> ")())())"

```
function duplicateEncode(word){
  let wordtoLower=word.toLowerCase()
  let wordToArray=wordtoLower.split("")
  let newArray=[]

  let acc=wordToArray.reduce((accumulator,item)=> {
               accumulator[item]?
                   accumulator[item]++:
                   accumulator[item]=1
                       return accumulator
                   },{})

for (let i=0;i<wordtoLower.length;i++){
    acc[wordtoLower[i]]==1?
         newArray.push("(")&&console.log(wordtoLower[i])
         :newArray.push(")")&&console.log(wordtoLower[i])
  }

```

### binary to string

```
const binaryArrayToNumber = (arr) => {
  let binary = arr.join("");
  return parseInt(binary, 2);
};
```

<br>

## Grabbing

### substring( start index, length of string )

> name.substring(0,1).toUpperCase()

![Alt text](image-9.png)

### grab a specific character

> name.charAt(0).toUpperCase()

<br>

## Repeating

### repeat a string value

> #".repeat(10)

![Alt text](image-4.png)

### Repeating a seperator

```
 return [...Array(n+1)]
 //create an empty array of N+1 elements

 .join(s)
 // join the empty elements with a given seperator
 //if the length is 5, will only have 4 seperators
//ex: Fire-Air-Water
```

![Alt text](image-18.png)

## Reversing

### Reversing some text and not others

```
function spinWords(string){

  let stringToArray= string.split(" ")
    //needs to be an array to use map
    //split into the individual words " " not letters ""

  let overFiveReverse=stringToArray.map(word=>word.length>=5?
                                                word.split("").reverse().join("")
                                                :word)
     //use map to change formatting of words that meet the requirement

  return overFiveReverse.join(" ")
      //change it back into a string, with spaces between letters " "
}
```

testing

## Checking for

### based on unicode essentially

```
function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}
```

- s[i]>"m" is comparing the unicode values of the different letters "a", "b", "y" ect to the unicode value of m
  https://www.codewars.com/kata/56541980fa08ab47a0000040/solutions/javascript

### a specific string is always included

```
function isPangram(string){

  string = string.toLowerCase();

  let alphabet = 'abcdefghijklmnopkrstuvwxyz'.split('');

  return alphabet.every(x => string.includes(x));
}

}
```

- this example is checking if a given string includes every letter of the alphabet
