//creo una funzione che generi numeri random da 1 a 90 escluso lo 0
const getRandomNum = () => {
  return Math.floor(Math.random() * 90) + 1;
};

// creo un array vuoto dove inserire i numeri estratti
const arrNum = [];

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
  console.log(arrNum);
});
