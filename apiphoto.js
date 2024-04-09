const slide = document.createElement("div");
slide.classList.add("slide");
const rightBtn = document.getElementById("right"); 
const leftBtn = document.getElementById("left");
let Index = 0;
let images = [];

function showSlide(index) {
    slide.innerHTML = "";
    const img = document.createElement("img");
    img.src = images[index];
    slide.appendChild(img);
}

function nextSlide() {
    Index = (Index + 1) % images.length;
    showSlide(Index);
}

function prevSlide() {
    Index = (Index - 1 + images.length) % images.length;
    showSlide(Index);
}

rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", prevSlide);

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(apiimages => {
        images = apiimages.map(a => a.image);
        showSlide(Index);
    });

document.body.appendChild(slide);
