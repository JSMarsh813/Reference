To send an image src prop down from the parent
![Alt text](image.png)

to the child, its necessary to declare the prop in the function parameters. AND the tricky thing is you also need to put the src in double brackets

{{}}
a single bracket won't work

![Alt text](image-1.png)

![Alt text](image-2.png)

Oddly just doing {{ }} alone worked fro the webm source but the mp4 source broke when it was just {{}}
![](image-3.png)

So i decided to put a template literal in { }, as this allows both formats to work?
