const navLinks =
    document.querySelectorAll(".nav-link");

const navbarCollapse =
    document.querySelector(".navbar-collapse");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (
            navbarCollapse &&
            navbarCollapse.classList.contains("show")
        ) {
            const bsCollapse =
                bootstrap.Collapse.getInstance(
                    navbarCollapse
                );
            if (bsCollapse) {

                bsCollapse.hide();
            }
        }
    });
});

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".skill-card, " +
        ".experience-card, " +
        ".project-card, " +
        ".education-card, " +
        ".contact-item, " +
        ".resume-wrapper"
    );
const revealObserver =
    new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(
                        "reveal"
                    );
                    entry.target.classList.add(
                        "active"
                    );
                    revealObserver.unobserve(
                        entry.target
                    );
                }
            });
        },
        {
            threshold: 0.1
        }
    );

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});

const footerYear =
    document.querySelector(
        ".footer-bottom p"
    );
if (footerYear) {
    const currentYear =
        new Date().getFullYear();
    footerYear.innerHTML =
        `© ${currentYear} Soumyajit Ghosh.`;
}
