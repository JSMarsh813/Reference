# Letting Users Fling Profile Images up to the Cloud(inary database)

Now if a user goes to the dashboard when not logged in, they'll be automatically redirected to the login page.

useRouter() is a bit of an odd one, it doesn't work unless I stuff it in a useEffect, because it only works on client side.

```
function dashboard ({category, nameList, sessionFromServer, favNames}){
  const [treatBreakdownMenuOpen,setTreatBreakdownOpen]=useState(false)
  const valuetest= useContext(UserSessionContext);

const router = useRouter();

useEffect(()=> {

  if(!sessionFromServer){
    router.push('/login')}
  }, [router, sessionFromServer]);
  ......
}
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1614234667666010112 4:15 AM · Jan 14, 2023

---

I finished my component that has the rank titles!

If they have more points than 40, then it defaults to the "A good Pupper title".

I was confused for a hot sec until I remember to do Math.floor! (so 1.2 becomes 1, ect) All those codewars memories are flooding back to me

```
import React from 'react'

function RankNames(points){

  let rankName=""
  let rankTitlesByPoints={
    0: "Babiest toe beans",
    1: "Autodromkatzerl/bumper car tail kitten",
    2: "The Tinest Woofer"
    3: "World Class shoe chewer",
    4: "Baby gate jumper extraordinaire",
  }
  let pointsDividedBy10=Math.floor(+Object.values(points)/10)

     rankName= rankTitlesByPoints[pointsDividedBy10]||"A good pupper"

  return (
      <span className="text-yellow-400">{`${rankName}`}</span>
  )
}

export default RankNames
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1614236185429250050 4:21 AM · Jan 14, 2023

---

I put the rank names component into the dashboard page. So it automatically adjusts the title, based on the users current number of points (treats)

<img src="https://ucarecdn.com/242f0e7b-829f-4968-8114-21660b5c7456/-/format/auto/"
alt="showing profile page with their current rank title shown"/>

```
<section className="userStatsSection pt-4">
  .....
  <div>
      <FontAwesomeIcon icon={faRankingStar} className="text-2xl mr-2 text-yellow-400"/>
      <section>
            Current Rank Title:
              <RankNames points={totalPoints}>
      </section>
  </div>
</section>
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1614236826302287872 4:23 AM · Jan 14, 2023

---

I'm going to have the user's name and profile image load in ServerSideProps, so theres no delay.

However components can't use ServerSideProps, so I'll need to pass them as props to the layout from EACH page that calls it ...

I'll fight with that tomorrow

<img src="https://ucarecdn.com/253fcb7a-6089-4730-b48a-3cda98f38db0/-/format/auto/"
alt="2023-01-14-showing-the-signin-user-and-their-profile-image.png"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1614238710152957954 4:31 AM · Jan 14, 2023

---

🙌 fixed the header so it grabs session from serversideprops

🙌 did a few small edits

🙌 Started working on making it possible for users to upload profile images with cloudinary, I got to the highlighted part tonight. I'm giving my brain a break for now 🥱

PART 1:

- Allow User to attach a file (DONE)

  upload preset name + folder name = "profile_images"

  env file done

  utils => cloudinary config file done

  installed datauri and multer

  datauri: will help us convert parsed files (images and videos) to base 64 encodings

  multer: will help us parse the request body

  next-connect: will help us add Multer as a middleware to a router handler

- Upload file to cloudinary

  in response object, grab public_id

  let CloudinaryImagePublicId=public_id
  (can test by having it show up on the front end)

Once it works: PART 2:

- start a patch/put request to api/uploadProfileImage with the
  request {uerId, CloudinaryImagePublicId}

  look in users collection, find one with the current users id

  user.profileimage ===> replace with CloudinaryImagePublicId

Twitter Post Link: https://twitter.com/Janetthedev/status/1614554408490250241 1:25 AM · Jan 15, 2023

---

My intention was to relax but, I ended up started on the social area of the app (batsignal/playyard) 😂

Users can ask the community for suggestions for names, pet descriptions, fundraisers, ect or just show off images of their pets

<iframe width="640" height="480" 
title="showing a working community page post with an image, title, text and more"
src="https://ucarecdn.com/0eb47d13-3102-49ae-92ba-4227c650fabe/20230115myintentionwastorelax.mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Twitter Post Link: https://twitter.com/Janetthedev/status/1614589714857877509 3:46 AM · Jan 15, 2023

---

🐤worked a tiny bit on integrating cloudinary

🐤Started on the filtering system for the posts

Twitter Post Link: https://twitter.com/Janetthedev/status/1614973965583421440 5:12 AM · Jan 16, 2023

---

Users can now upload profile image to cloudinary and have it replace the profile image in their mongoDB user document!

I wanted to use the widget but its extra broken for function components rn 😅

Look at all those error messages in that second sandbox
https://support.cloudinary.com/hc/en-us/artic

<img src="https://ucarecdn.com/9e7f69cf-c5a7-4091-81cd-25a6cf76f14e/-/format/auto/" alt="showing a section that lets users upload a profile image but its not very styled currently"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1615316730309660672 3:54 AM · Jan 17, 2023

---

I temporarily have a cool cat 😎😼 as a profile picture, eventually I'll go back to the turtle duck!

<img src="https://ucarecdn.com/6ffb771b-54e1-483a-907e-9c84f4b58dd6/-/format/auto/" alt="profile image of a cat on a skateboard with the text bye over it"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1615320136805937155 4:08 AM · Jan 17, 2023

---

I was confused why I had 2 toast containers for a moment, then I remembered there was another in the nav bar!

so I got rid of the one in the nav bar for now. Phew, nice easy fix.

<img src="https://ucarecdn.com/c22b6144-20f9-4b9e-abf6-b48d2e343eaa/-/format/auto/" alt="showing two notifs pop up that say profile image uploaded successfully"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1615321177769259009 4:12 AM · Jan 17, 2023

---

time to de-uglyify this bad boy and reword some things (uploading avatar section)

<img src="https://ucarecdn.com/73424412-ac61-4d4f-8d88-0b4b94fa44f2/-/format/auto/" alt="showing profile settings page but its not styled much"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1615488312789340161 3:16 PM · Jan 17, 2023

---

When styling I found out that file input is a bit picky, it needs to be onCHANGE not onCLICK.

If its switched to onClick, clicking it will do nothing (it will give back undefined)

```
<input
  onChange={handleImageAttachment}
  accept=".jpg, .png, .jpeg, .gif"
  className="fileinput mb-4"
  type="file">
