// ✅ Run after page loads
document.addEventListener("DOMContentLoaded", () => {

    // ✅ Welcome
    window.welcome = function () {
        alert("🎓 Application Started!");
    };

    // ✅ Menu Toggle
    window.toggleMenu = function () {
        const nav = document.getElementById("navMenu");
        if (nav) {
            nav.classList.toggle("show");
        }
    };

    // ✅ Close menu after clicking link (mobile)
    const links = document.querySelectorAll("#navMenu a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                document.getElementById("navMenu").classList.remove("show");
            }
        });
    });

    // ✅ Dark Mode
    window.toggleTheme = function () {
        document.body.classList.toggle("dark");
    };

    // ✅ Form Validation
    window.validateForm = function () {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        if (!name || !email) {
            alert("❌ Please fill all fields");
            return false;
        }

        alert("✅ Message Sent!");
        return true;
    };

    // ✅ Scroll Events
    window.addEventListener("scroll", () => {
        let btn = document.getElementById("topBtn");

        if (btn) {
            btn.style.display = window.scrollY > 200 ? "block" : "none";
        }

        reveal();
    });

    // ✅ Scroll Top
    window.scrollTop = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // ✅ Reveal Animation
    function reveal() {
        let items = document.querySelectorAll(".card, .pcard");

        items.forEach(el => {
            let top = el.getBoundingClientRect().top;
            let screen = window.innerHeight;

            if (top < screen - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    // ✅ Run once on load
    reveal();

});
