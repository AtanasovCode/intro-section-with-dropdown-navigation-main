const feature = document.querySelector(".features");
const company = document.querySelector(".company");
const arrowFeatures = document.querySelector("#arrow-features");
const arrowCompany = document.querySelector("#arrow-company");
const dropdown = document.querySelectorAll(".dropdown");

const mobileDropdown = document.querySelector(".expand-icon");
const mobileNav = document.querySelector(".navigation-items");
const navIcon = document.querySelector(".expand-icon");

feature.addEventListener("click", () => {
    changeImg(arrowFeatures);
    addDropdown(dropdown[0]);
})

company.addEventListener("click", () => {
    changeImg(arrowCompany);
    addDropdown(dropdown[1]);
})

mobileDropdown.addEventListener("click", () => {
    addMobileDropdown(mobileNav);
    changeImgMobile(navIcon);
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

function changeImgMobile(x) {
    if(x.className === "expand-icon") {
        x.classList.remove("expand-icon");
        x.classList.add("close-icon");
        x.setAttribute("src", "images/icon-close-menu.svg");
    }else if(x.className === "close-icon") {
        x.classList.remove("close-icon");
        x.classList.add("expand-icon");
        x.setAttribute("src", "images/icon-menu.svg");
    }
}

function addMobileDropdown(x) {
    console.log("Click");
    if(x.className === "navigation-items") {
        x.classList.add("active");
    }else if(x.className === "navigation-items active") {
        x.classList.remove("active");
    }
}