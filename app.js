// const apiURL = "https://fathomless-chamber-33616.herokuapp.com/";
const apiURL = "http://localhost:8000";
var moveData;
var comboData;
var characterData = [];
var characterSelected;

fetch(`${apiURL}/moves`)
  .then(response => response.json())
  .then(response => {
    moveData = response.moves;
  });

fetch(`${apiURL}/combos`)
  .then(response => response.json())
  .then(response => {
    comboData = response.combos;
    for (var i = 0; i < moveData.length; i++) {
      characterData.push(Object.assign({}, comboData[i], moveData[i]));
    }
  });

(function startPage() {
  // document.querySelector("body").style.display = "none";
  alert(
    "This is an app for players of Marvel vs. Capcom Infinite that shows character moves and combos! This site is formatted for mobile. Also, the data is incomplete at the moment. Select Nova for an example of how a complete list of moves and combos would look."
  );
})();

function setCharacter(sel) {
  characterSelected = sel.options[sel.selectedIndex].text;
  return characterSelected;
}

document.querySelector("#dropD").addEventListener("submit", event => {
  event.preventDefault();
  renderData();
});

function renderData() {
  var moveList = document.querySelector(".move-list");
  var comboList = document.querySelector(".combo-list");
  if ((document.querySelector(".add-combo-forms").style.display = "inline")) {
    document.querySelector(".add-combo-forms").style.display = "none";
  }
  while (moveList.firstChild) {
    moveList.removeChild(moveList.firstChild);
  }
  while (comboList.firstChild) {
    comboList.removeChild(comboList.firstChild);
  }
  characterData.map(item => {
    if (item.name === characterSelected) {
      for (var i = 0; i < item.moves.length; i++) {
        var newLI = document.createElement("li");
        newLI.innerText = item.moves[i];
        moveList.appendChild(newLI);
      }
      for (var j = 0; j < item.combos.length; j++) {
        var newerLI = document.createElement("li");
        newerLI.innerText = item.combos[j];
        comboList.appendChild(newerLI);
      }
    }
  });
}

document.querySelector(".add-combo-forms").style.display = "none";

const addButton = document.querySelector(".add");
addButton.addEventListener("click", function() {
  document.querySelector(".add-combo-forms").style.display = "inline";
});

// document.querySelector("#user-inputs").addEventListener("submit", function(event){
//   event.preventDefault();
//   const messageData = new FormData(event.target);
//   const objectToSend = {
//     "Submitted by:"
//
// })
