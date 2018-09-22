# runnable-rap
Mega nerdy, super contrived, an insult to rap and a bit weird: a rhyming program which compiles to something cool
If  I ever were to be a rapper, I'd be known as SyntaxError

### Why?

Because I'm insane. I don't know what I was hoping to achieve with this anymore.

Built over an evening, tired of it by the end. 
Sort-of a rap, but the lines had to bend.

The program prints out the words "SyntaxError" in ASCII form.
The code's pretty bad and is definitely not uniform. 

God I'm bad at rhyming.

You gotta read the comments as a human too, which might be seen as cheating? I can't see how you could do it without but I'm sure smart people out there have it in them, PLEASE SHOW ME IF YOU DO.

----
### Process

I started off with creating a "language" of letters ("SYNTAXREO") in ASCII form using ```<pre>``` tags.

Each letter is 5 x 5 so the array for each letter is binary 5 x 5. I think there may be a simpler way of encoding the locations but I couldn't quite figure it out. Let me know if you have any ideas.

I wrote a print function to read from the given string and look for the array in the object.
The print function spits out a little square "&#9642;" for each "pixel", before this was spitting out the letter but it was more readable the other way.

I then needed to encode the big binary arrays, because speaking binary is boring af. I pulled each 5 x 5 out into a binary sequence, then encoded it as hexadecimal to make it smaller. 

Then I was still left with weird sounding parts (not that there aren't weird sounding parts still), so I wrote another function to parse a string of characters:

```S Fabulous 87 called-at 3 fiteen = {S: "F87C3F"} ```


```Y 18 foned cause 3 flipped-me = {Y: 18FC3F"}```

I used an existing hex2bin function, granted I could have done this myself but why bother if someone has figured out a quick easy way: https://stackoverflow.com/questions/45053624/convert-hex-to-binary-in-javascript?noredirect=1&lq=1

This converts the hexadecimal into binary, where my chunking function comes in and breaks it into 5 x 5 arrays of binary numbers. 

Finally, to get (what would be my tag name if I ever was to be a rapper): SyntaxError I evaluated something which is definitely not valid, caught the error and cast it to a string, before slicing the first 10 letters.

```eval("bang bang bling cats")```

I then wrote around it what could be rhyming in places, but in most is just a bit contrived or not rhyming at all. Maybe if someone was to actually rap it or sing it they could read the dodgy bits really fast?

:sweat:

### Proper program
It's a bit hard to read in this version with the rhymes, so there is also a version written how I might do it normally (obviously I wouldn't need to the ridiculous conversion from strings to hex to binary without needing to rhyme). Still is a bit tricky to read as I tried to get the size down as small as it could be.
