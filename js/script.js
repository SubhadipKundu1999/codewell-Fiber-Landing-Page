const navbar = document.querySelector(".navbar");
const headerBtns = document.querySelector(".header-btns");
const menubar = document.getElementById("menu-bar");


menubar.onclick = () => {
    console.log("hello");
    navbar.classList.toggle('show-navbar');
    headerBtns.classList.toggle('show-btns');
}
