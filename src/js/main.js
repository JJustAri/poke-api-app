document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.getElementById("start-button");
    const slidePage = document.getElementById("slide-page");
    startBtn.addEventListener("click", () => {
        slidePage.style.transform = "translateY(-100%)";
        slidePage.style.transition = "transform 0.5s ease-in-out";
    });
 });