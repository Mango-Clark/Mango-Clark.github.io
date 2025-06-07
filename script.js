const nav = document.querySelector(".navigationbar");

document.addEventListener("scroll", () => {
        if (nav.classList.contains("static")) {
                return;
        }
        if (window.scrollY == 0) {
                nav.classList.remove("scrolled");
                nav.classList.remove("active");
                nav.classList.add("top");
        } else if (window.scrollY < 100) {
                nav.classList.remove("scrolled");
                nav.classList.remove("top");
                nav.classList.add("active");
        } else {
                nav.classList.remove("top");
                nav.classList.remove("active");
                nav.classList.add("scrolled");
        }
});

const scrollBtn = document.getElementById("scrollTopBtn");
if (scrollBtn) {
        window.addEventListener("scroll", () => {
                if (window.scrollY > 200) {
                        scrollBtn.classList.add("show");
                } else {
                        scrollBtn.classList.remove("show");
                }
        });
        scrollBtn.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
        });
}
