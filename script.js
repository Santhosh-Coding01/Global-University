// ✅ Welcome Alert
function welcome() {
    alert("🎓 Application Started!");
}

// ✅ Menu Toggle (Mobile)
function toggleMenu() {
    let nav = document.getElementById("nav");

    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

// ✅ Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// ✅ Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("❌ Please fill all fields");
        return false;
    }

    alert("✅ Message Sent!");
    return true;
}

// ✅ Scroll Button + Animation Trigger
window.addEventListener("scroll", () => {
    let btn = document.getElementById("topBtn");

    if (btn) {
        btn.style.display = window.scrollY > 200 ? "block" : "none";
    }

    revealOnScroll();
});

// ✅ Scroll to Top
function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ✅ Reveal Animation
function revealOnScroll() {
    let elements = document.querySelectorAll(".card, .pcard");

    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

// ✅ Run on Page Load
window.addEventListener("load", revealOnScroll);
