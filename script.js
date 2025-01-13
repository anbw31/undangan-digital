document.addEventListener("DOMContentLoaded", function () {
   document.body.style.overflow = 'hidden';

    const openButton = document.querySelector(".first-page .button");

    openButton.addEventListener("click", function (event) {
        event.preventDefault();

        document.body.style.overflow = 'auto';

        const secondPage = document.getElementById("second-page");
        secondPage.scrollIntoView({ behavior: 'smooth' });
    });

    const pages = document.querySelectorAll(".page");

    const observerOptions = {
        threshold: 0.2,
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    pages.forEach(page => {
        observer.observe(page);
    });
});