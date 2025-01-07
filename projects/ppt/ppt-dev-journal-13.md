Alright so I'm pretty sure the server problem is in here https://github.com/JSMarsh813/PetProfileTailor/blob/main/utils/db.js
But its frustrating that it very, very rarely occurs for me! Wish it was easier to test for 🥲

with any luck this tiny line on 28 I added will of fixed it, but I doubt it

```
The error message 2023-04-10T08:06:35.275Z	7d3e76dc-39b2-4d35-a27b-90adfe53ff2d	ERROR	Unhandled Promise Rejection 	{"errorType":"Runtime.UnhandledPromiseRejection","errorMessage":"MongoNetworkTimeoutError: connection timed out","reason":{"errorType":"MongoNetworkTimeoutError","errorMessage":"connection timed out","connectionGeneration":0,"stack":["MongoNetworkTimeoutError: connection timed out","    at connectionFailureError (/var/task/node_modules/mongodb/lib/cmap/connect.js:389:20)","    at TLSSocket.<anonymous> (/var/task/node_modules/mongodb/lib/cmap/connect.js:310:22)","    at Object.onceWrapper (node:events:627:28)","    at TLSSocket.emit (node:events:513:28)","    at TLSSocket.Socket._onTimeout (node:net:550:8)","    at listOnTimeout (node:internal/timers:559:17)","    at processTimers (node:internal/timers:502:7)"]},"promise":{},"stack":["Runtime.UnhandledPromiseRejection: MongoNetworkTimeoutError: connection timed out","    at process.<anonymous> (file:///var/runtime/index.mjs......)]}
```

I had originally grabbed that code from coding with bashir https://youtube.com/watch?v=3kYkEVIZNZY&t=6964s&ab_channel=CodingwithBasir
at 1:51:55. But the tutorial is 2 years old, so maybe the codes too old to work properly with the current mongodb ect? 🤷‍♀️
https://github.com/basir/next-amazona/blob/main/utils/db.js

I could try to use this example from vercel/next js https://github.com/vercel/next.js/blob/canary/examples/with-mongodb/lib/mongodb.ts but I liked how the other one would maintain the connection if one already existed. Versus remaking the connection a ton of times...

Yeah nope that didn't fix it 🥲 didn't have high hopes but ugggh https://github.com/JSMarsh813/PetProfileTailor/blob/main/pages/api/auth/%5B...nextauth%5D.js

Doubt next auth itself is the issues, especially since its an await inside an async ... and the db.connect in the utils file has catch blocks... 🥴

![alt text](2023-04-12-error.jpg)

once I wake up I guess my only choice at this point is to post in the 100devs discord and hope really hard that someone can point me in the right direction 🥲

hoping its just my code syntax ect.

I really don't want to update any dependencies if I can avoid it, though maybe its just because my mongodb and/or next auth is slightly older 🤷‍♀️

Its frustrating since it seems most people fixed this issue by making it so all IPs are allowed, but my database is already set up to allow all IPS 🙃
https://www.mongodb.com/community/forums/t/serverselectiontimeouterror-networktimeout-topology-type-replicasetnoprimary/179979

![alt text](2023-04-12-network-access.png)

Its not my config/env since it usually DOES work?

WELP for better or worse I installed the newest versions of mongodb and mongoose. So far nothings on fire so it didn't seem to do any harm at least 🤷‍♀️

"dotenv": "^16.0.3"

Twitter Post Link: https://twitter.com/Janetthedev/status/1646130426493431809 5:37 AM · Apr 12, 2023

---

🐢did overtime for the last two days

🐢built a custom 404 and 500 pages, got session working on the static pages so the nav works right on those pages

🐤still fighting with the server error on pet profile tailor, lets see if updating mongodb & mongoose helped

🦀no anki/banki

Twitter Post Link: https://twitter.com/Janetthedev/status/1646173081889820672 8:27 AM · Apr 12, 2023

---

psst can any of you amazing people click around a bit and see if any errors pop up/it redirects you to a 500 page? https://pet-profile-tailor.vercel.app 🥺

Heres a begging shiba ina gif to pay the cute animal picture tax 🙏

Its working fine for 2 of my buddies but don't know if thats because we're all in california 🤔
Vercel had logged one 500 error, but it didn't effect them so _SHRUG_

![alt text](2023-04-12-error.jpg)

if anyone wants to try logging in the dummy account is

test@ gmail.com
password: testtest

