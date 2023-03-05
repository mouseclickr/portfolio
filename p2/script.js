// up arrow
const upButton = document.getElementById("up");
const wh = window.innerHeight;

function scrollFunction() {
    if (document.documentElement.scrollTop > wh / 2) {
        upButton.style.display = "block";
    } else {
        upButton.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
    plusList.forEach(plus => {
        plus.classList.remove("active");
    })
}

window.onscroll = function () { scrollFunction() };
upButton.addEventListener("click", topFunction);


// plus signs color change
const plusList = document.querySelectorAll(".logo-symbol");
const sections = Array.from(document.getElementsByClassName("section-text"));

plusList.forEach(plus => {
    plus.onclick = function () {
        plus.classList.toggle("active");

    }
})


// modal on image click
const image = document.getElementById("zooming");
const modal = document.getElementById("modal");
const content = document.getElementById("modal-content");

image.onclick = function () {
    modal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == content || event.target == modal) {
        modal.style.display = "none";
    }
}


//populate wireframe
const imageNr = 29;

for (let i = 1; i <= imageNr; i++) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let a = document.createElement("a");

    img.src = `images/wireframes/CAS_wrf (${i}).png`;
    img.loading = "lazy";

    div.appendChild(a);
    a.appendChild(img);

    document.querySelector(".carousel").appendChild(div);
}


// tiny slider
let slider = tns({
    container: ".carousel",
    slideBy: "page",
    items: 1,
    nav: false,
    controls: false,
    autoplayButtonOutput: false,
    autoplay: true,
    mouseDrag: true,
    swipeAngle: false,
    autoHeight: true,
    arrowKeys: true,
    speed: 500,
    responsive: {
        1800: {
            edgePadding: 20,
            gutter: 20,
            items: 6
        },
        1500: {
            gutter: 20,
            items: 5
        },
        1200: {
            gutter: 20,
            items: 4
        },
        900: {
            gutter: 20,
            items: 3
        },
        600: {
            gutter: 20,
            items: 2
        },
        300: {
            gutter: 20,
            items: 1,
        }
    }
});

