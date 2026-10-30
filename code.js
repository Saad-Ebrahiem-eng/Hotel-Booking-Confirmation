let menu = document.querySelector(".menu");

let navigationMenu = document.getElementById("navigation-menu")

menu.onclick = function () {
    if (navigationMenu.classList.contains("links")) {
        navigationMenu.classList.remove("links");
        menu.src = "Images/icon-menu.svg";
    }
    else {
        navigationMenu.classList.add("links");
        menu.src = "Images/icon-close.svg";
    }
}

let copy = document.getElementById("copy");

let password = document.getElementById("pass");

copy.onclick = function () {
    let value = password.textContent;
    let pass = value.split("").slice(0, value.length - 4).join("");
    navigator.clipboard.writeText(pass);
}