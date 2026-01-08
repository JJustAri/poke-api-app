
    export function initLandingPage() {

    const startBtn = document.getElementById("start-button");
    const slidePage = document.getElementById("slide-page");

    startBtn.addEventListener("click", () => {
        slidePage.style.animation = "scaleUp 1s ease-in";
        setTimeout(() => {
            slidePage.style.display = "none";
        }, 1000);
    });
    };