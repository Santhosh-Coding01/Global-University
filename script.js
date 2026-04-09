// ✅ Welcome
function welcome() {
    alert("🎓 Application Started!");
}

// ✅ Menu Toggle (ONLY MOBILE)
function toggleMenu() {
    if (window.innerWidth <= 768) {
        document.getElementById("navMenu").classList.toggle("show");
    }
}

// ✅ Dark Mode
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// ✅ Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (!name || !email) {
        alert("❌ Please fill all fields");
        return false;
    }

    alert("✅ Message Sent!");
    return true;
}

// ✅ Scroll Top Button + Animation
window.addEventListener("scroll", () => {
    let btn = document.getElementById("topBtn");

    if (btn) {
        btn.style.display = window.scrollY > 200 ? "block" : "none";
    }

    reveal();
});

// ✅ Scroll to Top
function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

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

// ✅ Run on Load
window.addEventListener("load", reveal);

// ✅ Close menu after click (mobile)
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            document.getElementById("navMenu").classList.remove("show");
        }
    });
});
