# Tossing Profile Image Urls into a Session Object!

For a sec I couldn't figure out why I couldn't get my mobile menu's text to center 🤔

I had forgotten they were flexed, once that was removed it works!

```
<Menu.Item as="div">
    <Link href="/adddescriptions">
    <button
        classname="hover:bg-yellow-500
                   hover:text-violet-900

                   text-white w-full items-centered
                   group flex <============ where the issue was
                   "
        ......
```

<img src="https://ucarecdn.com/b1db766d-9efd-4696-81c9-deb5562a2fa1/-/format/auto/"
alt="showing a drop down nav bar, only the first 2 items are centere">

Twitter Post Link: https://twitter.com/Janetthedev/status/1611728622100054016 6:17 AM · Jan 7, 2023

---

I was getting this error that what rendered was different than what the server had initially rendered

I realized it was because the tagList from fetch was only grabbed AFTER the server had rendered the page.

Once I told it to wait, no more error messages ~

```
export const getServerSideProps = async () => {

  let tagList= await fetch('http : / / localhost:3000 /api/individualTags');
  let categoryList= await fetch ('http : / / localhost:3000 /api/name-categories');

     let tagData= await tagList.json()
     let categoryData = await categoryList.json()

   return {
      props: {
        tagList: tagData, <==================== highlighted code
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

Error Message in console:

> Warning: Prop `id` did not match. Server: "react-select-14-live-region" client"react-select-3-live=region"
>
> span
>
> withEmotionCache/<@webpack-internal:///./node_modules/@emotion/react/dist/emotion-element-6a8883da9.browser.esm.js::57-66
>
> AllyText
>
> LiveRegioin@webpack-internal:///./node_modules/react-select/dist/Select-40119e12.esm.js:122:23
>
> div
>
> .....

```
{(status === "authenticated") &&

<p> Signed in as {session .user .name}</p>&&
<NewNameWithTagsData tagList={tagList} userId={session.user._id}/>}
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1611945493722181632 8:38 PM · Jan 7, 2023

---

The id of the user who submits a new name is now added to the name in the database!

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

What the console showed:

```

Object {user: {...}, expires: "2023-02-10T14:45:56.120Z"}
     expires: "2023-02-10T14:45:56.120Z"
     user: Object {name: GhibliMagic", email: "teessssst@ gmail .com", _id:"22222222222sfds"}
         _id:"22222222222sfds"
         email: "teessssst@ gmail .com"
         name: "GhibliMagic"
         <prototype>: Object {...}
     ....
```

Atlas MongoDB database

```
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

I tried this and it didn't work either `:(`

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
>
> ````callbacks: {
>
> jwt({ token, user }) {
>
> if (user) token = user
>
> return token
>
> },
>
> session({ session, user, token }) {
>
> session.user = token
>
> return session
>
> }
>
> } ```
>
> Twitter Post Link: https://twitter.com/rawandfaraidun/status/1613989983915806722 12:02 PM · Jan 13, 2023
> ````

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

Got it to work! Now on the dashboard, only the logged in user's favorite names show up!🥳

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
