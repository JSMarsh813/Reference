# The Humble Beginnings of the Filtering System & Name Submissions

SWEET PROGRESS! The toggable accordion panels and checkboxes were made by mapping through these objects from my server!

I'm so happy🥺

<img
src="https://ucarecdn.com/e82151d8-889c-45f2-82d9-e80a2819e96a/-/format/auto/"
alt="showing a filter list, there are two categories holiday and gender. the holidays christmas easter and halloween can be selected with a checkbox. the gender selections also have a checkbox">

```
   _id: ObjectId('6666666666')
   name: "holiday"
   links: Array
      0: "Christmas"
      1: "Easter"
      2: "Halloween"
    _ _v:0

    _id: ObjectId('777777')
    name: "gender"
    links: Array
       0: "Male"
       1: "Female"
       2: "Unisex"
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1600757675037294592 11:42 PM · Dec 7, 2022

---

The next step i suppose will be to store whats been clicked in a react state? and then send that to the server as a second get request. Oh boy, thats gonna take a while.

(an example: store christmas + male in state, and only get back animal names with both those tags)

Twitter Post Link: https://twitter.com/Janetthedev/status/1600758283861897216 11:44 PM · Dec 7, 2022

---

I made some slow but definite progress!

I can generate a list from the server. And by clicking the tag's checkboxes I can store the clicked tags in the state (as an array). And I can click a tag again to remove it from the array (after lots of struggle haha)!

<img
src="https://ucarecdn.com/a8fd49dd-3e61-4588-bcfe-6d127a3a2ba8/-/format/auto/"
alt="showing the checkboxes clicked, which then store up in the state in the react components section of the developer console">

Twitter Post Link: https://twitter.com/Janetthedev/status/1601132154527703040 12:30 AM · Dec 9, 2022

---

I'm still trying to figure out how to make it so it'll let me narrow down/filter the search...

I want to start with all the names, and then have it look through the array of name objects (nameList here) and give me ones that have the given tags.

But that's for future me, Sleep time!

<img
src="https://ucarecdn.com/53707589-902a-4737-9dc3-3f6aca8eb93b/-/format/auto/"
alt="showing mongodb and the two categories for filters holidays and christmas, being stored in two objects. these two objects then link to an array of filters which relate to that category like christmas, easter and halloween">

```
  let nameList= [
    {name:"santa", tags: ["Christmas","Male"]},
    {name:"beans", tags: ["food","Male"]}
  ]
