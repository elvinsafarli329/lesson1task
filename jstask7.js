let count = 1;
let direction = true;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  btn.textContent = `Click me ${count}`;
  if (count=== 10) {
    direction = false;
  }
  if (count === 1) {
    direction = true;
  } if(direction) {
    count++
  } else {
    count--
  }
});