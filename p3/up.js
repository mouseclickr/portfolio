const upButton = document.getElementById("up");

function scrollFunction() {
    if (document.documentElement.scrollTop > 300) {
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