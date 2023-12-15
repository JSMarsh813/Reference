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
