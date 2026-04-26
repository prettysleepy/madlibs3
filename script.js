const fields = [
"adjective","noun","verb","place","adjective","animal","verbIng","noun",
"interjection","adjective","pluralNoun","verbEd","adverb","noun","adjective",
"food","verb","place","adjective","noun","adverb"
];

const inputs = document.getElementById("inputs");

fields.forEach((f,i)=>{
let input=document.createElement("input");
input.placeholder=f;
input.id=f+i;
inputs.appendChild(input);
});

function v(id){return document.getElementById(id).value || "___";}

document.getElementById("form").addEventListener("submit",e=>{
e.preventDefault();
let i=0;

let story=`It was a ${v("adjective"+i++)} day when I found a mysterious ${v("noun"+i++)} that could ${v("verb"+i++)}.

Without thinking, I took it with me to the ${v("place"+i++)}. Suddenly, a ${v("adjective"+i++)} ${v("animal"+i++)} appeared, ${v("verbIng"+i++)} wildly while holding a ${v("noun"+i++)}.

"${v("interjection"+i++)}!" I shouted.

Things got even more ${v("adjective"+i++)} when ${v("pluralNoun"+i++)} started falling from the sky. One of them ${v("verbEd"+i++)} right next to me ${v("adverb"+i++)}.

I grabbed my ${v("noun"+i++)} and ran. This was getting too ${v("adjective"+i++)}.

Eventually, I stopped to eat some ${v("food"+i++)}, which helped me ${v("verb"+i++)} again.

I made my way back to the ${v("place"+i++)}, feeling ${v("adjective"+i++)}. In the end, I learned that every ${v("noun"+i++)} can change your life ${v("adverb"+i++)}.

The end.`;

document.getElementById("story").innerText=story;
document.getElementById("storyBox").classList.remove("hidden");
});
