// Efecto de aparición al hacer scroll
window.addEventListener("scroll", function () {
    const cards = document.querySelectorAll(".proyecto-card");

    cards.forEach(card => {
        const posicion = card.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Estado inicial
document.querySelectorAll(".proyecto-card").forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease";
});