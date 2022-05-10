const feature = document.querySelector(".features");
const company = document.querySelector(".company");
const arrowFeatures = document.querySelector("#arrow-features");
const arrowCompany = document.querySelector("#arrow-company");
const dropdown = document.querySelectorAll(".dropdown");

feature.addEventListener("click", () => {
    changeImg(arrowFeatures);
    addDropdown(dropdown[0]);
})

company.addEventListener("click", () => {
    changeImg(arrowCompany);
    addDropdown(dropdown[1]);
})


function changeImg(x) {
    if(x.className === "arrow-down") {
        x.classList.remove("arrow-down");
        x.classList.add("arrow-up");
        x.firstElementChild.setAttribute("src", "images/icon-arrow-up.svg");
    }else if(x.className === "arrow-up") {
        x.classList.remove("arrow-up");
        x.classList.add("arrow-down");
        x.firstElementChild.setAttribute("src", "images/icon-arrow-down.svg");
    }
}

function addDropdown(x) {
    if(x.className === "dropdown") {
        x.classList.add("active");
    }else if(x.className === "dropdown active") {
        x.classList.remove("active");
    }
}