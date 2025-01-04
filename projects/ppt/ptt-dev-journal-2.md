I played a tiny bit with authentication after work, but I'm too tired to dive in too deep.

It looks like i'll be using next-auth with this project

Twitter Post Link: https://twitter.com/Janetthedev/status/1605124423060639744 12:54 AM · Dec 20, 2022

---

making SOME progress with authentication! So far its console.logging correctly, now the real fun begins

<img
src="https://ucarecdn.com/de76653a-ccdb-4b45-9494-61069748b7d1/-/format/auto/"
alt="the console log shows the entered email and the entered"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1606178963935531008 10:44 PM · Dec 22, 2022

---

Users can now register for accounts!

Now to backtrack and get the sign in to work...

```
users

  _id: ObjectId('6354345435')
  name: "testingredirect"
  email: "ttt @gmail .com"
  password: "242423afafasfd3424"
  image: "https: / / placekitten .com/250/250"
  createdAt: 2022-12-23T09:05:55.892+00:00
  updatedAt: 2022-12-23T09:05:55.892+00:00
  __v: 0

```

<img
src="https://ucarecdn.com/61c023cd-4b61-42b4-9914-e7c04cfd61dc/-/format/auto/"
alt="screenshot showing the create account page with name, email, password and confirm password"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1606216870742200321 1:15 AM · Dec 23, 2022

---

welp login/session isn't working yet but made some progress today either way

Twitter Post Link: https://twitter.com/Janetthedev/status/1606235154942304256 2:27 AM · Dec 23, 2022

---

slowly going through to figure out why the login/sessions is so stubborn 🤔

Confirmed react useForm is working right, so step 1 done

```
console showing:

Object {email: "test@ gmail .com, password: "testtest}
     email: "test@ gmail .com"
     password: "testtest"
 Prototype: Object {....}

```

```
export default function LoginScreen(){
    const {data: session} = useSession();

    const router: useRouter();
    const {redirect} = router.query;

  useEffect(()=> {
    if (session?.user){
      router.push(redirect||'/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: {errors},
    } = useForm();

const submitHandler = data => console.log(data)
  ...
}
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1606412778763603968 2:13 PM · Dec 23, 2022

---

It's been a struggle trying to get this app to work🙃
I got everything to work except the sessions won't authenticate for some reason?🤔
I've got a few things to try tomorrow otherwise I'll have to give in and ask on discord

```
console showing:

Object {error: null, status: 200, OK: true, url: "http: / /localhost:3000/api/auth/signin?csrf=true"}

email: kyu1312323@ gmail .com pass:testtest
session on login.js:[object Object]

Object {data: null, status: "unauthenticated"}

session on _app.js: "undefined"

