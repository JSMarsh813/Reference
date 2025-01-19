## NEW POSTS

I ended up deciding to cut áéíóúñü out as acceptable characters for name submissions since I'm not 100% sure if all shelter databases can support that input

(paranoia born of a horror story of when I was an adoption counselor and some invalid input shut down the db for a bit 😅)

However I want to do an invalid input check on the server side & client side

so i decided to pull out that function and put it in utils instead, so both files can easily import it

I tried using another utils file as a reference

```
utils\error.js

const getError = (err) =>
  err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message;

export { getError };
```

```
Utils\stringManipulation\check-for-valid-names.tsx

const regexInvalidInput = (stringToCheck: string) => {
  let regexForInvalidCharacters = /[^a-z\d&'-]+/;
  return stringToCheck.match(regexForInvalidCharacters);
}

export default regexInvalidInput;

export {regexInvalidInput}

```

but then I got an error code

> Unhandled RunTime Error

> TypeError: >\_utils_stringManipulation_check_for_valid_names_WEBPACK_IMPORTED_MODULE_8\_\_["default"] is not a function

I found this reference on mdn
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function#import_the_exported_module_correctly

and the new version I made based on it works great

```
function regexInvalidInput(stringToCheck: string) {
  let regexForInvalidCharacters = /[^a-z\d&'-]+/;
  return stringToCheck.match(regexForInvalidCharacters);
}

/ / only strings not matching the a-z digits &'- will be returned
/ / aka if anything is returned, there was invalid input
export default regexInvalidInput;
```

```

    if (existingNameCheck && existingNameCheck.length != 0) {
      res.status(409).json({
        message: "Name already exists",
        existingName: existingNameCheck,
      });
    } else if (checkForInvalidInput.length) {
      res.status(409).json({
        message: `Invalid characters entered ${checkForInvalidInput}`,
      });
      return; <=== only one return
    } else
    ....
```

confirmed its still working client side!

But i'll have to temporarily turn off the check client side to make sure the server check is working

<img src="./images/2024-12-29-is-not-a-valid-characteri.jpg" alt="error message saying áó is not a valid character"/>

hmm okay the server check isn't working lets see what else i need to put

I noticed I accidentally put the statements in the same bracket lets separate them, Which lead to an error as we wanted!

Alas, its not the right error though, it should be that the name has invalid characters, not that it already exists 🤔

then i noticed i only have one return, but it turns out that wasn't the issue

<img src="./images/2024-12-29-success-message.jpg" alt="message saying the name was successfully added"/>

```
    if (existingNameCheck && existingNameCheck.length != 0) {
      res.status(409).json({
        message: "Name already exists",
        existingName: existingNameCheck,
      });
   else if (checkForInvalidInput.length) {
      res.status(409).json({
        message: `Invalid characters entered ${checkForInvalidInput}`,
      });
      return; <=== only one return
    } <===bracket from original if

     else {
      try {
        const test = await Names.create(req.body);
        ....}}
```

<img src="2024-12-29-name-already-exists-error.jpg" alt="getting the error that the name already exists"/>

then I looked an realized, wait, i set them both as having a status of 409

and my client side code is just looking at what the error code was to render the error message

```
Client side addingName.jsx

if (error.response.status == 409) {
          toast.error(
            `Ruh Roh! The name ${newName} already exists!`)
```

Changed the new eror message to 400 and ta-da it works!

```
    } else if (checkForInvalidInput.length) {
      res.status(400).json({ <=======changed from 409 to 400
        message: `Invalid characters entered ${checkForInvalidInput}`,
      });
      return;
    }
```

<img src="" alt="error pop up that says Ruh Roh! áó not added. An error has occured. Status code 400"/>

I was pretty sure what i needed was error.response.data.message but i started w/ stringify-ing error.response to be sure

and yep, thats what i needed!

Fixed up the toast errors so they grab the servers message

