// ==============================
// 🌱 Sélection du DOM
// ==============================
const myNumber = document.querySelector('.nombre');
const checkBt = document.querySelector('.check');
const result = document.querySelector('.result');
const cptElement = document.querySelector('.compteur span');
const tentativesElement = document.querySelector('.tentatives');

// ==============================
// 🚀 Déclaration des variables
// ==============================

const randomNumber = Math.floor(Math.random()* 100)  + 1; 
let tentatives = 10;
let timeoutId;

// ==============================
// 🛵 Fonctionnalités
// ==============================

cptElement.textContent = tentatives;

function removeMsg() {
  timeoutId = setTimeout(() => {
    result.textContent = "";
  }, 3000);
}

// ==============================
// 🧲 Événements
// ==============================
checkBt.addEventListener('click', function(e) {
  e.preventDefault();
  
  // 🔒 Vérifie si le champ contient qqchose
  if (myNumber.value) {
    clearTimeout(timeoutId);
    tentativesElement.textContent += myNumber.value + ", ";
    // 🔒 Compare le nombre utilisateur au nombre random
    if (myNumber.value == randomNumber) {
      result.textContent = "Félicitations vous avez trouvé !"
      
    } else if (myNumber.value < randomNumber) {
      result.textContent = "Le nombre est plus grand";
      tentatives--;
    } else {
      result.textContent = "Le nombre est plus petit";
      tentatives--;
    }
    removeMsg();
    // 🔒 Vérifie si c'est perdu
    if (tentatives <= 0) {
      result.textContent = "Dommage, vous avez perdu ! Le nombre était " + randomNumber;
      checkBt.disabled = true; // On bloque le bouton
    }
  } else {
    result.textContent = "Merci d'entrer un nombre 👨🏼‍🎓"
    removeMsg();
  }
  // 🚨 Change la valeur textuelle du nombre de tentatives, vide le champ utilisateur et remet le curseur dedans
  cptElement.textContent = tentatives;
  myNumber.value = "";
  myNumber.select();
});