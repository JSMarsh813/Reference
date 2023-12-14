# The Blueprint Wars of JavaScript Objects

These all use blueprints to create objects

- Factory Functions,
- Constructor functions
- Class Constructors

## Factory Function

![closeup of a mans conferned face saying that's a lot of text](https://media1.giphy.com/media/cNfdCiR00n8kCKeuhJ/giphy.gif)

EVERY instance of an object gets a copy of all the information. Factory functions laugh at the idea of sharing a single piece of paper (prototype) with the information they all need to know.

```
function personFactory (n){
return {
    name: n
    }
}

const me =personFactory("sephiroth")

```

- uses more space in memory because EACH instance has a copy of the property and methods === lots of extra text

![closeup of a mans conferned face saying that's a lot of text](https://media.tenor.com/2IU9kk3bOt0AAAAM/thats-a-lot-of-text-lots-of-reading.gif)

- prototype is: Object.prototype, aka the prototype of every object. So you don't want to mess with it, since you'd be messing with the global object.

![Astronaut floating in space](https://m.media-amazon.com/images/I/81Lf4eeOC-L._UC256,256_CACC,256,256_.jpg)

- if you change anything in the blueprint, you'll have to MANUALLY change it on each instance since the instances don't use inheritance. Aka you have to manually track down and edit each instance's copies, since they don't share a prototype.

Pro:

- Simplier, just returns an object
- no new keyword,
- using closures 18:56 https://www.youtube.com/watch?v=fbuyliXlDGI, which can avoid bugs since you can't overwrite the data as easily by accident and allows for data privacy

Con:

- Prototype is the GLOBAL OBJECT prototype for every object
- so its harder to make edits (you have to manually edit each instance's copy of the information)

```
function createPerson(name){
    return {
        talk (){
            return `${name}`
        }
    }
}
const me= createPerson('Sina')

me.talk()
//"sina"

me.name
//undefined, so you can avoid bugs since you can't access the arguement "Sina" since the name is not stored in the me Object, the name was grabbed with closure. So you can't overwrite the name by accident
```

# Constructors

![Gender neutral young person waving their hand in a circle and looking pensive as they say big fan of... this](https://media4.giphy.com/media/Y3AQNvFtEM2rBNqPdv/giphy.gif?cid=ecf05e47kx55lchnwkzdv9thlzpw13ww31dbgiy6zz136ac1&ep=v1_gifs_search&rid=giphy.gif&ct=g)

Under the hood all constructors start with an empty object which is stored as "this". They then return the "this" object

```
~
const this = {}
this.name = name
return this
~

const JediMovie= new Movie("Star Wars)

```

new is basically javascripts way of saying "hey! we're going to be making a new object"

You can think of {}, as a shiny new empty box which is labeled as "this". Aka an empty object which we'll soon put data in.

![A gif of a box with a cat sticking its head out](https://media.giphy.com/media/jgciX4khX2xck/giphy.gif)

So the constructors use this because its attaching the blueprint to a prototype/this object. The instances of a constructor all SHARE this blueprint instead of needing individual copies of the blueprint, as is the case for factory functions.

- So you can edit the constructor function and EVERY instance will automatically fix itself ????

- we call a new instance with the new keyword

- Special Note: **All constructors use a Capital letter, call with new Keyword**

## Constructor Function

![Zack Fair from ff7 doing squats in the background](https://38.media.tumblr.com/tumblr_lq99fwOIQs1qersozo1_500.gif)

(Pictured above, A Shinra trainee doing squats as all shinra cadets are taught. In other words, they inherit this squatting behavior from their shared Shina Cadet Constructor!)

```
function ShinraCadetConstructor(name, age) {
this.name = name;
this.age = age;

//we are telling the function hey, don't give every instance a copy of the function, attach that to the inherited prototype instead. This saves memory

ShinraCadetConstructor.prototype.sayHello = function() {
console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
}

const ShinraCadetCloud = new ShinraCadetConstructor("Cloud", 23);
```

Pros:

- Prototype is the PersonConstructor Object
- so its easy to make edits to
- make edits to the prototype/blueprint and all instances automatically know to use this edited blueprint

Cons:

- more complicated to write

### What if you do this.sayHello?

You could also do this.sayHello = function(). But this means that EVERY instance of the object will have a copy of the sayHello() function, instead of them all looking at one prototype object for the sayHello() function. So its hogs up more memory.

### Can Edit properties or functions of all instances

- edit the prototype so the change is reflected on every instance of the object
- inheritance

```
ShinraCadetConstructor.prototype.sayHello =function(){
    return "hello, I am ${this.name}"
}
```

## Class Constructor

![squirrel eating nuts](https://media4.giphy.com/media/fZqrfZJSEZzfW/giphy.gif?cid=ecf05e477ecws3nm4mehv2xntibjvr1v1negx5jjijnpz8v2&ep=v1_gifs_search&rid=giphy.gif&ct=g)

(Above: An instance of a squirrel object ("Miss Cashew"), inheriting its nut stuffing behavior from its squirrel object ancestory)

- Its just an easier way of writing constructors, it uses the same crazy prototype inheritence under the hood.

Pros:

- easier to write
- always runs in strict mode
- not hoisted
- Less writing since class Constructors already know it needs to attach functions to the prototype object! Aka we don't have to write out something like object.prototype.run= function(){"gotta go fast"} and can instead just type of run(){"blah Blah}

```
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

//We get rid of this for sayHello so that all thousands of the person object instances, don't have a copy of the sayHello() function! Instead they'll be forced to inherit it from the Person Object/prototype!

//behind the scenes the sayHello() function is attached to the Person prototype object

// sayHello() is outside of the {} above since its not attached to the new instance object, its attached to the prototype instead!

sayHello() {
console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
}

const john = new Person("John", 30);

//so john is an instance of the person object/protoypal inheritance
```

### To change an object's function, you can edit the prototype.

```
const john = new Person("John", 30);

console.log(john.sayHello())
///"Hello, my name is John and I am 30 years old." Original

Person.prototype.sayHello= function (){
console.log("My name is actually...")
}

console.log(john.sayHello())
///"My name is actually..." Changed!
```

## Adding Properties After Creating Instances of the Class

You can add properties to the prototype

`ShinraCadetConstructor.prototype.class="second"`

And the "ShinraCadetCloud" Object will be confused for a second when you ask `ShinraCadetCloud.class` since it doesn't have that. But it will realize it should look at it's prototype. And it will discover it's ShinraCadetConstructor prototype now has a class

```
console.log(ShinraCadetCloud.class)
/// second

console.log(ShinraCadetCloud)

///ShinraCadetConstructor {name: "Cloud", age: 23}
name:"Cloud"
age:23
constructor:ƒ ShinraCadetConstructor()
sayHello:ƒ ()
class:"second"
[[Prototype]]:(2) {sayHello: function(), class: "secon...}

```

## Comparing the three with console.log!

Factory Function, its prototype is the GLOBAL object

```
Object { … }
​name: "Sina"​
<prototype>: Object { talk: talk()
 }
​​
talk: function talk()​​
<prototype>: Object { … }
```

Constructor Function, its an instance of the ShinraCadetConstructor, so thats its prototype

```
ShinraCadetConstructor {name: "Cloud", age: 23}
name:"Cloud"
age:23
constructor:ƒ ShinraCadetConstructor()
sayHello:ƒ ()
[[Prototype]]:(1) {sayHello: function()}
```

Class Constructor, its an instance of the Person constructor, so thats its prototype

```
Person {name: "John", age: 30}
name:"John"
age:30
constructor:ƒ Person()
sayHello:ƒ sayHello()
[[Prototype]]:{}
```

## Getting into the Weeds, the exception to Factory Functions

![A man, wen Ning from the untamed, peeking out of long grass weeds](https://media1.tenor.com/m/VgyvaMd0nwcAAAAd/the-untamed-tall-grass.gif)

It's technically possible to use Object.Create() to give a factory function a prototype object which is not the global object.

```
const myCoolProto= {
    talk(){
         return `Hello, I am ${this.name}`
}
}
function createPerson(name){
    return Object.create(myCoolProto,{
        name:{
            value:name
        }
    })
}
const me= createPerson('Sina')
console.log(me.talk())
```

In the console.log() you'll see that the talk function is stored in the prototype object! So this means all the instances of createPerson can actually grab the function from the same prototype object, myCoolProto, instead of them each having a copy of it.

```
Object { … }
​name: "Sina"
​<prototype>: Object { talk: talk()
 }​​
talk: function talk()....
```

![A kid with glasses speaking dramatically with his hands outstretched saying "its a prototype"](https://media1.tenor.com/m/t-BFC-kUfo8AAAAd/its-a-prototype-prototype.gif)

So essentially this is just a long winded way of giving a factory function a prototype it can share with all its object instances, like its big constructor siblings can do.

See 9:50 @ https://www.youtube.com/watch?v=fbuyliXlDGI&t=1284s for more information

## Constructor function versus Factory Function

A constructor function ===> function that makes a new object that can optionally have a prototype, where you can store methods.

A class in Javascript ===> function that returns a new object with a prototypical link to another object that contains methods. Under the hood it's basically a constructor function.

### Checking Understanding

1. Why don't functions in class constructors use a this keyword? Aka why are they written as a simple `sayHello(){ console.log("hello")}` instead?

Because the logic is built into classes. Class constructors know to attach the functions to a prototype object.

2. Whats the difference between a Constructor function and Class Constructor? A class constructor is essentially a function constructor under the hood, since it will store functions in a prototype object too.

However, a key difference is constructor functions are not hoisted (can't call the constructor before its created) and it always runs in strict mode.

> Strict mode: "It enforces stricter parsing and error handling on the code at runtime. It also helps you write cleaner code and catch errors and bugs that might otherwise go unnoticed."https://sentry.io/answers/javascript-use-strict/
