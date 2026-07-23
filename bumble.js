const like = document.getElementById("like");
const pass = document.getElementById("pass");
const card = document.getElementById("card");
const phone = document.querySelector(".phone");
const match = document.getElementById("match");

like.onclick = () => {
    card.style.transform = "translateX(480px) rotate(24deg)";
    card.style.opacity = "0";

    setTimeout(() => {
        phone.style.display = "none";
        match.classList.remove("hidden");
    }, 450);
};

pass.onclick = () => {
    card.animate(
        [
            { transform: "translateX(0)" },
            { transform: "translateX(-30px)" },
            { transform: "translateX(0)" }
        ],
        { duration: 250 }
    );
};

document.getElementById("continue").onclick = () => {
    showChat();
};

function showChat(){

document.body.innerHTML=`

<div class="chat-screen">

<div class="chat-header">
💛 Bumble Chat
</div>

<div id="messages" class="messages"></div>

<div class="typing">
Typing...
</div>

</div>

`;

const messages=document.getElementById("messages");

const conversation=[

["left","Hey Noni 😊"],
["right","Hi Panni!"],
["left","Didn't think we'd actually match, but I'm not complaining 🤭"],
["left","Best swipe decision I've made ❤️"],
["right","Smooth. Do you use that line on everyone? 😏"],
["left","Only on girls who are actually pretty."],
["right","Hahaha shut up 😂"],
["left","No seriously... you look really pretty in your photo. 😊"],
["right","I hope ab meri photo CHYAAR BAAR nahi dekh jaa rahi hogi 👀😂"],
["left","Too late... I lost count after five. 🤭"],
["right","Stalker vibes 😭😂"],
["left","Research... there's a difference 😌"],
["right","Hahaha okay Mr. Research 😂"],
["left","By the way... I only drink matcha ☕️"],
["right","Nikal jhoothe 🤥"],
["left","Aacha, Can I ask you something?"],
["right","Go ahead 👀"],

];

let i=0;

function next(){

if(i>=conversation.length){

setTimeout(showGiftQuestion,700);

return;
}

const bubble=document.createElement("div");

bubble.className="bubble "+conversation[i][0];

bubble.innerHTML=conversation[i][1];

messages.appendChild(bubble);

messages.scrollTop=messages.scrollHeight;

i++;

setTimeout(next,900);

}

next();

}

function showGiftQuestion(){

const messages=document.getElementById("messages");

const box=document.createElement("div");

box.className="gift-box";

box.innerHTML=`
<p>Do you want your gift? 🎁</p>

<button id="yesBtn">Yes ❤️</button>
`;

messages.appendChild(box);

messages.scrollTop=messages.scrollHeight;

document.getElementById("yesBtn").onclick=showLoveScreen;

}

function showLoveScreen(){

document.body.innerHTML=`

<div class="love-screen">

<h1>I Love You ❤️</h1>

<p>
Thank you for choosing me:*

Look for clues under the glovebox. 
</p>

<div class="heart">
❤️
</div>

</div>

`;

}
