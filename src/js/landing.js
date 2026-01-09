
    export function initLandingPage() {

    const startBtn = document.getElementById("start-button");
    const slidePage = document.getElementById("slide-page");

    startBtn.addEventListener("click", () => {
        slidePage.style.animation = "scaleUp 0.5s ease-in";
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            slidePage.style.display = "none";
            document.body.style.overflow = "auto";
        }, 500);
    });
    };