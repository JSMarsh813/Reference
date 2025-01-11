<img 
   class="mx-auto"
src="https://media.tenor.com/6IHnrDJaPBoAAAAM/adorable-puppy.gif"/>

Buckle up, this is going to be a long series! I have been posting updates about building Tailored Pet Names since December 2022, but I have just decided to store them all in one (long) informal blog series.

I'm hoping this will also inspire other devs to journal their progress with their projects. Feel free to post a link to your journals in the comments!

These updates will be split into many separate blog posts so I don’t accidentally fry your browser with that much content 😉

Note: If you notice some extra spaces in the code blocks, you're not seeing things! Alas markdown applies some weird styling in code blocks that couldn't be defeated by:

1. escaping the characters (ex: \ . is not working inside markdown code blocks to escape the periods)
2. using their html entity codes

so the humble space reigns supreme here to defeat the weird markdown styling

<img src="https://ucarecdn.com/b1d388b5-1bbe-441f-b17d-d77670900a29/-/format/auto/"
alt="image showing how text was automatically changed to very dark colors and how it was fixed by adding spaces between some elements"
/>

# What is Tailored Pet Names?

**Link**: https://www.tailoredpetnames.com

A Next.js website which allows users to either

1. find the purr-fect name for their pet or

2. help adoption counselors improve pet adoption rates with unique names and/or descriptions!

Users can easily search and filter through community submitted names and descriptions. After signing up, users can save favorites, follow other users, and submit new names and descriptions. In the future, I’m considering allowing users to choose a preferred theme, so they’re not stuck with purple forever.

**Technology**: Next.js, React, Next-Auth, JavaScript, TailwindCSS, MongoDB, Mongoose, Cloudinary, Node /Mailer, SendGrid, SWR, resend, react-mail, CSS, HTML5

<iframe width="560" height="315" 
src="https://ucarecdn.com/9ef4046c-0dd2-4915-8e63-33536c72ac39/petProfileTailor.mp4" title="showing the front page, fetch names, fetch descriptions names work and sorting works" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Thread for my project progress!

