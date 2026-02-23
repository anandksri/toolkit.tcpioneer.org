//    navbar
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");

/* OPEN */
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

/* CLOSE */
function closeNav() {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
}

closeMenu.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);

/* CLOSE ON LINK CLICK */
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", closeNav);
});
/* TYPING EFFECT */
const text = "TCP TOOLKIT";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

/* GRID MOTION */
let offset = 0;
setInterval(() => {
  offset += 0.2;
  document.body.style.backgroundPosition = `${offset}px ${offset}px`;
}, 50);

// tools sections
document.addEventListener("DOMContentLoaded", () => {
  /* INIT ICONS */
  lucide.createIcons();

  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".tool-card");

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase().trim();

    cards.forEach((card) => {
      const name = card.getAttribute("data-name").toLowerCase();

      if (name.includes(value)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});
