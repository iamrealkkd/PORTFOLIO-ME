// --- 1. Loader Animation ---
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 1000); // Small delay to ensure smooth transition
});

// --- 2. Sticky Navbar & Back to Top Button ---
const header = document.getElementById("header");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    // Navbar
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    // Back to top
    if (window.scrollY > 500) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }
});

// --- 3. Mobile Hamburger Menu ---
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = hamburger.querySelector("i");
    if(navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// Close menu when a link is clicked
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.querySelector("i").classList.remove("fa-times");
        hamburger.querySelector("i").classList.add("fa-bars");
    });
});

// --- 4. Active Section Highlighting ---
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// --- 5. Scroll Reveal Animations ---
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); // Trigger on load

// --- 6. Typing Effect ---
const typewriterText = document.getElementById("typewriter");
const words = ["Computer Science Student.", "C++ Developer.", "Hackathon Enthusiast."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typewriterText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    // Word completed
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Pause at the end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typeSpeed);
}

// Start typing effect after a short delay
setTimeout(type, 1500);