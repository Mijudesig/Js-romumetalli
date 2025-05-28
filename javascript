function playCarSound() {
  const audio = new Audio('https://cdn.pixabay.com/download/audio/2021/08/04/audio_9233d91e3f.mp3?filename=car-engine-start-9233.mp3');
  audio.play();
}

function toggleLanguage() {
  alert("Multilingual content switching is under development.");
}
// === Scroll Animation ===
const sections = document.querySelectorAll("section");
const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

// === Modal Form ===
const modal = document.getElementById("contactModal");
const openModal = document.getElementById("openContact");
const closeModal = document.getElementsByClassName("close-btn")[0];

openModal.addEventListener("click", () => modal.style.display = "block");
closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", event => {
  if (event.target === modal) modal.style.display = "none";
});
// === Preloader ===
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.pointerEvents = "none";
  setTimeout(() => preloader.style.display = "none", 1000);
});

// === Sound on Hover ===
const hoverSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-fast-double-click-on-mouse-275.wav");
document.querySelectorAll(".hover-sound").forEach(el => {
  el.addEventListener("mouseenter", () => hoverSound.play());
});
// === Language Switcher ===
const langToggle = document.getElementById("langToggle");
const translations = {
  en: {
    title: "Welcome to JS-Romumetalli Oy",
    services: "Our Services",
    contact: "Contact Us"
  },
  fi: {
    title: "Tervetuloa JS-Romumetalli Oy:lle",
    services: "Palvelumme",
    contact: "Ota yhteyttä"
  }
};
langToggle.addEventListener("change", () => {
  const lang = langToggle.value;
  document.getElementById("mainTitle").innerText = translations[lang].title;
  document.getElementById("servicesTitle").innerText = translations[lang].services;
  document.getElementById("contactTitle").innerText = translations[lang].contact;
});
// === Scroll to Top Button ===
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Floating Bubbles Background Effect ===
const createBubble = () => {
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.style.left = Math.random() * 100 + "vw";
  bubble.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(bubble);
  setTimeout(() => bubble.remove(), 8000);
};
setInterval(createBubble, 500);
