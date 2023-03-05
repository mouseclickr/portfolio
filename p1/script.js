const questions = document.querySelectorAll(".question");
const content = document.querySelector(".content");
const upButton = document.getElementById("up");

questions.forEach(question => {
    question.onmousedown = () => { return false };
})

function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
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