```

Twitter Post Link: https://twitter.com/Janetthedev/status/1606623088648781824 4:09 AM · Dec 24, 2022

---

its maddening since

1. new registrations show up in DB, errors properly show up if a user exists already in the database

2. if the incorrect login combo is given, they won't be redirected and the error messages work
   it's literally just the sessions!🙃😭

me @ the docs

![from the office, text saying why don't you explain it to me like i'm five](https://66.media.tumblr.com/7c1cf4fc4713648bf63a41ba76d19b26/tumblr_pi3426UmpI1qe8lb8o1_500.gif)

Twitter Post Link: https://twitter.com/Janetthedev/status/1606634202434523136 4:53 AM · Dec 24, 2022

---

I FIGURED IT OUT!! GUESS WHAT IT WAS?!

the next-auth version broke the app!! 12+ hours of pain and all i needed was "npm install next-auth@4.3.4"😭😂

<img 
src="https://ucarecdn.com/a454a49a-fb9a-481b-a01b-60cb9a1b390a/20221226man_laughing.gif"
alt="man laughing and crying in chair">

Twitter Post Link: https://twitter.com/Janetthedev/status/1607291082706137088 12:23 AM · Dec 26, 2022

---

I may now know more than any sane person needs to know about react-auth hahaha...ha

12+ hours later 🙃😂

<img 
src="https://ucarecdn.com/ec253775-8789-4bc0-97fa-49d251ee3b66/20221226anime_man_sliding_down_stairs.gif"
alt="anime man sliding down the stairs facedown">

Twitter Post Link: https://twitter.com/Janetthedev/status/1607297360580980736 12:48 AM · Dec 26, 2022

---

also me explaining to my non-tech friends what a session is 😂

> sessions are the powerhouse of the applications braincells! basically

> "but uh, imagine a website is a doorman where you have to say the right password to get into the club

> so you say "let me into the club" and you give the correct password.

> The doorman's braincells are a session, he goes ah! You said the right password i'll let you in.

> if the doormans braincells are dead, then you can shout the password to him and he'll just blink blankly at you"

Twitter Post Link: https://twitter.com/Janetthedev/status/1607297985951723521 12:51 AM · Dec 26, 2022

---

me @ myself when I have a ton of features I need to add to make it a MVP (minimally viable product) but...wanting to focus on the unnecessary features😂

![baby bulldog cutely swatting at camera, with text that says stop it!](https://media.licdn.com/dms/image/C5622AQGm7tW7D8d_1Q/feedshare-shrink_2048_1536/0/1618663630432?e=2147483647&v=beta&t=fB8jCZ_6-_kLqGvRxADZyw88pnlRB-KtptI-gK7sdZ8)

Twitter Post Link: https://twitter.com/Janetthedev/status/1607960536897183744 8:44 PM · Dec 27, 2022

---

alright self I'll stop trying to make it sortable (for now) 😢

so! right now I'm adding a feature where logged in users can save names they like

Twitter Post Link: https://twitter.com/Janetthedev/status/1607960973612306432 8:45 PM · Dec 27, 2022

---

which sounds simple but its going to need many parts...

so first up! if they click on the checkbox and they're not signed in,
show "you must be signed in to like names!"

Twitter Post Link: https://twitter.com/Janetthedev/status/1607963242164539393 8:54 PM · Dec 27, 2022

---

progress! If you're not signed in, the react-toastify alert will appear.

Buuut when you're signed in, if you click a heart icon, it will change them ALL red 🤔

which makes sense, as I told all the icons to get their color from "likesColor"

<img
src="https://ucarecdn.com/e382ebbc-580d-41b8-8ab3-2792cdce1796/-/format/auto/"
alt="screenshot showing a grey heart next to each name"/>

<img
src="https://ucarecdn.com/e94c344f-5c51-4081-ae25-fba1d26829f6/-/format/auto/"
alt="screenshot showing a red hearts next to each name"/>

<img
src="https://ucarecdn.com/070d776b-e8cc-43c3-8101-3f2fb645b573/-/format/auto/"
alt="showing error you must be signed in to like names"/>

```
/ / ############# LIKES FEATURE ##########/ /

const [nameLiked, setNameLiked]=useState(false)
let likesColor= nameLiked? "red":"grey"

const handleLikes = (e) => {

  {(status==="authenticated")?
    setNameLiked(!nameLiked):

    toast.error("you must be signed in to use this feature")
    }
};
```

```
tagFilters.every((tag)=>
   name.tags.includes(tag)&&
   <tr key={name._id}>
        <td className="text-purple-200 border-b-2 border-amber-300 px-4 py-2 text-left font-black">
       <label>

        <input
               style={{display:"none"}}
               type="checkbox"
               checked={nameLiked}
               onChange={handleLikes}
               data-name-id={name._id}
               / / data-amount-of-likes={names.likedby.length}
               />

         <fontAwesomeIcon
              icon={faHeart}
              className="text-4xl"
              color={likesColor}/>
                 {name.name.length}
         </label>

         </td>
     ......
   )
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1607977539540221954 9:51 PM · Dec 27, 2022

---

Welp here I am again 😂

I need to get session.user.\_id to be usable in the return section of my next js's react component but alas I can't get it to work

Tried useEffect, async await and a few others things but no luck 🙃

