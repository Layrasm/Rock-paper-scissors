
// Setting up HTML Strings input
// Setting up Array with paper, rock, scissor
// Setting up Paper, Rock, Scissor Click Link (including index location)
// Computer Random pick one of the above (random of index location)
// Compare, and see if player win, else, computer win
// Winner Counter
// Restart game (Clear array?)
// Render

// Setting up State
let state = {
  weapon: ["Rock","Paper","Scissors"],
  winner: false,
  loser: false,
  tie: false,
  winCount: "0",
  lossCount: "0",
  tieCount: "0",
  computerindex: "",
  index: "",

};


function getMessage(){
      const {winner, loser, tie} = state;
      if (winner) {
          state.winner = false
          state.winCount++
          return `You win! <br> <br>`
      } else if (loser){
          state.loser = false
          state.lossCount++
          return `You lose!<br><br>`
      } else if (tie){
          state.tie = false
          state.tieCount++
          return `It's a tie!<br><br>`
      } else {
          return `Make a choice`
      }
      
  
  }


// Message Center
// function getMessage(){
//   const {winner, loser} = state;
//   if (winner) {
//       return `You have won! <br>
//       [Play Again]<br>`
//   } else if (loser){
//       return `you lost!`
//   } else {
//       return `Please select your weapon!`
//   }
// }

function compareChoices(playerChoice,computerChoice){

  
      if (playerChoice === computerChoice) {
          state.tie = true
          render();
      } else if ((playerChoice == '0' && computerChoice == '2')|| 
      (playerChoice == '1' && computerChoice == '0')||
      (playerChoice == '2' && computerChoice == '1')) {
          state.winner = true
          render();
      } else {
          state.loser=true
          render();
      }
  }

  // Returning selections witn an index
function weaponSelected(index){
  state.index=index
  computerindex = computerSelect()
  state.computerindex=computerindex
  compareChoices(index,computerindex)
}

function computerSelect(){
  return Math.floor(Math.random()*3)
  }



  // Panel and weapon choices

function renderWeapons(){
  let weaponsHtml = "";
  state.weapon.forEach(function (weapon, index) {
      weaponsHtml += `<div class='panel' onclick='weaponSelected(${index})'>${weapon}</div>`;
  })
  return weaponsHtml;
}



function renderResult(){
  let resultHtml=`
      Computer Chose: ${state.weapon[state.computerindex]} <br><br>
      You Chose: ${state.weapon[state.index]} 
      <br></br>
      <div id="win-box">
      <br><br>Win Counter: <br><br>
      </div>
      Player: ${state.winCount}<br>
      Computer: ${state.lossCount}<br>
      Tie: ${state.tieCount}`;

  return resultHtml;
}

// Setting up HTML Strings input

function render () {
  let htmlString = `
<div>
  <div class="main_results">
  <h1>Rock, Paper, Scissors</h1><br>
    ${getMessage()}
  </div>
  
  <div class="main">
    ${renderWeapons()}
  </div>
  <div class="main_results">
    ${renderResult()}<br>
  </div>
</div>
`;
  document.getElementById("app").innerHTML = htmlString;
}


render ();

/* <div id="scoreboard" class="scoreboard">
${renderScore()}
</div> */