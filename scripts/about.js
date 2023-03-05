// up arrow
const upButton = document.getElementById("up");
const wh = window.innerHeight;

function scrollFunction() {
    if (document.documentElement.scrollTop > wh) {
        upButton.style.display = "block";
    } else {
        upButton.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () { scrollFunction() };
upButton.addEventListener("click", topFunction);


// flip card on tap
const card = document.querySelector(".card");
card.addEventListener("click", cardClick);

function cardClick() {
    let content = document.querySelector(".content");
    content.classList.toggle("is-flipped");
}