/**
 * Hlavní obslužný JavaScript pro prezentační web
 * Obsahuje automatické zavírání mobilního menu a základní obsluhu
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbarAutoClose();
});

/**
 * Automatické zavření mobilní navigace po kliknutí na odkaz
 */
function initNavbarAutoClose() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
    const navbarCollapse = document.getElementById('navbarContent');

    if (!navbarCollapse) return;

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
}
