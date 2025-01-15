# I Can't "State" it Enough, It's Time To Smash this Bug! 😉

I got most of the post upload bits done!

- Model created,

- states created to store values,

- attached state to form behavior,

- finished cloudinary upload logic,

now to finish the logic for uploading the new post to mongoDB

<iframe width="560" height="315" src="https://ucarecdn.com/297f005a-6b40-4f32-8633-a46d38b38f86/20230119gotmostoftheuploadbits.mp4" title="tested submission for posts and the state is properly updating" width="320" height="240" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe

Twitter Post Link: https://twitter.com/Janetthedev/status/1616007573588828161 1:40 AM · Jan 19, 2023

---

I spent a good chunk of time dealing w/ my car insurance (I got rear ended, flipped, and my car was totaled. Though I was very lucky and I walked away unharmed). But I made progress!

🐶Did some form validation,

🐶hid the ugly file input field (input is now the image icon),

🐶clear the image when clicking the x,

🐶storing URL.createObjectURL in state to preview the image

<iframe src="https://ucarecdn.com/ec7ed5c6-6a86-4076-9537-6c556246a096/20230119Ispentagoodchunk.mp4" width="640" height="480" frameborder="0" title="testing community page, post uploads work" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe

Twitter Post Link: https://twitter.com/Janetthedev/status/1616311858511896576 9:49 PM · Jan 19, 2023

---

I did a small thing, I added a little bit of drop shadow to the x font awesome icon!

That way its still possible to see even if someone uploads a bright image

<img src="https://ucarecdn.com/4951421a-56bf-43a4-880c-d17be110f423/-/format/auto/" alt="the x circle icon has a drop shadow now, so its easy to see even against a bright background"/>

```
<img
  className="max-h-96 object-scale-down mx-auto block"
  src={imagePreview}/>
    <FontAwesomeIcon
      icon=={faCircleMark}
      onClick={()=>setImagePreview("")}
      className="text-3xl text-yellow-300 mr-2 absolute top-1 right-1 justify-center drop-shadow-md"/> <======drop shadow is here

```

Twitter Post Link: https://twitter.com/Janetthedev/status/1616346190836301824 12:05 AM · Jan 20, 2023

---

Here's a quick overview of what i've done so far for my 100 hours project! beware theres some glitches 😂esp on the add name page rn

<iframe src="https://ucarecdn.com/4d8e5703-e0af-4eda-82a8-d9093254fdd6/20230121heresaquickoverview.mp4" title="video giving a quick overview of all the pages I've worked on" width="640" height="480"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe

Twitter Post Link: https://twitter.com/Janetthedev/status/1617016132120244229 8:27 PM · Jan 21, 2023

---

I'm tired enough I was looking at this for a solid minute going ??? what error?

then I laughed when I realized I basically told JS to do "function function" . Double raiiiiinbow javascript edition 🌈

```
const uploadPostToSever = function () => { <===extra brace
  {
  console.log("hello from callback")
  }
} <===extra brace
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1617030775949656064 9:25 PM · Jan 21, 2023

---

Success is mine!! I got my onClick function to run two functions. AND the second one correctly grabs the first one's data!

Here i was thinking I had to do .then(), ect, when just doing this works:

```
const handlePostCreate = () =>
{handleImageUpload();
   uploadPostToServer();
}
```

nevermind, once I json.Stringified the object i realized it was coming back as empty. So the second function isn't waiting on the first to finish 😔

this makes sense, as this isn't a proper callback but I hoped it'd be this easy. Oh well!

I figured it out. So in the function that creates the new post (handlePostCreate), I had to tell it to await for cloudinarys message. This way we get the url for the image from cloudinary, and then it continues to the rest of the function

```
const handlePostCreate = async () => {
  if(!desciption) {
    toast.error(`Ruh Roh! A description is required`)
    return}

  if (tagList.length==0){
    toast.error(`Ruh Roh! At least one tag is required`)
    return}

    await handleImageUpload().then( <==========================telling it to await
      console.log(`hello from callback ${JSON.stringify(image)}`))
}

```

when I'm not wiped I'll work on making the actual api for sending the post request ect, but hey its still progress!

ngl i was stressing about how to make it /wait/ and for it to not freak out if the user didn't upload an image. However it didn't actually end up being too bad

nevermind I spoke too soon 🥲, looks like it ISN'T waiting to get data for that function to run. I have to click it twice for it to work
I'm using async await and then() so i'm not sure why its not waiting for handleImageUpload() to finish running before the console.log goes off??

console is showing :

> hello from callback []
>
> hello from callback "https : / / res. cloudinary .com/adfafasf/image/upload/v167423423947/posts/tfearafioijasf.jpg"

```
const handlePostCreate = async () => {
  if(!description) {
    toast.error(`Ruh Roh! A description is required`)
    return}

    if (tagList.length==0) {toast.error(`Ruh Roh! At least one tag is required`)
    return}

    await handleImageUpload().then(console.log(`hello from callback ${JSON.stringify(image)}`)
    )
  .....
}

