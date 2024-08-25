const gridContainer = document.querySelector(".gridContainer");
let kort = [];
let forsteKort, andreKort; //navn for første og andre valg av kort
let laasbrett = false
let score = 0;

document.querySelector(".score").textContent = score;

fetch("kort.json")//henter info om bilder fra kort.json
 .then((res) => res.json())
 .then((data) =>{
    cards = [...data, ...data];
    stokkKort();
    delUtKort();
 });

 function stokkKort() { //legger til funksjon for stokkKort
    let gjeldendeIndeks = kort.length,
        tilfeldigIndeks,
        midlertidigVerdi;
    while(gjeldendeIndeks !==0) {
        tilfeldigIndeks = math.floor(math.random() * gjeldendeIndeks);
        gjeldendeIndeks -= 1;
        midlertidigVerdi = kort[gjeldendeIndeks];
        kort[gjeldendeIndeks] = kort[tilfeldigIndeks];
        kort[tilfeldigIndeks] = midlertidigVerdi;
    }
 }

 function delUtKort() { //legger til funksjon for delUtKort
    for (let kortet of kort){
        const kortElement = document.createElement("div")
        kortElement.classliste.add("kortet");
        kortElement.setAttribute("data-name", kortet.name);
        kortElement.innerHTML = `
        <div class="kortFramside">
            <img class=kortFramsideBilde" src=${kortet.image} >
            </div>
            <div class="kortBakside">

            </div>
        `;
        gridContainer.appendChild(cardElement);
        kortElement.addEventListener("click", snuKort)
    }
 }

 function snuKort() {
    if (laasbrett) return;
    if (this === forsteKort) return;
    this.classliste.add("flipped");
    if(!forsteKort){
        forsteKort = this;
        return;
    }
    
    andreKort = this;
    score++;
    document.querySelector(".score").textContent = score;
    laasbrett = true;

    sjekkOmMake();
 }

 function sjekkOmMake() {
    let erMake = forsteKort.dataset.name === andreKort.dataset.name;
    erMake ? deaktiverKort() : snuTilbakeKort();
 }

 function deaktiverKort() {
    forsteKort.removeEventListener("click", snuKort);
    andreKort.removeEventListener("click", snuKort);

    resetBrett();
 }

 function snuTilbakeKort() {
    setTimeout(() => {
        forsteKort.classliste.remove("flipped");
        andreKort.classliste.remove("flipped");
        resetBrett();
    }, 1000)
 }

 function resetBrett() {
    forsteKort = null;
    andreKort = null;
    laasbrett = false;

 }

 function restart() {
    resetBrett();
    stokkKort();
    score = 0;
    document.querySelector(".score").textContent = score;
    gridContainer.innerHTML = "";
    delUtKort();
 }