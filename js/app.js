const performer=document.getElementById("singer");
const performerContainer=document.createElement("div");
performerContainer.id="performer";
performer.appendChild(performerContainer);
const featureTitle=document.createElement("h3");
featureTitle.innerHTML="FEATURED PERFORMER";
featureTitle.classList="featureTitle";
performerContainer.appendChild(featureTitle);

const mainContainer=document.createElement("div");
mainContainer.id="main";
performerContainer.insertAdjacentElement("afterend",mainContainer);

// const subMain=document.querySelector(".singer-container");
// mainContainer.insertAdjacentElement("beforeend",htmlStructure);

const singer =[
    {
    id:1,
    name: 'Justin Bieber',
    occupation:'Singer, songwriter',
    description:'Justin Drew Bieber is a Canadian singer. Bieber is recognized for his genre-melding musicianship and global influence in modern-day popular music.',
    image:'./Assets/Justin Beiber.png'
},
{
    id:2,
    name: 'Adam levine',
    occupation:'Singer, songwriter, actor',
    description:'Adam Levine is an American singer and songwriter. He serves as the lead vocalist and rhythm guitarist of the pop rock band Maroon 5.',
    image:'./Assets/Adam Levine.png'
},
{
    id:3,
    name: 'Enrique Iglesias',
    occupation:'Singer, songwriter, record producer, composer, actor',
    description:'Enrique Miguel Iglesias Preysler is a Spanish singer and songwriter. He started his recording career in the mid-1990s on the Mexican indie label Fonovisa.',
    image:'./Assets/Enrique Iglesias.png'
},
{
    id:4,
    name: 'Christopher Comstock',
    occupation:'DJRecord, producerInternet, personality',
    description:'Christopher Comstock, known professionally as Marshmello, is an American electronic music producer and DJ. His songs "Silence", "Wolves", "Friends", "Happier".',
    image:'./Assets/Christopher Comstock.png'
},
{
    id:5,
    name: 'Eminem',
    occupation:'Rappersinger, songwriterrecord',
    description:'Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter, and record producer.',
    image:'./Assets/Eminem.png'
},
{
    id:6,
    name: 'Billie Eilish',
    occupation:'Singer, songwriter',
    description:'Billie Eilish Pirate Baird O\'Connell is an American singer-songwriter. She first gained public attention in 2015.',
    image:'./Assets/Billie Eilish.png'
}
]

const htmlStructure=(id,name,occupation,description,image)=>` 
<div class="singer-container" id="singer-${id}">
    <div class="singer-image">
        <img src="${image}"/>
    </div>
    <div class="singer-info">
        <h3 class="singer-name">${name}</h3>
        <hr class="singer-line">
        <p class="singer-occupation">${occupation}</p>
        <p class="singer-description">${description}</p>
    </div>
</div>
`

singer.forEach((sing)=>{
    const html=htmlStructure(sing.id,
        sing.name,sing.occupation,sing.description,sing.image);
        main.innerHTML+=html;
});

// const singerSubContainer=document.getElementsByClassName("singer-container");
// console.log(singerSubContainer);
// console.log(performerContainer);

// const subMain=document.getElementsByClassName(".singer-container");
// console.log(subMain);
// mainContainer.insertAdjacentElement("beforeend",subMain);

// mainContainer.insertAdjacentElement("beforeend", html);
// console.log(html)