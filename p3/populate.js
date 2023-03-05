// populate page with images from folder
const projectNr = 6;
const pList = [
    'this is fiction',
    'where unicorns sleep',
    'just click this',
    'fantasy land',
    'sci-fi territory',
    'final fake'
];

for (let i = 1; i <= projectNr; i++) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let a = document.createElement("a");
    let p = document.createElement("p");

    img.src = `images/work_page/W (${i}).jpg`;
    img.loading = "lazy";
    a.href = `project.html`;
    p.innerHTML = "";

    div.appendChild(a);
    a.appendChild(p);
    a.appendChild(img);

    document.querySelector(".image-container").appendChild(div);

    div.onmouseover = function () {
        p.innerHTML = `${pList[i - 1]}`;
        img.style.filter = "opacity(10%) grayscale(100%)";
        img.style.transition = ".3s ease-in-out";
    }

    div.onmouseout = function () {
        p.innerHTML = "";
        img.style.filter = "";
    }

    div.ontouchstart = function () {
        p.innerHTML = `${pList[i - 1]}`;
        img.style.filter = "opacity(10%) grayscale(100%)";
    }
}