![kiki landing on bed face firm from kiki's delivery service](https://gifdb.com/images/high/hayao-miyazaki-laying-down-in-bed-klvxl85iwdiqyqd5.gif)

Twitter Post Link: https://twitter.com/Janetthedev/status/1608064097345765376 3:35 AM · Dec 28, 2022

---

its not pretty but it works! annnd its 6am 😂

```
export default function Example ({category, nameList, pageProps}){

  const {data: session, status} = useSession()

  let [userId, setUserId]=useState()

  useEffect(()=> {
    const UserId=localStorage.getItem("session")
    console.log(userId);
    setUserId(userId)
  },[])
  .......
}
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1608098676458811393 5:52 AM · Dec 28, 2022

---

I laughed at myself today, I was wondering why some nav buttons always worked and others were always questionable?

Turns out for some buttons I had linked TO the text, not the button itself😂whoops! Yeah that'd def cause problems haha

<img
src="https://ucarecdn.com/20cc68ac-b5c5-4280-87c1-a9d430127f73/-/format/auto/"
alt="screenshot showing the nav buttons with images"/>

```
<Menu as "div" className="inline-block text-left">

<Menu.button className="inline-flex px-4 py-2 text-sm font-medium text-white

border-r-4 border r-violet-400

hover:bg-opacity-30 hover:border-b-4 border-b-yellow-400
focus:outline-none focus-visible:ring-2
focus-visible:ring-white focus-visible:ring-opacity-75">

<FontAwesomeIcon icon={faIgloo} className="text-xl mr-1 text-violet-100"/>  <====this should be in the Link too
    <Link href="/"> / /

       <a> Home </a>
    </Link>
   <Menu.Button>
</Menu>
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1609521939307167745 4:08 AM · Jan 1, 2023

---

Today started like this, and ended like this!

I'm curious if anyone will remember what my avatar is from 👀 wink wink nudge nudge. Nothing like starting of the year with a dad joke😉

<img
src="https://ucarecdn.com/552527a3-4d47-43ea-b48f-f7dcc81a7dd5/-/format/auto/"
alt="purple page showing grey text showing profile information"/>

<img
src="https://ucarecdn.com/e01ae077-b784-4fa3-945d-7c4c42300c61/-/format/auto/"
alt="profile page now has styling applied to it"/>

<img
src="https://ucarecdn.com/45c7060d-25d0-44b1-8b4d-f06237c9549f/-/format/auto/"
alt="profile page after a yellow button is clicked, and shows more user information"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1609524358372032513 4:18 AM · Jan 1, 2023

---

You gotta love simple fixes!

I noticed the grey space under some areas, so I simply set the height to the screen height. Fixed! 🎊

```
return (
  <div className="bg-violet-900 h-screen"> <==h-screen here
      <Layout> </Layout>
      .....
)
```

<img
src="https://ucarecdn.com/3bb30036-b15d-4402-a825-bddeb7399ec0/-/format/auto/"
alt="showing grey area under the purple add name area"/>

<img
src="https://ucarecdn.com/86ce9c7b-baf8-4e7c-91b0-6f16d5ec6f93/-/format/auto/"
alt="grey area is gone"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1609826417755435009 12:18 AM · Jan 2, 2023

---

I added a toast notification for when someone successfully and unsuccessfully adds a name

<img
src="https://ucarecdn.com/210f0a40-e682-4c00-a0f3-283477f57259/-/format/auto/"
alt="shows a notification that says successfully added name: alfred"/>

<img
src="https://ucarecdn.com/8bbcd176-5e42-403e-82fd-3ff266e633f2/-/format/auto/"
alt="shows a notification that says ruh roh! alfred not added"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1609835034978156544 12:52 AM · Jan 2, 2023

---

The biggest issue I'm facing is to be able to access the session.user.\_id, so i can use the unique \_id for mongoDb queries

Next Auth's getSession() only works on the CLIENT side NOT server side. so the session data can't be used to talk to mongoDB ☹️ unless I say AWAIT getSession()

Twitter Post Link: https://twitter.com/Janetthedev/status/1609857840415657985 2:23 AM · Jan 2, 2023

---

I currently save the current user's id in localStorage but this is ALSO only client side (and security wise, isn't a good option)

