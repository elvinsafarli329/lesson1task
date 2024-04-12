const pullar = [1000, 500, 200, 100, 50, 20, 10, 5, 1];
const form = document.getElementById("form");
const input = document.getElementById("input");
const section = document.getElementById("section");
const photos = ['1000.jpg', '500.jpg', '200.jpg', '100.jpg', '50.jpg', '20.jpg', '10.jpg', '5.jpg', '1.jpg'];

form.addEventListener("click", (e) => {
    e.preventDefault();
    section.innerHTML = "";
    let netice = +input.value
    pullar.forEach((pul, index) => {
        let qaliq = Math.trunc(netice / pul);
        if (qaliq) {
            netice -= qaliq * pul;
            let div = document.createElement("div");
            div.classList.add("div");
            for (let i = 0; i < qaliq && i < 5; i++) {
                const image = document.createElement("img");
                const photo = photos[index];
                image.src = `./${photo}`;
                image.style.left = `${i * 60}px`;
                div.append(image);
            } if (qaliq - 5 > 0) {
                const h1 = document.createElement("h1");
                h1.textContent = `${qaliq - 5}X`;
                div.append(h1);
            }
            section.append(div);
        }
    });
});
