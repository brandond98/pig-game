"use strict";

// Selecting elements
const player1 = document.querySelector(".player--1");
const player0 = document.querySelector(".player--0");

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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

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
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  }
});
