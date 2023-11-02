// This changes the header color on scroll and the text for the links
document.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelectorAll('.bar');

    if (window.scrollY > 0) {
        navLinks.forEach((link) => {
            link.classList.add('scrolled');
        });
        hamburger.forEach((bar) => {
            bar.classList.add('scrolled');
        });
        header.classList.add('scrolled');
        navMenu.classList.add('scrolled');
    } else {
        navLinks.forEach((link) => {
            link.classList.remove('scrolled');
        });
        hamburger.forEach((bar) => {
            bar.classList.remove('scrolled');
        });
        header.classList.remove('scrolled');
        navMenu.classList.remove('scrolled');
        }
});

// This is the scroll function for the links in the header
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar a");
    let isScrolling = false; // Variable to track scrolling

    window.addEventListener("scroll", function () {
        if (!isScrolling) {
            const scrollPosition = window.scrollY;

            navLinks.forEach((link) => {
                const targetId = link.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const sectionTop = targetSection.offsetTop;
                    const sectionBottom = sectionTop + targetSection.clientHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        // Remove the "active" class from all links
                        navLinks.forEach((navLink) => {
                            navLink.classList.remove("active");
                        });

                        // Add the "active" class to the current section's link
                        link.classList.add("active");
                    }
                }
            });
        }
    });

    // Add a click event listener to each link
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Disable scrolling while handling the click event
            isScrolling = true;

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });

                // Remove the "active" class from all links
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });

                // Add the "active" class to the clicked link
                this.classList.add("active");

                // Re-enable scrolling after a short delay (adjust as needed)
                setTimeout(function () {
                    isScrolling = false;
                }, 800); // 500 milliseconds, adjust as needed
            }
        });
    });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-item");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const audioBoxes = document.querySelectorAll(".audio-item");
    let activeAudioElement = null; // Track the active audio element

    audioBoxes.forEach((box) => {
        const audioId = box.getAttribute("data-audio");
        const audioElement = new Audio(audioId);

        box.addEventListener("click", function () {
            if (audioElement === activeAudioElement) {
                // If the same audio item is clicked again, toggle play/pause
                if (audioElement.paused) {
                    audioElement.play();
                    activeAudioElement = audioElement;
                    box.classList.add("active-audio");
                } else { 
                    // Pause the audio and remove the active class
                    audioElement.pause();
                    activeAudioElement = null;
                    box.classList.remove("active-audio");
                }
            } else {
                // Pause the currently playing audio (if any) and remove the active class
                if (activeAudioElement !== null) {
                    activeAudioElement.pause();
                    // TODO: Remove the active class from the box that was previously active
                    const activeBox = document.querySelector(".active-audio");
                    activeBox.classList.remove("active-audio");
                }

                // Play the clicked audio element
                audioElement.play();
                box.classList.add("active-audio");
                activeAudioElement = audioElement;
            }
        });
    });
});
