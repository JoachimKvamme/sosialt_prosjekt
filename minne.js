const gridContainer = document.querySelector(".gridContainer");
let kort = [];
let Kort1, Kort2;
let lockbrett = false
let score = 0;

document.querySelector(".score").tekstinnhold = score;

fetch("./data/cards.json")
 .then((res) => res.json())
 .then((data) =>(
    cards = [...data, ...data];
    shuffleCards();
    generateCards();
 ));

 function shuffleCards() {
    let currentIndex = cards.length,
        randomIndex,
        temporaryValue;
    while(currentIndex !==0) {
        randomIndex = math.floor(math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
 }

 function generateCards() {
    for (let card of cards){
        cardElement.classlist.add("card");
        cardElement.setAttribute("data-name", card.name);
        cardElement.innerHTML = '
        <div class="kortFram">
            <img class=front-image" src=${card.image} />
            </div>
            <div class="kortBak">

            </div>
        ';
    }
 }