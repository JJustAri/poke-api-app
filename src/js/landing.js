// Module d'animation pour la page d'accueil

export function initLandingPage() {

    const startBtn = document.getElementById("start-button");
    const slidePage = document.getElementById("slide-page");

    // Au clic, jouer l'animation puis masquer la page d'intro
    startBtn.addEventListener("click", () => {
        slidePage.style.animation = "scaleUp 0.5s ease-in";
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            slidePage.style.display = "none";
            document.body.style.overflow = "auto";
        }, 500);
    });
};