(so I'm using error.response.data.message instead of retyping "name does not exist" ect)

```
  } else if (error.response.status == 400) {
          toast.error(
            `Ruh Roh! The name ${newName} has invalid characters ${JSON.stringify(
              error.response,
            )}`,
          );
          ...}


```

> Ruh Roh! The name áó has invalid characters {"data":{"message":"Invalid characters entered áó"},"status":400,.....}

```
 if (error.response.status == 409) {
          toast.error(
            `Ruh Roh! The name ${newName} ${error.response.data.message}!`,
          );
        } else if (error.response.status == 400) {
          toast.error(
            `Ruh Roh! The name ${newName} has ${error.response.data.message}`,
          );
        } else
        .....
```

I wanted to confirm the original error message (name already exists)

still is properly working. And turns out it is 😁

![error message shows with the text ruh roh! the name honda already exists](2024-12-29-original-error-message-still-works.jpg)

I cleaned things up so the server creates the error messages

and the client side code is just reading back the error response message created on the server

```
server side

 if (existingNameCheck && existingNameCheck.length != 0) {
      res.status(409).json({
        message: `Ruh Roh! The name ${name} already exists`,
        existingName: existingNameCheck,
      });
      return;
    } else if (checkForInvalidInput.length) {
      res.status(400).json({
        message: `Ruh Roh! The name ${name} has invalid character(s) ${checkForInvalidInput}`,
      });
      return;
    }
```

```
client side

  if (error.response.status == 409) {
          toast.error(`${error.response.data.message}!`);
    } else if (error.response.status == 400) {
          toast.error(`${error.response.data.message}`);
    }

```

as for why one has an error of 400 and the other is 409:

409 fits a name already existing (conflicts arising from the current state of the resource)

400 fits the name having invalid syntax ( points to issues with the request's syntax or structure)

I un-commented out the client side checks for invalid characters

annnnd we're done with validating the entered text for new names 😁

https://bsky.app/profile/ghiblimagic.bsky.social/post/3leipgc2fy22p dec 29th 2024, 8:35 PM

---

Right new users who want to just use magic links to sign in still have to enter a password at registration.

So I'm going to fix that so they don't have to.

Original Code api/auth/signup.js

```
  const { name, email, password, profilename } = req.body;
  if (
    !name ||
    !email ||
    !profilename ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 5
  ) {
    res.status(422).json({
      message: "Validation error",
    });
    return;
  }

```

which i changed to:

```
  const { name, email, password, profilename } = req.body;

  if (
    !name ||
    !email ||
    !profilename ||
    !email.includes("@")
  ) {
    res.status(422).json({
      message: "Validation error, please check the name, email, profilename and email fields",
    });
    return;
  }

  if (password.length && password.trim().length < 5) {
    res.status(422).json({
      message: "Invalid password length",
    });
    return;
  }
```

So I want to change this, so if there no password, a password won't be added to the new user.

I considered going the easy route and giving the password a default value like "" if the user didn't enter a password. But from what I've read its best to avoid bogging down mongodb with unnecessarily blank or null fields.

The original code: api/auth/signup.js

```
  const newUser = new User({
    name,
    email,
    profilename: profilename.toLowerCase(),
    password: bcryptjs.hashSync(password),
  });


  const user = await newUser.save();
```

https://stackoverflow.com/questions/67157904/conditional-adding-object-property-in-javascript

---------

I switched to my laptop to code outside and was confused for a moment why npm install was giving me this error

> bash: npm: command not 

Then I went DOH! of course, i never installed node and npm for this machine since the markdown project didn't use any dependencies

the npm docs strongly recommended using a version control program rather than manually installed node and npm so i used nvm windows

https://github.com/coreybutler/nvm-windows?tab=readme-ov-file

 WINDOWS POWERSHELL
> PS C:\Users\janet> nvm
> Running version 1.2.2.
> PS C:\Users\janet> nvm install latest
> 23.6.0
> Downloading node.js version 23.6.0 (64-bit)...
> Extracting node and npm...
> Complete
> Installation complete.
> If you want to use this version, type:
> nvm use 23.6.0
> PS C:\Users\janet> nvm use 23.6.0
> Now using node v23.6.0 (64-bit)
> PS C:\Users\janet>

----

then i went to do npm run dev and got

> Server Error
> Error: Add Mongo URI to .env.local

another doh! moment. Right, I need to remake my env file since for security reasons, its not added to my github

----
I originally was going to use dirtyFields to track if the password field has been edited or not. And then manually somehow clear the dirtyFields status if the text in the password field was deleted
```
    formState: { errors, dirtyFields },
```
but after checking looking at the react hook examples 
https://github.com/react-hook-form/react-hook-form/tree/master/examples

I found a better option, watch which acts like state. It stores the current value of the input (password) in a variable (passwordEntered)

https://codesandbox.io/p/sandbox/react-hook-form-conditional-fields-qgr41?file=%2Fsrc%2Findex.js

```
...
76   const {
77    handleSubmit,
78    register,
79    getValues,
80    formState: { errors },
81    watch,
82  } = useForm();
....
110  const passwordEntered = watch("password");
...
// this is the password input that we're watching
251          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              minLength: { value: 6, message: "password must be more than 5 chars" },
            })}
            className="w-full text-darkPurple"
            id="password"
            autoFocus
          ></input>
....
// checking if the watch works by having the string "this field is required" show if passwordEntered currently is truthy/has a value

268 { passwordEntered  && (<span>"this field is required"</span>)}
269
270 <div className="mb-4">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="w-full text-darkPurple"
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: passwordEntered&&"this field is required",
//the confirm password field is required if the password field has input
// so if it is required (has a truthy value, we will get the "this field is required message"). Otherwise it is falsey, so required: false

              validate: (value) => value === getValues("password"),
              minLength: {
                value: 6,
                message: "confirm password is more than 5 chars",
              },
            })}
          />

```

I was wondering why i was getting a validation error message

And when i went to my api i noticed that it didn't have any of the changes i made.

Whoops i forgot to move to the new branch were my changes were at! 

So i used git stash, git stash apply and once i confirmed the changes were added, i did git stash drop

This person did a great job explaining why to use git stash apply instead of git stash pop:
https://stackoverflow.com/questions/15286075/difference-between-git-stash-pop-and-git-stash-apply

> git stash pop throws away the (topmost, by default) stash after applying it, whereas git stash apply leaves it in the stash list for possible later reuse (or you can then git stash drop it).
> 
> This happens unless there are conflicts after git stash pop, in which case it will not remove the stash, leaving it to behave exactly like git stash apply.
> 
> Another way to look at it: git stash pop is git stash apply && git stash drop.

What I entered in my terminal

> git stash -u
>
> git checkout fixing-registration-for-magic-link
>
> git stash apply
>
>    On branch fixing-registration-for-magic-link
> Your branch is up to date with 'origin/fixing-registration-for-magic-link'.
> 
> Changes not staged for commit:
>
>   (use "git add <file>..." to update what will be committed)
>   (use "git restore <file>..." to discard changes in working directory)
>         modified:   pages/register.js
> 
> no changes added to commit (use "git add" and/or "git commit -a")
> 
> $ git stash drop
> Dropped refs/stash@{0} (4de794e8e2333dc48132de8f9681b9eb0e2a6563)
>        
> $ git add .
>
> $git commit -m "edited registration logic so passwords aren't required for magic link users"
>
> $ git push