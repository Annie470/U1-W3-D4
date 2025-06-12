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
});
