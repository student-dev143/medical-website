let btn = document.querySelector("#nav-booking");
let contact = document.querySelector(".book-container")
let sideNav = document.querySelector(".side-nav");
let menuBar = document.querySelector(".ri-menu-line")
const certificateSection = document.querySelector("#certificates-credentials");
let bookBtn = document.querySelector("#home-booking");
const navLinks = document.querySelectorAll(".side-nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        sideNav.classList.remove("active");
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            certificateSection.style.animation = "none";

            void certificateSection.offsetWidth;

            certificateSection.style.animation =
                "certificateReveal 1s linear";
        }
    });
}, {
    threshold: 0.3
});

observer.observe(certificateSection);








menuBar.addEventListener("click",()=>{
   sideNav.classList.toggle("active")
});



btn.addEventListener("click",function () {
  contact.classList.toggle("book")
})
// bookBtn.addEventListener("click",function () {
//   contact.classList.toggle("book")
// })

