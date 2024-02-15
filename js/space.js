document.addEventListener("DOMContentLoaded", function() {
    var arrow = document.querySelector(".arrow-container img");
    var linkList = document.querySelector(".arrow-container .link-list");

    arrow.addEventListener("click", function() {
        if (linkList.style.display === "none") {
            linkList.style.display = "block";
        } else {
            linkList.style.display = "none";
        }
    });
});

/* PARTIE SCROLLREVEAL*/
ScrollReveal().reveal('#fusee', {
    origin: 'bottom', // Origine de l'animation
    distance: '100px', // Distance de déplacement
    duration: 1000, // Durée de l'animation en millisecondes
    delay: 200, // Délai avant le début de l'animation en millisecondes
    easing: 'ease', // Fonction d'interpolation
    mobile: true, // Activer les animations sur les appareils mobiles
    reset: false // Réinitialiser les animations après chaque apparition
});


document.addEventListener("DOMContentLoaded", function() {
    var cotationLink = document.querySelector(".link-list a:first-child");

    // Ecouter le clic sur le lien "COTATIONS"
    cotationLink.addEventListener("click", function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien
        
        var sectionCotation = document.getElementById("cotation");
        var sectionCotationRect = sectionCotation.getBoundingClientRect();
        var offsetTop = sectionCotationRect.top + window.pageYOffset;

        // Faire défiler la page jusqu'à la section #cotation
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth" // Pour un défilement fluide
        });
    });
});