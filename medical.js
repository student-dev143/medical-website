let btn = document.querySelector("#nav-booking");
let contact = document.querySelector(".book-container")
let sideNav = document.querySelector(".side-nav");
let menuBar = document.querySelector(".ri-menu-line")
const certificateSection = document.querySelector("#certificates-credentials");
let bookBtn = document.querySelector("#home-booking");
const navLinks = document.querySelectorAll(".side-nav a");

function syncSideNavState() {
    if (!sideNav) return;
    const open = sideNav.classList.contains("active");
    document.body.style.overflow = open ? "hidden" : "";
    if (menuBar) menuBar.setAttribute("aria-expanded", open ? "true" : "false");
}

if (menuBar && !menuBar.hasAttribute("aria-expanded")) {
    menuBar.setAttribute("aria-expanded", "false");
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (!sideNav) return;
        sideNav.classList.remove("active");
        syncSideNavState();
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            if (!certificateSection) return;

            certificateSection.style.animation = "none";

            void certificateSection.offsetWidth;

            certificateSection.style.animation =
                "certificateReveal 1s linear";
        }
    });
}, {
    threshold: 0.3
});

if (certificateSection) observer.observe(certificateSection);








if (menuBar && sideNav) {
    menuBar.addEventListener("click", () => {
        sideNav.classList.toggle("active");
        syncSideNavState();
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sideNav && sideNav.classList.contains("active")) {
        sideNav.classList.remove("active");
        syncSideNavState();
    }
});

document.addEventListener("click", (e) => {
    if (!sideNav || !sideNav.classList.contains("active")) return;
    if (menuBar && (e.target === menuBar || menuBar.contains(e.target))) return;
    if (sideNav.contains(e.target)) return;
    sideNav.classList.remove("active");
    syncSideNavState();
});

if (btn && contact) {
    btn.addEventListener("click", function () {
        contact.classList.toggle("book");
    });
}

if (bookBtn && contact) {
    bookBtn.addEventListener("click", function () {
        contact.classList.toggle("book");
    });
}