I thought over my options, and the best choice seems to be to use contextAPI and getSession (store user id so it can be used throughout the app)

```

export default function LoginScreen(){
   / / grab data from useSession and rename data to session

  const {data: session} = useSession();

  const router: useRouter();
  const {redirect} = router.query;
  / / extract redirect from router.query

  / / import this from line 2/react

  useEffect(()=>{
    if(session?.user){
      localStorage.setItem("session",JSON.stringify(session.user._id))
       / / console.log(session.user._id),

       router.push(redirect || '/');
    }
  }, [router, session, redirect]);
  / / if the session exists, then the user is already signed in. so if this is true, go back to the homepage
  / / we need to use router (line 8) to redirect our user
}

```

My Options:

1. When logging in, use the contextAPI with getSession() to save session in a stored state

   when logging out, remove session from stored state

   con: will have to use await to access session data when first adding it to the context api

   pro: won't have to use unstable_getServerSession

2. use unstable_getServerSession with ContextAPI

   Pro: won't need to use await to access session data like we would with getSession() since this is server side not client side

   con: unstable, aka its experimental and may be removed one day

3. use unstable_getServerSession by itself

   con: will have to call it every time its used

   con: unstable aka its experimental and may be removed one day

   pro: won't have to set up contextAPi

Twitter Post Link: https://twitter.com/Janetthedev/status/1609858935145795589 2:27 AM · Jan 2, 2023

---

so when the user logins in, I'll have it set up so that it saves the current user's Id in the context (storage for global state objects)

When they sign out, it'll be removed from context

Twitter Post Link: https://twitter.com/Janetthedev/status/1609859499258707976 2:29 AM · Jan 2, 2023

---

So far I know:

1. Context object STORES the shared data
2. Provider DELIVERS the context object when requested

Creating the actual context itself seems dead simple! 🥳

But I can feel my brain go numb whenever I try to figure out how to write the provider bit 🥴

```
import React, {useContext, createContext, useState, useEffect} from 'react'

/ /  create context
const UserSessionContext= createContext(null)
/ /  https:/ / www. youtube .com/watch?v=t9WmZFnE6Hg&ab_channel=PedroTech
/ /  6:53 null is good for testing

```

Twitter Post Link: https://twitter.com/Janetthedev/status/1609862959135879170 2:43 AM · Jan 2, 2023

---

huh it seems I misunderstood the context API. It looks like you have to declare the prop when you wrap something in < context . provider> . And my \_app.js page doesn't have access to session, only its children... so I can't place session in the context store?

```
import UserSessionContext from '../src/context/UserSessionContext';

function MyApp({

  component,
  pageProps: { session, ...pageProps}

})
{
  / / setting up the prop for UserSessionContext, grabbing session information
  / / ????

    return (

      <SessionProvider session={session}>

      {/* <UserSessionContext.Provider value={sessionInfo}>

         Every context Object comes with a Provider React component

         The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider,

         in this case ALL components */}

         <Component {...pageProps}/>

         {/* </UserSessionContext.Provider> */}
      .......
    )
}
```