</input>
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1615510358525120512 4:44 PM · Jan 17, 2023

---

It looks MUCH better!

I also used state to decide when the upload button is disabled and what it looks like

<iframe src="https://ucarecdn.com/6a9aba2a-5e31-4c10-b271-0a21aefd300e/20230117looks_much_better.mp4" width="640" height="480" title="the update profile page is now styled and works" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Twitter Post Link: https://twitter.com/Janetthedev/status/1615527956180504577 5:54 PM · Jan 17, 2023

---

I added a quick image to this page too ~

<img src="https://ucarecdn.com/260e0ae0-2fcf-45fe-9387-07a43149d874/-/format/auto/" alt="showing update profile page with an image on top with a dog with sunglasses" />

Twitter Post Link: https://twitter.com/Janetthedev/status/1615537955862609922 6:33 PM · Jan 17, 2023

---

Future users on smaller screen sizes/mobile rejoice!

I made a toggle button so the user can get rid of the filter menu if they want!

(I'll be changing that banner later, the text on top of the image is mild torture for the eyes rn, but eh, future me will take care of that 😂)

<iframe src="https://ucarecdn.com/d44ed53e-09b3-4594-97f4-d3f817998198/20230117futureusersonsmaller.mp4"  width="640" height="480" title="showing the toggle filter menu works" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Twitter Post Link: https://twitter.com/Janetthedev/status/1615546973695934464 7:09 PM · Jan 17, 2023

---

aaah so satisfying, its the little things in life ☺️

I imported a component and replaced all the class= with className= with one simple button click!

<img src="https://ucarecdn.com/f3e00f79-2ea0-48c5-8c5c-a3ce02123e87/-/format/auto/" alt="showing the popup that lets us enter text to find, and then the second line is text we replace it with"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1615580915241226240 9:24 PM · Jan 17, 2023

---

I made progress on the front-end side of things in the community area!

I was struggling to get the buttons to center until I stumbled across a tip online to use text-center on its parent component

<iframe src="https://ucarecdn.com/f86c6be1-0c41-40a9-b867-2e4d2bc3f13f/20230118madeprogressonthefrontend.mp4"  width="640" height="480" title="showing the community areas filter, post and comment settings all work" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Twitter Post Link: https://twitter.com/Janetthedev/status/1615678479303077888 3:52 AM · Jan 18, 2023

---

two of my pages keep making fast refresh do a full reload... not looking forward to debugging that ugh

![a gif charmander surrounded by 2 bushes, when he uses a waterbucket to put out the fire in one bush the other one catches fire because of his tail](https://ucarecdn.com/de82ae28-15ce-4524-b06e-8322b316bff5/20230118charmanderdebug.gif)

Twitter Post Link: https://twitter.com/Janetthedev/status/1615683520839716864 4:12 AM · Jan 18, 2023

---

I fixed the full reload bug! the page's function component needed to be capitalized😂🤦‍♀️

Also I fixed mobile view for the posts page! One of the components had been set to width max instead of width full.

<iframe title="showing the community page working"  width="640" height="480" src="https://ucarecdn.com/57fdef2a-ba83-4b2c-bd60-cbcc0423fdf2/20230118fixedthefullreloadbug.mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe

---

I added a footer, which decided to float on one of my pages!
🤪

I found out it was because one of the divs was set to h-screen, so it wasn't resizing to the content. Even though visually it had looked fine.

Removing that height fixed it!💪

<img src="https://ucarecdn.com/be0061f2-8040-4bd8-bb40-64215ccce73f/-/format/auto/" alt="the footer is floating over the list of names"/>

```
<div className="grow bg-darkPuple rounded-box place-items-center
h-screen"<===the problem area>

{/* button that toggles the filter div */}

<GeneralButton
   text="Toggle Filter Menu"
   onClick={()=>SetIsOpen(!isOpen)}/>
```

<img src="https://ucarecdn.com/157d71da-1b0b-4a27-8693-d0c05e60bebe/-/format/auto/" alt="using inspector to see that the flexed div ends where the footer starts at"/>

<img src="https://ucarecdn.com/e8b6e414-8630-4c89-b8f6-3a7185cdc391/-/format/auto/" alt="the footer is now at the bottom of the page"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1615914868472942597 7:31 PM · Jan 18, 2023

---
