# Contents

1. Converting
2. Grabbing
3. Repeating
4. Reversing

## Converting

### To upper or lowercase

> StringSelection.toUpperCase()

> StringSelection.toLowerCase()

### Number To Binary

> (a + b).toString(2)

> Number.toString(2)

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
    //needs to be an array to use map, split into the individual words " " not letters ""

  let overFiveReverse=stringToArray.map(word=>word.length>=5?
                                                word.split("").reverse().join("")
                                                :word)
     //use map to change formatting of words that meet the requirement

  return overFiveReverse.join(" ")
      //change it back into a string, with spaces between letters " "
}
```