```
_app.js

import React, {useContext, creatContext, useState, useEffect} from 'react'

/ /  create context

const UserSessionContext=createContext(null)
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1609896163578372099 4:55 AM · Jan 2, 2023

---

hoping someone will see my question on the 100devs discord, looks like I might have to use Next auth's unstable_getServerSession after all? 🥴

What I submitted:

> hi everyone, I need some advice for my next.js project which uses Next auth for authentication.

> The main problem is that I'm trying to figure out the best way to grab the current user's id from the current session so its available immediately server side. This way I can use it to query my mongoDB database.

Follow up comment from me:

> My thought process:

> So I understand getSession() is client side only, so it would have to wrapped in an await to grab session data. Otherwise it would return null.

> So what is the best way to make it so session data is available RIGHT AWAY, server side, so I can use the current user_id when sending queries to the MongoDb database?

> (my [ ... nextAuth].js is set up so that user_id is included in the returned session object. My session strategy is JWT)
> https://github.com/JSMarsh813/PetProfileTailor/blob/liking-name-feature/pages/api/auth/%5B...nextauth%5D.js

> For example, on my dashboard page I want to grab the user's id from the current session and then query my mongodb database, so I can grab the users most current information. I would then use that information to fill out the dashboard page (user's likes, user's profile image, user's username, ect).

> Another Example, my app gives users a list of names they can like or dislike. I want to grab the userID to query the MongoDB database to see if the current user already liked a name. And then sent a get or patch request when the user likes or dislikes the name.

> 1. I thought about using react context in \_app.js but I believe session isn't available in \_app.js? Aka only its child components have access to session, so theres no way to set the current session prop for the userSessionContext right?

> 2. use unstable_getServerSession, though I'd rather not center a large part of my app on an experimental feature that could be removed if possible. https://next-auth.js.org/tutorials/securing-pages-and-api-routes#server-side

> 3. Some other method?

> https://www.jmfurlott.com/handling-user-session-react-context/ I had found this, would you all say js cookies with context is a good option to grab user ids?

Twitter Post Link: https://twitter.com/Janetthedev/status/1609896731600375808 4:57 AM · Jan 2, 2023

Yeah as I figured, I can't access useSession in \_app .js, since \_app .js can't be wrapped in a

```
<SessionProvider session={session}>
```

😭 Still tried anyway for the wild thrill of trying impossible things haha

But I confirmed that I got context to work with a normal string `:)`

<img
src="https://ucarecdn.com/ecea7b43-9544-4f95-a2ac-b063e0748de7/-/format/auto/"
alt="screenshot showing if context works i'll show up :)!"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1609902930702000128/photo/1 5:22 AM · Jan 2, 2023

---

Its times like these that I really LOVE💓 react!

Look at that, ONE beautiful line which secretly carries two reusable components

- MainChartComponent=54 lines and

- nameListing which is inside MainChartComponent = 70ish lines

🥰🥰🥰

```
<section className="favoriteNames">

   <h4> Your Favorite Names </h4>

   <MainChartComponent nameList={nameList}/>

</section>
```

<img src="https://ucarecdn.com/1377406f-eb3f-4e47-ad45-1f543f938daa/-/format/auto/"
alt="showing the profile page with all the names shown, and the liked ones have a red heart">

Twitter Post Link: https://twitter.com/Janetthedev/status/1609913421931376641 6:04 AM · Jan 2, 2023

---

Small achievement! 🎊

Fixed the tags so when they show up there's a ", " between them 😁

Laughed when I tried to do ".split().Join(", ")" before my brain clicked on. Braincell: "aayy this is an array not a string friend `:)`"

```
<td className="border-b-2 border-amber-100 px-4 py-2 text-left fond-medium">{
  (name.tags)
        .map(names=>names)
        .join(", ")}
</td>
```

<img src="https://ucarecdn.com/87acac53-1a45-48df-89bf-385dadd35def/-/format/auto/"
alt="the tags christmas and male have no spaces between them">

<img src="https://ucarecdn.com/360ad2dc-77cd-4bfa-8f7b-d4b381c4295a/-/format/auto/"
alt="the tags christmas and male now have a comma and space between them">

Twitter Post Link: https://twitter.com/Janetthedev/status/1609916870056112129 6:17 AM · Jan 2, 2023

---

Success is mine! I could cry with joy and relief 🥺The put request for my likes features finally works!

I've been slooowly working on it with any spare time I've had this week, and it finally paid off 🔥

<iframe src="https://ucarecdn.com/66de41b9-11d5-4fee-8480-0d10fc9e2b66/20230106successismineclickinghearts.mp4" width="320" height="240" title="showing the user clicking the favorite hearts and the database reflecting the change" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Twitter Post Link: https://twitter.com/Janetthedev/status/1611349214780624897 5:09 AM · Jan 6, 2023

---

For a sec I couldn't figure out why I couldn't get my mobile menu's text to center 🤔

I had forgotten they were flexed, once that was removed it works!

```
<Menu.Item as="div">
    <Link href="/adddescriptions">
    <button
        classname="hover:bg-yellow-500
                   hover:text-violet-900

                   text-white w-full items-centered
                   group flex <===where the issue was
                   "
        ......
