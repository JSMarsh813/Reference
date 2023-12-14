- All are blueprints to create objects

## Factory Function

```
function personFactory (n){
return {
    name: n
    }
}

const me =personFactory("sephiroth")

```

- uses more space in memory because each instance has a copy of the property and methods
- prototype is Object.prototype, so the prototype of every object. So you don't want to mess with it, sine you'd be messing with the global object.
- if you change anything in the blueprint, you'll have to MANUALLY change it on each instance since it doesn't use inheritance

Pro: - Simplier,

- no new keyword,
- just return an object,
- using closures 18:56 https://www.youtube.com/watch?v=fbuyliXlDGI, which can avoid bugs since you can't overwrite the data as easily by accident

Con:

- Prototype is the OBJECT prototype for every object
- so harder to make edits to (you have to manually edit each instance)

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

Under the hood all constructors add an empty this object and then return the "this" object

```
~
const this = {}
this.name = name
return this
~

```

So they use this because its attaching the blueprint to a prototype/this object. The instances of a constructor all SHARE this blueprint instead of needing individual copies of the blueprint, as is the case for factory functions.

- So you can edit the constructor function and EVERY instance will automatically fix itself

- we call a new instance with the new keyword

```
const JediMovie= new Movie("Star Wars)
```

- Special Note: **All constructors use a Capital letter, call with new Keyword**

## Constructor Function

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

- Its just an easier way of writing constructors, it uses the same crazy prototype inheritence under the hood.

Pros:

- easier to write
- always runs in strict mode
- not hoisted

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

## Constructor function versus Factory Function

A constructor function ===> function that makes a new object that can optionally have a prototype in which you can store methods.

A class in Javascript ===> function that returns a new object with a prototypical link to another object that contains methods. Under the hood its basically a constructor function.

### Checking Understanding

1. Why don't functions in class constructors use a this keyword? Aka why are they written as a simple `sayHello(){ console.log("hello")}` instead?

Because the logic is built into classes. Class constructors know to attach the functions to a prototype object.

2. Whats the difference between a Constructor function and Class Constructor? A class constructor is essentially a function constructor under the hood, since it will store functions in a prototype object too.

However, a key difference is constructor functions are not hoisted (can't call the constructor before its created) and it always runs in strict mode.

> Strict mode: "It enforces stricter parsing and error handling on the code at runtime. It also helps you write cleaner code and catch errors and bugs that might otherwise go unnoticed."https://sentry.io/answers/javascript-use-strict/
