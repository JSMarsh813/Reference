JavaScript Data Structures by Codevolution
https://www.youtube.com/watch?v=poGEVboh9Rw&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy

Built-in:

> Array, Object, Set Map

Custom:

> Stacks, queues, circular queues, linked list, hash tables, trees, graphs

# Arrays

Def:

In many languages arrays have

1. a fixed size that must be declared when created
2. have the same value type (only strings)

In JS:

1. Resizable: size isn't predetermined/can change
2. Mixed: can have a mix of value types (strings, booleans, strings, objects ect)
3. Iterable, can be used with a for loop

Pro

1. Built-in Methods

   - .push() -
   - .unshift()
   - ect

2. Can iterate over all elements

```
for (const item of arr){
    console.log(item)
}
```

Cons

## Time complexity

### Editing:

- insert/remove from end - O(1) constant
- insert/remove from BEGINNING - O(n) linear
  since the index has to be reset for EVERY remaining element in element

### Accessing

- any element is O{1} constant

### Search

- element we're searching for can be the last element so its O(n) linear

// Methods
Push/pop - O(1) constant
shift/unshift/concat/slice/splice - O(n) linear
forEach/Map/filter/reduce = O(n)

// so .forEach with a callback that has a forloop would have quadratic time complexity D:

# Objects

> unordered collection of key-value pairs

keys:

- must be string or symbol data type
- number will be converted to strings

value:

- can be any data type

Not Iterable

- cannot use it with for of loop

## grab data

1. dot notation
   object.propertyName

2. bracket
   object\["propertyName"]

- if it has spaces or -
- must be a string or you'll get an error

## methods

insert O(1) constant

insert O(1) constant

access O(1) constant

search O(n)

- in worst case you'll have to search every property

object.keys(), Object.values, Object.enteries - O(n)

# Set

holds a UNIQUE collection of values

- can contain mix of data types
- dynamically sized, don' thave to declare size
- do NOT maintain insertion order, 1st in set not necessary 1st added
- iterable
  -Searching and deleting is faster in a set versus array

Time complexist
Set.add(value)

> since it adds at last index should be

- O(1) constant

Set.has(value)

> since it will iterate over the set checking the existance of that value will be

- O(n) linear

Set.delete(value)

- O(1) constant

Set.size

> again it has to iterate for sure so

- O(n) linear

# Set Versus Array

duplicate values ==> use Array

don't want duplicates ==> use Set

Searching and deleting is faster in a set
