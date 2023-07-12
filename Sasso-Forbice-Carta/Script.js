let nomeGiocatore = prompt("Ciao sfidante! Inserisci pure il tuo nome:", "")
let punteggioGiocatore = 0;
let punteggioComputer = 0;

if(nomeGiocatore == "" || nomeGiocatore == null){
    document.getElementById("text").innerHTML = "Non hai inserito nessun nome!"
} else {
document.getElementById("text").innerHTML = `Ciao ${nomeGiocatore}, fai la tua scelta!`
document.getElementById("nome-giocatore").innerHTML = `${nomeGiocatore}:`
document.getElementById("punti-giocatore").innerHTML = `${punteggioGiocatore}`
document.getElementById("punti-computer").innerHTML = `${punteggioComputer}`


const buttonCarta = document.getElementById("buttonCarta")
buttonCarta.addEventListener("click", () => {
    let text = document.getElementById("text")
    text.innerHTML = "Hai scelto carta!";
    let carta = Math.floor(Math.random()* 3)
    let numberBot = Math.floor(Math.random()* 9) 
let victory = document.getElementById("victory")
document.getElementById("text2").innerHTML = "Caricamento..."
const nullo = setTimeout(svuota, 10)
function svuota() {
    document.getElementById("victory").innerHTML = " ";
}
const bi = setTimeout(bim, 500);
function bim() {
  document.getElementById("victory").innerHTML = "BIM"
}
const bu = setTimeout(bum, 1000);
function bum() {
  document.getElementById("victory").innerHTML = "BUM"
}
const ba = setTimeout(bam, 1500);
function bam() {
  document.getElementById("victory").innerHTML = "BAM"
}
const result = setTimeout(res, 2000);
function res(){
if(numberBot <=2){
    text2.innerHTML = "Computer ha scelto carta!"
    victory.innerHTML = "PAREGGIO!"
} else if (numberBot >=6){
    text2.innerHTML = "Computer ha scelto sasso!"
    victory.innerHTML = "COMPLIMENTI, HAI VINTO!"
    document.getElementById("punti-giocatore").innerHTML = `${punteggioGiocatore++}`
} else {
    text2.innerHTML = "Computer ha scelto forbice!"
    victory.innerHTML = "MI SPIACE, HA VINTO IL COMPUTER!"
    document.getElementById("punti-computer").innerHTML = `${punteggioComputer++}`
}
} console.log(punteggioGiocatore)
}) 

const buttonForbice = document.getElementById("buttonForbice")
buttonForbice.addEventListener("click", () => {
    let text = document.getElementById("text")
    let number = Math.floor(Math.random()* 3) + 3
    text.innerHTML = "Hai scelto forbice!"
    let numberBot = Math.floor(Math.random()* 9) 
    let victory = document.getElementById("victory")
    let text2 = document.getElementById("text2")
    document.getElementById("text2").innerHTML = "Caricamento..."
    const nullo = setTimeout(svuota, 10)
    function svuota() {
        document.getElementById("victory").innerHTML = " ";
    }
    const bi = setTimeout(bim, 500);
    function bim() {
      document.getElementById("victory").innerHTML = "BIM"
    }
    const bu = setTimeout(bum, 1000);
    function bum() {
      document.getElementById("victory").innerHTML = "BUM"
    }
    const ba = setTimeout(bam, 1500);
    function bam() {
      document.getElementById("victory").innerHTML = "BAM"
    }
    const result = setTimeout(res, 2000);
    function res(){
    if(numberBot <=2){
        text2.innerHTML = "Computer ha scelto carta!"
        victory.innerHTML = "COMPLIMENTI, HAI VINTO!"
        document.getElementById("punti-giocatore").innerHTML = `${punteggioGiocatore++}`
    } else if (numberBot >=6){
        text2.innerHTML = "Computer ha scelto sasso!"
        victory.innerHTML = "MI SPIACE, HA VINTO IL COMPUTER!"
        document.getElementById("punti-computer").innerHTML = `${punteggioComputer++}`
    } else {
        text2.innerHTML = "Computer ha scelto forbice!"
        victory.innerHTML = " PAREGGIO!"  
    }
    } 
}) 

const buttonSasso = document.getElementById("buttonSasso")
buttonSasso.addEventListener("click", () => {
    let text = document.getElementById("text")
    let number = Math.floor(Math.random()* 3) + 6
    text.innerHTML = "Hai scelto sasso!"
    let numberBot = Math.floor(Math.random()* 9) 
    let victory = document.getElementById("victory")
    let text2 = document.getElementById("text2")
    document.getElementById("text2").innerHTML = "Caricamento..."
    const nullo = setTimeout(svuota, 10)
    function svuota() {
        document.getElementById("victory").innerHTML = " ";
    }
    const bi = setTimeout(bim, 500);
    function bim() {
      document.getElementById("victory").innerHTML = "BIM"
    }
    const bu = setTimeout(bum, 1000);
    function bum() {
      document.getElementById("victory").innerHTML = "BUM"
    }
    const ba = setTimeout(bam, 1500);
    function bam() {
      document.getElementById("victory").innerHTML = "BAM"
    }
    const result = setTimeout(res, 2000);
    function res(){
    if(numberBot <=2){
        text2.innerHTML = "Computer ha scelto carta!"
        victory.innerHTML = "MI SPIACE, HA VINTO IL COMPUTER!"
        document.getElementById("punti-computer").innerHTML = `${punteggioComputer++}`
    } else if (numberBot >=6){
        text2.innerHTML = "Computer ha scelto sasso!"
        victory.innerHTML = "PAREGGIO!"
    } else {
        text2.innerHTML = "Computer ha scelto forbice!"
        victory.innerHTML = "COMPLIMENTI, HAI VINTO!"
        document.getElementById("punti-giocatore").innerHTML = `${punteggioGiocatore++}`
    }
    } 
}) 
}
