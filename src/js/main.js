/* 1, 2, 3 */
import './../scss/style.scss'
window.onload = function() {
  const yourName = "Asrinne";
  let helaNamnet = "";
  for (let i = 0; i < yourName.length; i++) {
    if (i < yourName.length -1){
      helaNamnet += yourName[i] + " ";
    }
    else {
      helaNamnet += yourName[i];
    }
  }
  console.log(helaNamnet);
}

/* Uppgift 4, 5 */
let sum = 0;
const numbers = [9, 5, 2, 1, 7, 2, 77, 12, 8, 9];
for (let j = 0; j < numbers.length; j++) {
sum += numbers[j];
  
}
console.log(sum);


/* Uppgift 6 */
let lista = document.getElementById("ul");
const djur = ["Giraff", "Hyena", "Delfin", "Haj", "Orm"];

for (let a = 0; a < djur.length; a++) {
  const li = document.createElement("li"); 
  li.innerHTML = djur[a];
  lista.appendChild(li);
}