> REPLY
> Taeho @mcwhopper63
> awesome job!
>
> i used the dummy credentials and haven't come across a 500error. I did find the textArea doesn't clear after hitting the Post Comment button. This is in the Profile page section.

> REPLY
> Sophie @soph_m_e
> Cool project! I had a look and uploaded a post and didn’t see any errors or issues, I’m in England

> REPLY
> Cory N ✨death cab for coding✨ @3MonitorNelson
> I’m giving it a test and so far so good. Really great work!

> REPLY
> David Lenh @dlenh425
> Clicked around and didn't find any error pop-ups. I added Chris P. Bacon as a test. Aside from a pop-up that says name was added successfully, user doesn't get redirected elsewhere; it stays on the page with the form still filled out. Not sure if that was intended :)

Twitter Post Link: https://twitter.com/Janetthedev/status/1646375985061969920 9:53 PM · Apr 12, 2023

---

Plans for today 🚀

☄️ Write a letter of rec for one of my buddies

☄️ Make it so users can't register with the magic link

☄️ Fight w/ any errors petprofiletailor is still throwing if any

☄️get back on the anki/banki saddle

☄️ Some overdue down time w/ ff14 & friends

magic link is fixed! new users will be redirected to the registration page

only con is the registration page requires they add a password, so not ideal for users that will always be signing in with the magic link

🤷‍♀️not important enough to focus on for now though

Twitter Post Link: https://twitter.com/Janetthedev/status/1646380095635099648 10:09 PM · Apr 12, 2023

---

Okay looks like I have to create a sign in callback to make sure users can't sign up with the magic link

https://github.com/nextauthjs/next-auth/issues/1229

and if the email doesn't already exist in the database, send them to the registration page 🤔

this is the cutest typo😂

now picturing people having to sing to sign in to their app 🎵 software dev meets musical!

![alt text](FtksnLKaAAAxykH.png)

Alright so the docs are annoying since they ONLY show the properties of Oauth provider and only vaguely hint at one property of the email provider 🙄

luckily i'm stubborn and figured out how to grab the error from the url to piece together the object https://next-auth.js.org/configuration/callbacks#sign-in-callback

![alt text](Ftk6QNaaQAAXlMU.png)
![alt text](Ftk6D6JaIAADerc.png)

it works locally! Now to deploy and make sure its working on the build version/vercel too

Users who use the magic link will be redirected to the registration page if the email does not exist in the users collection yet 🥳

<video src="images/it_works_locally.mp4" width="320" height="240" controls></video>

So theres 3 properties for the email provider:user, account and email

I need the email they enter, so I can ask my database if the user collection has a document with that email.

So I grabbed user. email . If it doesn't exist (null), they'll be punted to the registration page

![alt text](Ftk9PYQakAAf7Zf.png)
![alt text](Ftk9LFFaQAAbFae.png)

sweet the fix also works on the deployed version 🥳

Twitter Post Link: https://twitter.com/Janetthedev/status/1646395922434375680 11:12 PM · Apr 12, 2023

---

Fixed the error that @Polymath_Jesus found! Turns out I had forgotten to add the edit function for names to the profile page, whoops 😂🤦‍♀️

![alt text](FtrL65qaMAEJjC0.png)
![alt text](FtrL_r7agAAYvQp.png)
![alt text](FtrMK4UaUAEyZSv.png)
![alt text](FtrMK4UaUAEyZSv-1.png)

Thanks for the heads up friend!

Twitter Post Link: https://twitter.com/Janetthedev/status/1646853634100191235 5:31 AM · Apr 14, 2023

---

Got home from work and did a bit of project work.

Guess what, those three buttons on the landing page have finally found their lives purpose! 🥳

Thanks @alexisintech for reminding me! I had half-forgotten about finding a job for those buttons

<video src="images/got_home_from_work.mp4" width="320" height="240" controls></video>

Ended up being a bit interesting since iframes tend to flash white at first.

So I stored the onLoad property in the "loaded" state. And made it so the iframe and button only shows when the iframe is fully loaded

On vercel it still shows a brief flash🤷‍♀️better than it was though

![alt text](Ft1n1aZaUAAH3h8.png)

also I'm still SO in love with modules/react!

It was so satisfying to set up allll the embedding logic in a component, so the index page has the minimal needed information 😊

![alt text](Ft1oVkkakAE9EmH.jpg)

> REPLY
> Mujibur Rahman @devMujib
> You can use headless ui, that's Simple and you can easy make

Thanks 😁! I used headless ui for other parts of my app, but for this section I preferred just to use state && my own components ect. And its already done at this point

