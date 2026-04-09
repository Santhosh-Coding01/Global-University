document.addEventListener("DOMContentLoaded", () => {

    const navMenu = document.getElementById("navMenu");
    const menuToggle = document.querySelector(".menu-toggle");
    const topBtn = document.getElementById("topBtn");

    // ✅ Welcome
    window.welcome = function () {
        alert("🎓 Application Started!");
    };

    // ✅ Toggle Menu (Mobile)
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // ✅ Dark Mode (with save)
    window.toggleTheme = function () {
        document.body.classList.toggle("dark");

        // Save preference
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    };

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    // ✅ Scroll Event
    window.addEventListener("scroll", () => {

        // Show scroll button
        if (window.scrollY > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

        reveal();
    });

    // ✅ Scroll to Top
    window.scrollTop = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // ✅ Reveal Animation
    function reveal() {
        document.querySelectorAll(".card, .pcard").forEach(el => {
            let top = el.getBoundingClientRect().top;
            let screen = window.innerHeight;

            if (top < screen - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    reveal();

    // ✅ Close menu after clicking link (mobile)
    document.querySelectorAll("#navMenu a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove("show");
            }
        });
    });

});
