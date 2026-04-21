const slideTriggers = document.querySelectorAll(".slide-trigger");

slideTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".slide-item");
    const isOpen = item.classList.contains("open");

    item.classList.toggle("open");
    trigger.setAttribute("aria-expanded", String(!isOpen));
  });
});

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
