const counter = document.getElementById("value");
const increaseBtn = document.querySelector(".btn increase");
const resetBtn = document.querySelector(".btn reset");
let count = 0;

function increaseCount() {
  count += 1;
  counter.innerHTML = count;
  if (count > 0) {
    value.style.color = "green";
  }
}

function resetCount() {
  count = 0;
  counter.innerHTML = count;
  if (count === 0) {
    value.style.color = "black";
  }
}

function decreaseCount() {
  count -= 1;
  counter.innerHTML = count;
  if (count < 0) {
    value.style.color = "red";
  }
}