```

<img src="https://ucarecdn.com/b1db766d-9efd-4696-81c9-deb5562a2fa1/-/format/auto/"
alt="showing a drop down nav bar, only the first 2 items are centere">

Twitter Post Link: https://twitter.com/Janetthedev/status/1611728622100054016 6:17 AM · Jan 7, 2023

---

I was getting this error that what rendered was different than what the server had initially rendered

I realized it was because the tagList from the fetch only was grabbed AFTER the server had rendered the page.

Once I told it to wait, no more error messages ~

```
export const getServerSideProps = async () => {

  let tagList= await fetch('http : / / localhost:3000 /api/individualTags');
  let categoryList= await fetch ('http : / / localhost:3000 /api/name-categories');

     let tagData= await tagList.json()
     let categoryData = await categoryList.json()

   return {
      props: {
        tagList: tagData, <=== highlighted code
        categoryList: categoryData
      },
   }
   / / and provide the data as props to the page by returning an object from the function
}

function AddNewNameWithTags({tagList, ccategoryList}){
   const {data: session, status} = useSession()

   console.log(status)
   console.log(session)

  return (
    <div className="bg-violet-900 h-screen text-white">

       <Layout> </Layout>

      <div style={{width:"700px"}} className="mx-auto mt-4">
      {/* if not signed in, do not allow them to add names*/}

      {(status!="authenticated")&&<div> To avoid spam, we ask users to sign in to add names </div>}

      {(status === "authenticated") &&
       <p> Signed in as {session .user .name} </p>}

       <NewNamesWithTagData tagList={tagList}/>
      .....
  )
}
```

> Error Message in console:

> Warning: Prop `id` did not match. Server: "react-select-14-live-region" client"react-select-3-live=region"

> span

> withEmotionCache/<@webpack-internal:///./node_modules/@emotion/react/dist/emotion-element-6a8883da9.browser.esm.js::57-66

> AllyText

> LiveRegioin@webpack-internal:///./node_modules/react-select/dist/Select-40119e12.esm.js:122:23

> div

> .....

```
{(status === "aunthenticated") &&

<p> Signed in as {session .user .name}</p>&&
<NewNameWithTagsData tagList={tagList} userId={session.user._id}/>}
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1611945493722181632 8:38 PM · Jan 7, 2023

---

the user who submits the new names id is now added to the name in the database!
(I was having problems but then remembered getSession() has to be used on pages not components, so I passed the session as a prop)

Descriptions can now be added as well

<iframe src="https://ucarecdn.com/b14676ee-8062-4897-9ecd-379a87cc2f1f/20230107theuserwhosubmitsnewnames.mp4" width="320" height="240" title="showing that the user gets a notice their name submission succeded and we also see it worked in the database" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Twitter Post Link: https://twitter.com/Janetthedev/status/1611994453430120449 11:53 PM · Jan 7, 2023

---

Is anyone familiar with next Auth sessions for next js? I'm trying to add the profile image data to my session and I can't get it to work🤔

Below is my nextauth file, console.log, mongodb data and user model #SoftwareDeveloper #Nextjs #nextauth

<img src="https://ucarecdn.com/a8388982-1294-41e9-99ed-64836b63a115/-/format/auto/"
alt="2023-01-11-next-auth-file.png"/>

```
What the console showed:

Object {user: {...}, expires: "2023-02-10T14:45:56.120Z"}
     expires: "2023-02-10T14:45:56.120Z"
     user: Object {name: GhibliMagic", email: "teessssst@ gmail .com", _id:"22222222222sfds"}
         _id:"22222222222sfds"
         email: "teessssst@ gmail .com"
         name: "GhibliMagic"
         <prototype>: Object {...}
     ....
```

