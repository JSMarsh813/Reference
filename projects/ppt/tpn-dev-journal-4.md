# Nervously Making Friends with Unstable_getServerSession 😅

You gotta love simple fixes!

I noticed the grey space under some areas, so I simply set the height to the screen height. Fixed! 🎊

```
return (
  <div className="bg-violet-900 h-screen"> <==h-screen here
      <Layout> </Layout>
      .....
)
```

Before:

<img
src="https://ucarecdn.com/3bb30036-b15d-4402-a825-bddeb7399ec0/-/format/auto/"
alt="showing grey area under the purple add name area"/>

After:

<img
src="https://ucarecdn.com/86ce9c7b-baf8-4e7c-91b0-6f16d5ec6f93/-/format/auto/"
alt="grey area is gone"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1609826417755435009 12:18 AM · Jan 2, 2023

---

I added toast notifications for when someone: successfully and unsuccessfully adds a name

<img
src="https://ucarecdn.com/210f0a40-e682-4c00-a0f3-283477f57259/-/format/auto/"
alt="shows a notification that says successfully added name: alfred"/>

<img
src="https://ucarecdn.com/8bbcd176-5e42-403e-82fd-3ff266e633f2/-/format/auto/"
alt="shows a notification that says ruh roh! alfred not added"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1609835034978156544 12:52 AM · Jan 2, 2023

---

The biggest issue I'm facing is to be able to access the session.user.\_id, so i can use the user's unique \_id for mongoDb queries

Next Auth's getSession() only works on the CLIENT side NOT server side. so the session data can't be used to talk to mongoDB ☹️ unless I say AWAIT getSession()

Twitter Post Link: https://twitter.com/Janetthedev/status/1609857840415657985 2:23 AM · Jan 2, 2023

---

I currently save the current user's id in localStorage but this is ALSO only client side (and security wise, isn't a good option)

I thought over my options, and the best choice seems to be to use contextAPI and getSession (store user id so it can be used throughout the app)

```

export default function LoginScreen(){

  const {data: session} = useSession();
        / / grab data with useSession and rename the data to session
        / / session is a dependency for the useEffect below, so it'll trigger the useEffect to start

  const router: useRouter();
  const {redirect} = router.query;
        / / extract redirect from router.query

  useEffect(()=>{
    if(session?.user){
      localStorage.setItem("session",JSON.stringify(session.user._id))
       / / if there is a session, add the session information to localstorage
       router.push(redirect || '/');
    }
  }, [router, session, redirect]);

     / / if the session exists, then the user is already signed in. so if this is true, go back to the homepage ( router.push(redirect || '/');)
     / / we need to use router (line 8) to redirect our user
}

```

My Options:

1. When logging in, use the contextAPI with getSession() to save the session in a stored state

   when logging out, remove session from stored state

   con: when first adding session data to the context api, I'll have to use await to access the session data

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

so when the user logins in, I want it to save the current user's Id in the context (storage for global state objects)

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


/ /  reference https:/ / www. youtube .com/watch?v=t9WmZFnE6Hg&ab_channel=PedroTech
/ /  6:53 null is good for testing

```

Twitter Post Link: https://twitter.com/Janetthedev/status/1609862959135879170 2:43 AM · Jan 2, 2023

---

huh it seems I misunderstood the context API. My \_app.js page doesn't have access to session, only its children... so I can't place session in the context store? And It looks like you have to declare the prop when you wrap something in < context . provider> .

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

I'm hoping someone will see my question on the 100devs discord, looks like I might have to use Next auth's unstable_getServerSession after all? 🥴

What I submitted:

> hi everyone, I need some advice for my next.js project which uses Next auth for authentication.
>
> The main problem is that I'm trying to figure out the best way to grab the current user's id from the current session so its available immediately server side. This way I can use it to query my mongoDB database.

Follow up comment from me:

> My thought process:
>
> So I understand getSession() is client side only, so it would have to wrapped in an await to grab session data. Otherwise it would return null.
>
> So what is the best way to make it so session data is available RIGHT AWAY, server side, so I can use the current user_id when sending queries to the MongoDb database?
>
> (my [ ... nextAuth].js is set up so that user_id is included in the returned session object. My session strategy is JWT)
>
> https://github.com/JSMarsh813/PetProfileTailor/blob/liking-name-feature/pages/api/auth/%5B...nextauth%5D.js
>
> For example, on my dashboard page I want to grab the user's id from the current session and then query my mongodb database, so I can grab the users most current information. I would then use that information to fill out the dashboard page (user's likes, user's profile image, user's username, ect).
>
> Another Example, my app gives users a list of names they can like or dislike. I want to grab the userID to query the MongoDB database to see if the current user already liked a name. And then sent a get or patch request when the user likes or dislikes the name.
>
> 1. I thought about using react context in \_app.js but I believe session isn't available in \_app.js? Aka only its child components have access to session, so theres no way to set the current session prop for the userSessionContext right?
>
> 2. use unstable_getServerSession, though I'd rather not center a large part of my app on an experimental feature that could be removed if possible. https://next-auth.js.org/tutorials/securing-pages-and-api-routes#server-side
>
> 3. Some other method?
>
> https://www.jmfurlott.com/handling-user-session-react-context/ I had found this, would you all say js cookies with context is a good option to grab user ids?

Twitter Post Link: https://twitter.com/Janetthedev/status/1609896731600375808 4:57 AM · Jan 2, 2023

Yeah as I figured, I can't access useSession in \_app .js, since \_app .js can't be wrapped in a

```
<SessionProvider session={session}>
```

😭 I still tried anyway for the wild thrill of trying impossible things haha

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

What the favorite names listing currently looks like:

<img src="https://ucarecdn.com/1377406f-eb3f-4e47-ad45-1f543f938daa/-/format/auto/"
alt="showing the profile page with all the names shown, and the liked ones have a red heart">

Twitter Post Link: https://twitter.com/Janetthedev/status/1609913421931376641 6:04 AM · Jan 2, 2023

---

Small achievement! 🎊

I fixed the tags so when they show up there's a ", " between them 😁

I laughed when I tried to do ".split().Join(", ")" before my brain clicked on. Braincell: "aayy this is an array not a string friend `:)`"

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
