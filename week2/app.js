const number = document.getElementById("counting-num");
const incButton = document.getElementById("increase");
const decButton = document.getElementById("decrease");
const ten_incButton = document.getElementById("ten_increase");
const ten_decButton = document.getElementById("ten_decrease");
const resetButton = document.getElementById("reset");
let count = 0;
number.textContent = count;

function increaseCount() {
 count++; // count = count + 1
 number.textContent = count; // 숫자 변화 반영
}

function ten_increaseCount() {
 count = count + 10; // count = count + 1
 number.textContent = count; // 숫자 변화 반영
}

function decreaseCount() {
 count--;
 number.textContent = count;
}

function ten_decreaseCount() {
 count = count - 10;
 number.textContent = count;
}

function resetCount() {
 number.textContent = 0;
}

incButton.addEventListener("click", increaseCount);
decButton.addEventListener("click", decreaseCount);
ten_incButton.addEventListener("click", ten_increaseCount);
ten_decButton.addEventListener("click", ten_decreaseCount);
resetButton.addEventListener("click", resetCount);