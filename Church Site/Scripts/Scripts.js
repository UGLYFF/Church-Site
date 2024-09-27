let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}
function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu.classList.contains("hide")) {
        navMenu.classList.remove("hide");
        navMenu.classList.add("show");
    } else {
        navMenu.classList.remove("show");
        navMenu.classList.add("hide");
    }
}
