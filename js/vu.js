// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour gérer le scroll et l'animation des images
function handleScroll() {
    var elements = document.querySelectorAll('.img-wrapper');
    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Écouteur d'événements pour déclencher la fonction handleScroll lors du défilement
window.addEventListener('scroll', handleScroll);

// Gérer l'animation lors du chargement initial de la page
document.addEventListener('DOMContentLoaded', handleScroll);