![anakin skywalker with text this is where the fun beings](https://media4.giphy.com/media/NsIwMll0rhfgpdQlzn/giphy.gif?cid=6c09b952um5pw8cbgatq5qzllus74tcu1tpvjvlf86sbxc8j&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g)

Twitter Post Link: https://twitter.com/Janetthedev/status/1598391767682154497 11:01 AM · Dec 1, 2022

---

I started off with a bang 🤣 did " npm run start" and was going what the hell why won't it show my edits unless I reboot it.

I realized I needed to do npm run dev 🤦‍♀️

![people starting a BMX bike race and immediately all crashing](https://cyclepista.files.wordpress.com/2011/05/bmx-race-start-fail.gif)

Twitter Post Link: https://twitter.com/Janetthedev/status/1598392395091316736 Dec 1, 2022 Dec 1, 2022

---

Words alone cannot express my love for this next.js tutorial! Its so easy to understand so far 😍
https://youtube.com/watch?v=MFuwkrseXVE&ab_channel=Academind

The projects coming along at a decent pace (for now)

![capybara baby on top of parent with giddy up text](https://i.imgur.com/m8qNvan.gif)

Twitter Post Link: https://twitter.com/Janetthedev/status/1598420569607016448 12:55 PM Dec 1, 2022

---

I was getting a "Error: Element type is invalid: expected a string (for built-in components)" when importing a react component

I stared at my files for a second and realized I forgot to save the component's changes 🤡.

That immediate fix was instant serotonin!

![Gif of man saying i laughed at my own stupidity  ](https://media.tenor.com/LLFoEQ1oKNkAAAAM/i-laughed-at-my-own-stupidity-liam-scott-edwards.gif)

Twitter Post Link: https://twitter.com/Janetthedev/status/1598442248626401280 2:21 PM Dec 1, 2022

---

I figured out how to change the placeholder text color using tailwindcss https://geeksforgeeks.org/tailwind-css-placeholder-color/ the normal text color tailwindcss property wasn't working

Twitter Post Link: https://twitter.com/Janetthedev/status/1598446531786735616 2:38 PM Dec 1, 2022

---

I was going to use this in the background, until I noticed one of them was "getting 💩 done " 😂

![ gif of a cute litter of puppies, one is walking to the screen but one of the puppies in the background is pooping ](https://tinyurl.com/5n73j6fv)

Twitter Post Link: https://twitter.com/Janetthedev/status/1598463897299976192 3:47 PM · Dec 1, 2022

---

Decent starting progress! Still more content to add and some styling to clean up, but its getting there 🔥

![video showing the styled front page](https://ucarecdn.com/842e9f1d-8c85-484e-bc5e-091848eb7459/20221201startingprogress.gif)

Twitter Post Link: https://twitter.com/Janetthedev/status/1598503599058788352 6:25 PM · Dec 1, 2022

---

I did a little bit more work on the landing page! Very rough, rough draft done.

The UI adjustments/colors ect are for future me to figure out 😂

<img alt="shows the front page, describing how the page will help you find the purrfect name"
src="https://ucarecdn.com/1e9bb232-bf97-4abc-b9b5-470fbdbb7848/-/format/auto/"/>

<img 
alt="showing the second page, describing how it will help you find creative descriptions for pets"
src="https://ucarecdn.com/1e9bb232-bf97-4abc-b9b5-470fbdbb7848/-/format/auto/"/>

<img 
alt="showing the third page, explaining what a free profile gives you access to"
src="https://ucarecdn.com/7d7f1c9b-c6cd-44f3-97ca-dad140dcb2ac/-/format/auto/"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1599834982406840320 10:35 AM · Dec 5, 2022

---

I was struggling this morning to figure out why local images kept appearing broken??🥴

After watching this video I realized, I had forgotten for the public folder you don't retype out the whole address!
https://youtube.com/watch?v=taMJct5oeoI&ab_channel=EsterlingAccime
It worked once I changed it to "profile.png" Huzzah

```
<img src='../public/profile.png'/>
```

```
<img src='/profile.png'/>
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1599835681102389248 Dec 5, 2022

---

Although part of me wants to (FINALLY) start with the back-end, I know I'm too tired to work on it right now 😢

Time to nap 😴

![kittens napping with a lab](https://media2.giphy.com/media/q7ni8jdm2NqkE/200.gif?cid=6c09b952xolaq3lcvwx6ds5vtu4tns532q6nzdu5hc5smnt9&ep=v1_gifs_search&rid=200.gif&ct=g)

Twitter Post Link: https://twitter.com/Janetthedev/status/1599842624755863553 11:06 AM · Dec 5, 2022

---

I was trying to add links to the navbar in nextjs but I was getting this error:

```
Error: Multiple children were passed to <Link> with `href` of...
```

I found this tip about removing any space between <Link> and <a> https://stackoverflow.com/questions/69667347/nextjs-multiple-children-were-passed-to-link-with-href-of-x-but-only-one/72754603

This fixed it! I would of NEVER of guessed 😂

Quotation from the stackOverflow Link:

> "Are you sure that's how its written in your source file? This error usually happens if you have a space in between <Link> and the <a> tags"

Twitter Post Link: https://twitter.com/Janetthedev/status/1600171174670893064 8:51 AM · Dec 6, 2022

---

I used MongoDB playground to test if a basic read query to my database worked and it did! huzzah🎊

first backend step ✅

```
/ /  MongoDB Playground untitled-1

/ /  select the database to use.
use('main_site)

db.name_tags.findOne(
  {
     "_id":ObjectId("63423dafasf4324")
  }
)

```

```
Playground Result:
{
  "_id":{
    "$oid":"63423dafasf4324"
  },
  "tag_name":"male",
  "categories":[
    "638f31fasdflkjadsfs"
  ]
}

```

Twitter Post Link: https://twitter.com/Janetthedev/status/1600199940411572224 10:46 AM · Dec 6, 2022

---

https://www.appsloveworld.com/mongodb/100/160/express-returns-an-empty-req-body-to-a-postman-request

I was trying to figure out why the test post request seemed to work, except the collection was blank!

Turns out the body was showing as "text" instead of "json!" Once I switched it to "json" in postman it worked

<img 
src="https://ucarecdn.com/238d3b95-8855-4f16-b1a6-e0042d382f29/-/format/auto/"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1600554807059615745 10:16 AM · Dec 7, 2022

---

I've been trying to get chunks of the json data to show in a page but no luck so far🥴

I'm stopping for today before I go insane

![cartoon penguin jumping on a keyboard. text says its no good. I don't know the codes](https://y.yarn.co/2ad0b68b-5c02-45a2-9e52-79a45906454a_text.gif)

Twitter Post Link: https://twitter.com/Janetthedev/status/1600585712826404864 12:19 PM · Dec 7, 2022

---

I couldn't resist trying to debug an axios error I kept getting: " OverwriteModelError: Cannot overwrite `test5` model once compiled"

Adding some code to the left of my exports helped it stop yelling about using the model again "mongoose.models['test5']" 🎊🎊

code snippet:

```
"module.exports = mongoose.models['test5']|| mongoose.model("test5",CategoryCollectionSchema)
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1600593040975929344 12:48 PM · Dec 7, 2022

---

now I don't need to reboot my entire app every time I redo a freaking get request! huzzah 😂

the great evil axios error has been defeated!

![Little girl saying the evil is defeated GIF](https://media1.giphy.com/media/PDSDKXxiCRP8c/200w.gif?cid=6c09b952sxxcdv9dejvv8byh7ts7h5xwwk53dqyam3u1e2t8&ep=v1_gifs_search&rid=200w.gif&ct=g)

Twitter Post Link: https://twitter.com/Janetthedev/status/1600593513640435712 12:50 PM · Dec 7, 2022

---

my brain was melting earlier clearly, that was a mongoose error not axios!

Twitter Post Link:https://twitter.com/Janetthedev/status/1600616329249054720 2:20 PM · Dec 7, 2022

---
