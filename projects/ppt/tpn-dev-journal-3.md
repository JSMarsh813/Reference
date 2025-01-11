# Bring on the Hearts (Likes) and Let's Squash a 12+ Hour Next-Auth Bug!

I realized I should change my data around a bit and change something from a post request to a put request 🤔

lets see how this goes!

Twitter Post Link: https://twitter.com/Janetthedev/status/1603663890323148800 12:10 AM · Dec 16, 2022

---

I played a tiny bit with authentication after work, but I'm too tired to dive in too deep.

It looks like i'll be using next-auth with this project

Twitter Post Link: https://twitter.com/Janetthedev/status/1605124423060639744 12:54 AM · Dec 20, 2022

---

I'm making SOME progress with authentication! So far its console.logging correctly. Now the real fun begins!

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

welp login/session isn't working yet but I made some progress today either way

Twitter Post Link: https://twitter.com/Janetthedev/status/1606235154942304256 2:27 AM · Dec 23, 2022

---

I'm slowly going through my code to figure out why the login/sessions is so stubborn 🤔

I confirmed react useForm is working right, so step 1 done

console showing that the object is getting sent properly from useForm:

```
Object { email: "test@ gmail .com, password: "testtest}
     email: "test@ gmail .com"
     password: "testtest"
 Prototype: Object {....}

```

code for useForm:

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

It's been a struggle to try to get this app to work🙃

I got everything to work except the sessions won't authenticate for some reason?🤔

I've got a few things to try tomorrow otherwise I'll have to give in and ask on discord

console showing:

```

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

2. if the incorrect login combo is given, they won't be redirected to the dashboard and the error messages work
   it's literally just the sessions!🙃😭

me @ the docs

![from the office, text saying why don't you explain it to me like i'm five](https://66.media.tumblr.com/7c1cf4fc4713648bf63a41ba76d19b26/tumblr_pi3426UmpI1qe8lb8o1_500.gif)

Twitter Post Link: https://twitter.com/Janetthedev/status/1606634202434523136 4:53 AM · Dec 24, 2022

---

I FIGURED IT OUT!! GUESS WHAT IT WAS?!

the newer version of next-auth broke the app!! 12+ hours of pain and all i needed was "npm install next-auth@4.3.4"😭😂

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

> sessions are basically the powerhouse of the applications braincells!
>
> "but uh, imagine a website is a doorman where you have to say the right password to get into the club
>
> so you say "let me into the club" and you give the correct password.
>
> The doorman's braincells are a session, he goes ah! You said the right password i'll let you in.
>
> if the doormans braincells are dead, then you can shout the password to him and he'll just blink blankly at you"

Twitter Post Link: https://twitter.com/Janetthedev/status/1607297985951723521 12:51 AM · Dec 26, 2022

---

me @ myself when I have a ton of features I need to add to make it a MVP (minimally viable product) but...I keep wanting to focus on the unnecessary features😂

![baby bulldog cutely swatting at camera, with text that says stop it!](https://media.licdn.com/dms/image/C5622AQGm7tW7D8d_1Q/feedshare-shrink_2048_1536/0/1618663630432?e=2147483647&v=beta&t=fB8jCZ_6-_kLqGvRxADZyw88pnlRB-KtptI-gK7sdZ8)

Twitter Post Link: https://twitter.com/Janetthedev/status/1607960536897183744 8:44 PM · Dec 27, 2022

---

alright self I'll stop trying to make it sortable (for now) 😢

so! right now I'm adding a feature where logged in users can save names that they like

Twitter Post Link: https://twitter.com/Janetthedev/status/1607960973612306432 8:45 PM · Dec 27, 2022

---

which sounds simple but its going to need many parts...

so first up! if they click on the checkbox and they're not signed in, show them a "you must be signed in to like names! alert"

Twitter Post Link: https://twitter.com/Janetthedev/status/1607963242164539393 8:54 PM · Dec 27, 2022

---

progress! If you're not signed in, the react-toastify alert will appear.

Buuut when you're signed in, if you click a heart icon, it will change them ALL red 🤔

which makes sense, since right now I'm just telling the names "hey if one of you is liked, you're all liked", since they share the nameLiked state. If nameLiked is true, the heart is red. If nameLiked is false, it'll turn grey

```
/ / ############# LIKES FEATURE ##########/ /

const [nameLiked, setNameLiked]=useState(false) <=== the shared state
let likesColor= nameLiked? "red":"grey" <====== the variable the codes looking at to decide if the heart is red or grey

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
               onChange={handleLikes} <==== tells the code to fire handleLikes when the checkbox is clicked
               data-name-id={name._id}
               / / data-amount-of-likes={names.likedby.length}
               />

         <fontAwesomeIcon
              icon={faHeart}
              className="text-4xl"
              color={likesColor}/> <====== telling the heart icon where to get its color
                 {name.name.length}
         </label>

         </td>
     ......
   )
```

<img
src="https://ucarecdn.com/e382ebbc-580d-41b8-8ab3-2792cdce1796/-/format/auto/"
alt="screenshot showing a grey heart next to each name"/>

<img
src="https://ucarecdn.com/e94c344f-5c51-4081-ae25-fba1d26829f6/-/format/auto/"
alt="screenshot showing a red hearts next to each name"/>

<img
src="https://ucarecdn.com/070d776b-e8cc-43c3-8101-3f2fb645b573/-/format/auto/"
alt="showing error you must be signed in to like names"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1607977539540221954 9:51 PM · Dec 27, 2022

---

Welp here I am again 😂

I need session.user.\_id to be usable in the return section of my next js's react component but alas I can't get it to work

I tried useEffect, async await and a few others things but no luck 🙃

![kiki landing on bed face firm from kiki's delivery service](https://gifdb.com/images/high/hayao-miyazaki-laying-down-in-bed-klvxl85iwdiqyqd5.gif)

Twitter Post Link: https://twitter.com/Janetthedev/status/1608064097345765376 3:35 AM · Dec 28, 2022

---

its not pretty but it works for now! annnd its 6am 😂

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

so! It turns out for some of the buttons, my icons were outside of the Link/button 😂 whoops! Yeah that'd def cause problems haha

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