Twitter Post Link: https://twitter.com/Janetthedev/status/1647586882501619713 6:04 AM · Apr 16, 2023

---

stackoverflow.com/questions/71159356/nextauth-throwing-client-fetch-error-error-in-session-callback Found this little tidbit and crossings fingers this will cure the randomly occuring next auth 500 errors!

Basically, I realized jwt and session weren't async and I added extra if statements

![alt text](Ft1vlGgacAIU-H7.png)
![alt text](Ft1vvtFaEAEW0VN.png)
![alt text](Ft1vxMaakAEtqyk.jpg)

so far logging in still works, so it seems like those additions didn't break everything at least!

Promising so far but I'm wary to get my hopes up

![Shawn Spencer saying pretty please do the job pretty please do the job from psych GIF](https://media1.tenor.com/m/sC_anMe7FkEAAAAC/shawn-spencer-james-roday.gif)

Twitter Post Link: https://twitter.com/Janetthedev/status/1647596091125415936 6:41 AM · Apr 16, 2023

---

alright, I need to stop fiddling with the app and finally pass out 😂
🦎mostly just slept and worked today
🦎 knocked out a few more hours of project work

Tomorrow:
🚀work
🚀anki/banki
❓improve SEO of pet profile tailor

Twitter Post Link: https://twitter.com/Janetthedev/status/1647602496783929344 7:07 AM · Apr 16, 2023

---

wow adding Pet Profile Tailors meta info for SEO took all of 5 minutes, I feel like a goof for not adding this earlier! 😂but thought for sure it'd be more of a pain https://shopify.com/blog/how-to-write-meta-descriptions ah well, alls well that ends well

In the future maybe I'll add some personalization for some pages, but for now this should be good enough! 🎊

![alt text](Ft6FISYaUAAGha1.png)

Twitter Post Link: https://twitter.com/Janetthedev/status/1647898116828565507 2:41 AM · Apr 17, 2023

---

🦎finally added a head to pet profile tailor (getting those SEO gains 💪!)
🦎fixed bug in pet profiles followers list (showed follow button instead of unfollow)
🦎added most of my recent projects to portfolio
🦎worked
🦎did a tiny bit of anki/banki

its 5am, time to sleep! 😴

https://twitter.com/Janetthedev/status/1647947324147265537 5:57 AM · Apr 17, 2023

---

I finished the 1st version of my project Pet Profile Tailor (my "100" hours project for 100devs)! 🎊 https://lnkd.in/gFttmaxh

It empowers animal lovers to help adoption counselors create impactful, fun, and tailor-fitted adoption profiles!
code: https://lnkd.in/gizc8zPV #100devs

<video src="images/I_finished_the_1st.mp4" width="320" height="240" controls></video>

I worked as an adoption counselor in animal shelters for ~5 years. Although pet profiles are vital to boost adoption rates, there's only so much creativity a person can have at the crack of dawn.

Coffee can only do so much 😛 So I was inspired to create this site!

<video src="images/I_worked_as_an_adoption.mp4" width="320" height="240" controls></video>

After signing up, users can submit new names and descriptions,save favorites and follow other users.

Users can easily search and filter through community submitted names and descriptions.

New pet parents can also use it to brainstorm pet names for their new family member 😁

I just noticed this vid still had the likes number glitch 😂 whoops! thats what I get for using an oldish file

> REPLY
> Katy Smith @thesewhocan
> Hi Janet, I saw your 100 hour project -love it! I’d never thought that the adoption counsellors have to make up new names and stories etc for all of the animals! I made a cat name/cat backstory generator at the weekend using OpenAI:
> https://the-cats-meow.netlify.app
>
> If you’re interested in adding something like this to your project just let me know and I can share my GitHub repo with you!
> ☺️(I love the community/crowdsourcing aspect of your site though!)

!!! So cool to see someone use chatGPT for this! I've been playing around with using chatGPT as a little section to my site so this gives me hope it won't be pain itself to setup

CatPastLives cracks me up, super cute & unique feature 😂

Also may I say, your UI is gorgeous 👌🔥

> REPLY
> Katy Smith @thesewhocan
> Thanks Janet! I can’t take any credit for the UI as I just got a bootstrap theme for it (my eye for design is abysmal, but I really loved the colours and buttons on this one! ☺️)

Twitter Post Link: https://twitter.com/Janetthedev/status/1649658183273828353 11:15 PM · Apr 21, 2023

<video src="images/2023-03-21-been-squeezing-in-tiny.mp4" width="320" height="240" controls></video>