```

I've tried both after the function and within a .then() statement

😥 why code won't you just work on the first click please

stackoverflow.com/questions/55960027/await-doesnt-wait

<img src="https://ucarecdn.com/3a373cc6-3fa6-4bef-8eef-fe65ffe387b9/-/format/auto/"
alt="screenshot of a stackoverflow thread which says anything you want to be waiting until after the f1() executes must be either a inside the f2() function after the await or b executed within a then callback attached to the promise"/>

I thought maybe adding this would work, but no dice 😭at this rate might just have to try the 100devs help channel

```
await handleImageUpload().then(()=> console.log(`hello from callback ${JSON.stingify(image)}`)
)
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1617038809212018688 9:57 PM · Jan 21, 2023

---

Alright so I posted this in the 100devs discord but I wanted to ask here juuuust in case someone can figure out what I'm doing wrong 🤔

is it maybe correctly waiting for the handleImageUpload function, but since the state variables are async maybe the image variable hasn't updated?

<img src="https://ucarecdn.com/8aa05435-a356-4bae-82bc-dd0041f396e1/20230122100devshelpfiguringouthandleimageuploadasync.jpg" alt=""/>

This is what I posted on the 100devs discord

> Hello all! So I'm trying to let the user upload a post, but the issue i'm having is that the handlePostCreate function isn't waiting for the variable that has the image from cloudinary to update 😦
>
> When I click post, the first time I get "Hello from callback []"
>
> But the second time I click it, it works as intended "Hello from callback "https : / / ....."
>
> When the user clicks the post button:
>
> 1. handlePostCreate fires
>
> 2. inside this function, it calls the handleImageUpload function (uploading the attached image to cloudinary). Which places the cloudinary url in the image variable
>
> 3. THEN, the console.log fires with the image variable from state inside of it. Which it does but...it isn't waiting for the image variable to update
>
> I don't think it matters but I'm using nextJS

RESPONSE FROM GRIFN

> You need to also await the .json() method as it returns a Promise
>
> You can just use await instead of chaining then on your Promises.

```
const response = await fetch(...);
const data = await response.json();
let imageFromCloudinary = data.secure_url;

```

MY RESPONSE

> I tried that but no luck 😦 is it maybe correctly waiting for the handleImageUpload function, but since state variables are async maybe the image variable in the state hasn't updated??🥴

```
const response = await fetch ("https : / / api. cloudinary .com/v1_1/deadfafd/image/upload",{
  method: 'POST'
  body: formData,
})
const data = await response.json();

let imageFromCloudinary = data.secure_url

setImage(imageFromCloudinary)
setImageToCloudinary(")

```

RESPONSE FROM GRIFN

> Ah I see you are trying to log the image now. Yeah, the state won't have updated yet at that point. After updating your state you can return the image from the function then console.log that.

```

const response = await fetch(...);
const data = await response.json();
let imageFromCloudinary = data.secure_url;
setImage(imageFromCloudinary);
return imageFromCloudinary;

```

```
handleImageToUpload.then((image) => console.log(image))

```

MY RESPONSE

> Thank you a million times over! That was it!!! You saved me hours of fighting with this, thank you thank you ❤️ I appreciate you so much

A-HA! my hunch was right! shoutout to grifn in 100 devs for being a hero 🎉 I highlighted what I needed to change

```
const handleImageUpload = async () =>{

  if (imageToCloudinary!=""){

    const formData= new FormData();
    formData.append('file',imageToCloudinary);
    formData.append('upload_preset',"db015fmb");

    const response = await fetch ("https : / / api . cloudinary. com/v1_1/afdafasfd/image/upload", {
          method: 'POST',
          body: formData,
    })
    const data = await response.json();

    let imageFromCloudinary = data.secure_url

    setImage(imageFromCloudinary)
    setImageToCloudinary("")
    return imageFromCloudinary <=== return imageFromCloudinary was the added code that fixed the bug

      }
}

```

<img src="https://ucarecdn.com/44f79f40-878b-41d2-a0f2-421a9d977231/20230122showingimageuploadworking.jpg" alt="showing that image upload works"/>

100 devs is the best community i swear 😭🙏i would of been fighting this for HOURS.

here I was trying to create a second function to await, putting a setInterval in that function, ect which wasn't working.

when all I needed to do basically was return the state

Twitter Post Link: https://twitter.com/Janetthedev/status/1617361155617619969 7:18 PM · Jan 22, 2023

---

after lots of debugging:

IT WORKS, my users now have the power to upload new posts!!
🔥🔥🔥

![bobs burger character laughing maniacally as fire is behind her ](https://media0.giphy.com/media/EJIqwKKY30Dlu/200w.gif?cid=6c09b9526nwh89rv9wmhubnprwbnk7a6is0t75ke8k0rvp9z&ep=v1_gifs_search&rid=200w.gif&ct=g)

the only bug i'm noticing is that if someone submits a post, it works fine the first time.

But the second time we get an error 🤔strange

I figured it out! I had the description set to unique: true.

So I had to change it to unique: false and completely delete the original collection from mongoDB

Twitter Post Link: https://twitter.com/Janetthedev/status/1617401458533732358 9:58 PM · Jan 22, 2023
