document.addEventListener("DOMContentLoaded", function () {
    // Get all navigation links
    var navLinks = document.querySelectorAll('.nav-item a');

    // Add click event listeners to each navigation link
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove active class from all links
            navLinks.forEach(function (navLink) {
                navLink.classList.remove('active');
            });

            // Add active class to the clicked link
            link.classList.add('active');

            // Get the target page URL and section class
            var href = link.getAttribute('href');
            var pageUrl = href.split('#')[0];
            var sectionClass = href.split('#')[1];

            // Check if the target page is the current page
            if (pageUrl === window.location.pathname) {
                var targetSection = document.querySelector('.' + sectionClass);
                var targetSectionRect = targetSection.getBoundingClientRect();
                var offset = targetSectionRect.top + window.scrollY - document.querySelector('header').offsetHeight - 100;

                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });

            } else {
                // Redirect to the target page
                window.location.href = href;
            }
        });
    });
});