```

```
<div> { nameList. map((name)=>(

   / /  if the name does not have ALL those tags that are stored in the state, exclude it
   / /  name: santa, with tags christmas, male
   / / tags in filter: christmas, female, so santa be excluded

   names.tags.every((element)=>
      tagFilters.includes(element))&&
      <div key={name&#46;name}>{name&#46;name} </div>>)
)}
</div>
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1601134316355846145 12:39 AM · Dec 9, 2022

---

Nothing like making a breakthrough while eating some chili! 🎊
It's a bit embarrassing to admit it took me hours, since the logic ended up being pretty simple. 😅But eh, lots of learning done and success is success ~

```
{ nameList. map((name)=>(  / / OUTER LOOP

    tagsFilters.every((tag)=> / / INNER LOOP
              name.tags.includes(tag)&&
              <div key={ name .name}>{name .name}</div>
                )

  / /  we want one result for each name, so let's map through the names (Outer loop)
     / /  names ex: beans, santa
    / /   then we want to look through EVERY tag thats in our filter array ONCE (inner loop)
         / /  ex: filters: Male and Christmas
             / /  does the name have all these tags?
                 / /  ex: beans has male, but not christmas, so it'd return false so its not rendered
                 / /  while santa would return true (because it has both the tags, male and christmas), so it's rendered
))}
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1601346340629274626 2:41 PM · Dec 9, 2022

---

Though oddly it was chemistry of all things helped me! I had to think, what are the limiting factors and then write the code around the limiting factors

live pic of me fucking around and finding out with code before figuring things out. I'm a code arsonist today🔥🔥🔥

![beaker being alarmed by fire in a chemistry lab](https://media2.giphy.com/media/yfEjNtvqFBfTa/200w.gif?cid=6c09b952lrr0t89z1d8pm2tlfi7yj552ef69g9zqhkdeg8gv&ep=v1_gifs_search&rid=200w.gif&ct=g)

Twitter Post Link: https://twitter.com/Janetthedev/status/1601347067430854656 2:44 PM · Dec 9, 2022

---

I realized I didn't show off the end result!

The names (bottom of the screen) render based on what tags are chosen

<img
src="https://ucarecdn.com/57c07493-a67e-4c2a-a204-fdd20d66c9e8/-/format/auto/"
alt="when unfiltered all names show, when filtered by male only male names like santa and beans show"/>

<img
src="https://ucarecdn.com/92fb5fe1-039b-4421-bb16-925dbb678d74/-/format/auto/"
alt="only the name santa shows when filtering by male and christmas"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1601348110080307201 2:48 PM · Dec 9, 2022

---

Now to make it render prettily on the side!

Twitter Post Link: https://twitter.com/Janetthedev/status/1601348874173829120 2:51 PM · Dec 9, 2022

---

Progress! The filtered results show in a table on the right

<iframe width="560" height="315" 
src="https://ucarecdn.com/d7575c9e-6f3d-4112-af4d-42a0c5ab2ebb/20221209filtered_results_side.mp4" title="filtered results" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Twitter Post Link: https://twitter.com/Janetthedev/status/1601434371084279808 8:31 PM · Dec 9, 2022

---

Next up I suppose I'll have to figure out how to add two requests to getStaticProps, so I can grab the names from the server too

(right now I'm grabbing the names from a mock array in the document)

Twitter Post Link: https://twitter.com/Janetthedev/status/1601442682701635586 9:04 PM · Dec 9, 2022

---

I just screwed around and what do you know, it actually works!

So the name data is being sent from the server now into the page🎉🎉🍾

```
Export const getStaticProps = async () => {

let response= await fetch(‘http: / /localhost: 3000/api/name-categories’);
let nameResponse = await fetch (‘http: / /localhost: 3000/api/individualNames’)

let data = await response.json()
let nameData= await nameResponse.json()

/ /   console.log(data)
/ /  getServerSideProps allows us to fetch data from an api
/ /  runs only on server side, will never run client side
/ /   can run server-side code directly in getStaticProps

  return {
      props: {
         category: data,
         nameList: nameData,
            },
        }
}
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1601460207556567045 10:14 PM · Dec 9, 2022

---

Up next I will either be making profiles/adding passport ect

Or adding a form so users can submit new names

Twitter Post Link: https://twitter.com/Janetthedev/status/1601460430878445569 10:14 PM · Dec 9, 2022

---

I ended up deciding to add a form so users can add new names 😄

I'm proud of my progress especially since I'm using my post-work shift brain haha!

Users can input a name and select multiple tags (provided by a list from my server). Both are saved in the state

<img
src="https://ucarecdn.com/7b72b791-6dd3-4cea-bd8a-45e17b0f63e0/-/format/auto/"
alt="screenshot showing that multiple tags can appear in the tag field"/>

```
console.log Results:

name: l tags: Christmas, Male
name: le tags: Christmas, Male
name: leo tags: Christmas, Male
name: leon tags: Christmas, Male

```

```
import Select from 'react-select'
import React, {useState} from 'react';

export const getStaticProps = async () => {
  let tagList = await fetch('http: / /localhost:3000/api/individualTags');

  let tagData = await tagList.json()

  return {
    props:{
      tagList: tagData,
    }
  }
}
```

```
function AddNewNameWithTags({tagList}) {
  const [newName,setNewName=useState("")]
  const [tags,setTags]= useState([])

return (
  <div style={{width:"700px"}} className="mx-auto mt-4">
 {/*console.log(tagList[0].individualTag) */}
 {console.log(`name: ${newName} tags ${tags}`)}

 <form>
     {/* needs label and value for Select to work*/}
    <input type="text"
       placeholder="enter a name to add"
       onChange={(e)=> setNewName(e.target.value)}></input>

  <Select
      options={tagList. map((opt,index)=> ({label: opt. individualTag, value:opt. individualTag}))}
      isMulti
      isSearchable
      placeholder="select tags..."
      onChange={(opt)=>settings(opt. map(tag=>tag.label))}

       / /  update STATE of section of object
      />

      <button className="btn"> Add Name </button>
      {/*  submit state to server in correct format */}
      {/* if name already exists, send an error message */}
  </form>
  </div>
 );
}
export default AddNewNameWithTags;
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1601803814935220224 8:59 PM · Dec 10, 2022

---

Next step will be to have the button click === post request.

When setting up the post request I:

1. Need to give them an error message if the name already exists in the database
2. have the objects from the state, match the schema of the individualNames collection

Twitter Post Link: https://twitter.com/Janetthedev/status/1601804814643437568 9:03 PM · Dec 10, 2022

---

I still need to work on the actual next steps, but here's the progress for now

<img
src="https://ucarecdn.com/2a7849a8-17e8-4625-aa2d-9894d9fdb3f2/-/format/auto/"
alt="screenshot showing progress of name page, its possible to add a name, add tags and to search for a tag. There is also a seciton to add a tag, if the one you need is not there. Though in the future I took this out, to better secure the database"/>

Twitter Post Link: https://twitter.com/Janetthedev/status/1601841303675113477 11:28 PM · Dec 10, 2022

---

So on one hand: I'm now able to submit form data, which was stored in react state, to the server successfully 🎊HUZZAH

However! The filter system is now broken?? 🙃😂

Twitter Post Link: https://twitter.com/Janetthedev/status/1602233022513745920 1:24 AM · Dec 12, 2022

---

I figured it out! It was because some of the tags were uppercase.

The filter system is unbroken again!

![bob the builder, can we fix it? yes we can!](https://media.tenor.com/rY95EqesaaoAAAAM/bob-the-builder.gif)

Twitter Post Link: https://twitter.com/Janetthedev/status/1602233486882275329 1:26 AM · Dec 12, 2022

---

next up is to make it so users can add new tags to the database.

But alas, I've got to work tomorrow so it's time to sleep!

![cat sleeping on keyboard while random text appears on screen](https://media.tenor.com/1cbzhT0TKTMAAAAe/cat-asleep.png)

Twitter Post Link: https://twitter.com/Janetthedev/status/1602234911640780800 1:32 AM · Dec 12, 2022

---

I felt like I was going in circles trying to figure out why my TagList prop was working right but categoryList was undefined?! 🥴

It turns out it was the semicolons on line 10 and 11!

```
export const getServerSideProps = async () => {

  let tagList = await fetch('http: / /localhost:3000/api/individualTags'); <===  / / line 10
  let categoryList = await fetch('http: / /localhost:3000/api/name-categories'); <=== / / line 11

        let tagData = await tagList.json()
        let categoryData = await categoryList.json();

  return {
    props: {g
      tagList: tagData,
      categoryList: categoryData,
    }
  }
}
```

```
function AddNewNameWithTags({tagList,categoryList}){

  return (
    <div style={{width:"700px"}} className="mx-auto mt-4">

        <NewNameWithTagsData tagList={tagList}/>
        <AddNewTag categoryList={categoryList}/>

    </div>
  );
}

export default AddNewNameWithTags;
```

Twitter Post Link: https://twitter.com/Janetthedev/status/1603582817392201729 6:48 PM · Dec 15, 2022

---
