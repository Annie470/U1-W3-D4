//creo una funzione che generi numeri random da 1 a 76 escluso lo 0
const getRandomNum = () => {
  return Math.floor(Math.random() * 75) + 1;
};

// creo un array vuoto dove inserire i numeri estratti
const arrNum = [];

// creo un tabellone con 76 celle
// prendo il riferimento dove crearlo
const container = document.getElementById("container");
//ciclo la produzione di 76 celle
for (let i = 0; i < 76; i++) {
  //creo una cella
  const cella = document.createElement("div");
  //assegno ad ogni cella una classe
  cella.classList.add("currCella");
  //assegno ad ogni cella un numero
  cella.innerText = i + 1;
  //appendo cella al contenitore
  container.appendChild(cella);
}

//EXTRA
//prendo il riferimento dove appendere le celle player
const playerCard = document.getElementById("player");
//creo 24 celle e le appendo al contenitore
for (let i = 0; i < 24; i++) {
  const cella = document.createElement("div");
  cella.classList.add("player-cella");
  cella.innerText = getRandomNum();
  playerCard.appendChild(cella);
}

//prendo il bottone dall html to Js
const btn = document.querySelector("button");
// aggiungo un ascoltatore d'eventi al bottone
btn.addEventListener("click", () => {
  // al click deve generare un numero
  const num = getRandomNum();
  //assegnarlo all'array arrNum se non presente
  if (!arrNum.includes(num)) {
    arrNum.push(num);
  }

  //arrNum[num-1] ritorna un numero che può essere usato come posizione per l'array di celle
  //trovo tutte le celle e mi faccio ridare indietro una NodeList
  const arrCelle = document.querySelectorAll(".currCella");
  //seleziono le celle che hanno [num-1], ossia i numeri usciti, e aggiungo un ulteriore classe "selezionate"
  arrCelle[num - 1].classList.add("selezionate");
  //EXTRA
  //devo fare Nodelist di .player-cella e aggiungere anche a loro "selezionate"
  const playerCelle = document.querySelectorAll(".player-cella");
  //le celle sono 24 e num-1 riporta un valore tra 1 e 76
  //confonto ogni num con gli elementi della NodeList ottenuta e SE true, applico classe "selezionate"
  playerCelle.forEach((cella) => {
    if (parseInt(cella.innerText) === num) {
      cella.classList.add("selezionate");
    }
  });

  //seleziono il numero estratto e lo aggiorno in output all h2 con id "h2-draw"
  const h2Draw = document.getElementById("h2-draw");
  h2Draw.innerText = `The draw number is: ${num}`;
});
