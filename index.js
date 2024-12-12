
let cardsArray = [
    {
        'name': 'CSS',
        'img': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    },
    {
        'name': 'HTML',
        'img': 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    },
    {
        'name': 'jQuery',
        'img': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg',
    },
    {
        'name': 'JS',
        'img': 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },
    {
        'name': 'Node',
        'img': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    },
    {
        'name': 'Python',
        'img': 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    }
];


const gameCard = cardsArray.concat(cardsArray);
const parentDiv = document.querySelector("#card-section");
let shuffleCard = Array.from(gameCard).sort(()=>0.5 - Math.random());
let clickCount = 0;
let firstCard = "";
let secondCard = "";

const cardMatches=()=>{
    let card_selected = document.querySelectorAll(".card_selected");
    card_selected.forEach(card => {
        card.classList.add("card-match")
    });
}

const resetGame=()=>{
    clickCount = 0;
    firstCard="";
    secondCard="";
    let card_selected = document.querySelectorAll(".card_selected");
    card_selected.forEach(card => {
        card.classList.remove("card_selected")
    });
}



parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;
    console.log(curCard)

    if(curCard.id === "card-section"){return false }

    clickCount ++;
    console.log(clickCount)

    if(clickCount < 3){

        if(clickCount === 1){
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }else{
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }

        if(firstCard !== "" && secondCard !== ""){
            if(firstCard === secondCard){
                // curCard.classList.add('card_match')
                setTimeout(() => {
                    cardMatches()
                    resetGame()
                }, 1000)

            }else{
                setTimeout(() => {
                    resetGame()
                }, 1000)
            }
        }

    }

})
    
   



shuffleCard.forEach(cards => {
    const childDiv = document.createElement("div");
    childDiv.classList.add("card");
    childDiv.dataset.name = cards.name;
    const frontDiv = document.createElement("div");
    frontDiv.classList.add("front-card");
    const backDiv = document.createElement("div");
    backDiv.classList.add("back-card");
    childDiv.appendChild(frontDiv);
    childDiv.appendChild(backDiv);
    backDiv.style.backgroundImage = `url(${cards.img})`
    parentDiv.appendChild(childDiv);
    
});