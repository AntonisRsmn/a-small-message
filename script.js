const startButton = document.querySelector("#startButton");
const loveButton = document.querySelector("#loveButton");
const loveMessage = document.querySelector("#loveMessage");
const surpriseModal = document.querySelector("#surpriseModal");
const closeButton = document.querySelector("#closeButton");
const particleField = document.querySelector("#particleField");

startButton.addEventListener("click", () => {
  surpriseModal.classList.add("open");
  surpriseModal.setAttribute("aria-hidden", "false");
  closeButton.focus();
  createParticles();
});

function closeSurprise() {
  surpriseModal.classList.remove("open");
  surpriseModal.setAttribute("aria-hidden", "true");
  startButton.focus();
}

function createParticles() {
  particleField.replaceChildren();
  const shapes = ["♡", "♥", "✦", "•"];
  const colors = ["#e85d83", "#f8e9ae", "#c9e6ef", "#ded4f0", "#ffffff"];

  for (let index = 0; index < 38; index += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    particle.style.setProperty("--x", `${35 + Math.random() * 30}%`);
    particle.style.setProperty("--y", `${40 + Math.random() * 20}%`);
    particle.style.setProperty("--drift-x", `${-220 + Math.random() * 440}px`);
    particle.style.setProperty("--drift-y", `${-280 + Math.random() * 320}px`);
    particle.style.setProperty("--size", `${12 + Math.random() * 24}px`);
    particle.style.setProperty("--color", colors[Math.floor(Math.random() * colors.length)]);
    particle.style.animationDelay = `${Math.random() * .25}s`;
    particleField.append(particle);
  }
}

closeButton.addEventListener("click", closeSurprise);

surpriseModal.addEventListener("click", (event) => {
  if (event.target === surpriseModal) closeSurprise();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && surpriseModal.classList.contains("open")) closeSurprise();
});

const reminders = [
  "You are my favorite everything. ♡",
  "In case you forgot: you are wonderful.",
  "Being loved by you is my favorite thing.",
  "You make my world a lot prettier."
];

loveButton.addEventListener("click", () => {
  loveMessage.textContent = reminders[Math.floor(Math.random() * reminders.length)];
});

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  }),
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((section) => observer.observe(section));
