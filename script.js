"use strict";

// Selecting elements
const score0EL = document.querySelector("#score--0");
const score1EL = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const diceEl = document.querySelector(".dice");
const rollButton = document.querySelector(".btn--roll");
const newButton = document.querySelector(".btn--new");
const holdButton = document.querySelector(".btn--hold");

// Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

// Rolling dice functionality
rollButton.addEventListener("click", function () {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Displace dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    //Switch to next plager
  }
});
