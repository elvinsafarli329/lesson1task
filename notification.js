const btn = document.querySelector(".btn");
const notifications = document.querySelector("#notifications");

function messages() {
  let i = 1;
  if (i < 5) {
    const message = `message${Math.floor(Math.random(i) * 5 + 1)}`
    i++
    const box = document.createElement("button");
    box.classList.add("boxs");
    box.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    box.append(message)
    notifications.append(box)

    setTimeout(() => {
      box.remove()
    }, 2000);
  }

}

btn.addEventListener("click", messages);