```
Atlas MongoDB Database

_id: "22222222222sfds"
name: "GhibliMagic"
password: "$325345^%654$%^*&*7876898fasfcsf3433"
createdAt: 2022-12-26T02:51:26.328+00.00
updatedAt: 2023-01-05T14:36:11.922+00.00
__v: 1
favbehaviors: Array
favnames: Array
profileimage: "http : / / placekitten. com/50/50"

```

```
ShelterNext>models>user.js>UserSchema

const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  faveNames: {
    type: Array,
    default: []
  },
  favBehaviors:{
    type: Array,
    default: [],
  },
  profileImage:{
    type:String,
    default:"http : / / placekitten .com/50/50"
  }

}, {timeStamps:true})

const User= mongoose.Models.User || mongoose.model('User', UserSchema);
export default User;

```

Twitter Post Link: https://twitter.com/Janetthedev/status/1613201046473682947 7:47 AM · Jan 11, 2023

---

tried this and it didn't work either `:(`

```
[...nextAuth].js

provider:[
  ......

  if (user && bcrypt.js.compareSync(credentials.password, user.password)){
    const returnedUser= {
      _id: user ._id,
      name: user .name,
      email: user .email,
      profileimage: user .profileimage,
    }
    return Promise.resolve(returnedUser)
  }
   throw new Error ('Invallid email or password');
  ......
]

```

Twitter Post Link: https://twitter.com/Janetthedev/status/1613201592920190979 7:50 AM · Jan 11, 2023

REPLY FROM Rawand Faraidun @rawandfaraidun https://twitter.com/rawandfaraidun

> try replacing the `callbacks` object with this:

> callbacks: {

> jwt({ token, user }) {

> if (user) token = user

> return token

> },

> session({ session, user, token }) {

> session.user = token

> return session

> }

> }
>
> Twitter Post Link: https://twitter.com/rawandfaraidun/status/1613989983915806722 12:02 PM · Jan 13, 2023

THANK YOU! That was it, words can't express my gratitude!

You're a lifesaver

![gif of spongebob bowing](https://media1.tenor.com/m/pJ-kOhx8dkYAAAAC/spongebob-worship.gif)

Twitter Post Link: https://twitter.com/Janetthedev/status/1614200418107797506 1:59 AM · Jan 14, 2023

---

alright so on postman my api, which gives a list of all names the current user liked works, but I'm still trying to get it to work in the actual app...

<img src="https://ucarecdn.com/d04679e9-f97a-43c3-8c29-9bf032860bae/-/format/auto/"
alt="screenshot of postman showing its getting the correct object back">

Twitter Post Link: https://twitter.com/Janetthedev/status/1613820757137846275 12:50 AM · Jan 13, 2023

---

Got it to work! On the dashboard, now only the current user's favorite names show up!🥳

```
export const getServerSideProps = async (context) -> {
  .....

  let filteredNames=""
     if (session){
         let filteringNames= await fetch(`http : / / localhost: 3000/api/individualnames/namesContainingUserId/${session.user._id}`);

         filterednames = await filteringNames.json
     }
}
```

<img src="https://ucarecdn.com/d0ba89b9-1cf8-4211-93f8-5478fd4aeadf/-/format/auto/"
alt="screenshot showing only the favorite names are showing"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1613836487359098885 1:52 AM · Jan 13, 2023

---

Thanks to @rawandfaraidun (https://twitter.com/rawandfaraidun) I managed to fix my [...nextauth].js file so the session object will have the user's profile image link!

now when I load session in getServerSideProps with unstable_getServerSession, I can grab the profile image before rendering even starts 🥳

<img src="https://ucarecdn.com/33b2fb12-e3f4-4ee2-8834-0aaf353ff0d9/-/format/auto/"
src="showing a comparison of the code before and after">

```
export const getServerSideProps = async (context) =>{
  let response= await fetch('http : / / localhost: 3000/api/name-categories');
  let data = await response.json()

  let nameResponse = await fetch('http : / / localhost: 3000/api/individualNames');
  let nameData = await nameResponse.json()

  const session = await unstable_getServerSession(context.req, context.res, authOptions) <=== highlighted code
}
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1614234032044396544 4:12 AM · Jan 14, 2023

---
