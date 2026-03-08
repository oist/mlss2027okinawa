document.addEventListener("DOMContentLoaded", () => {
  // ── Mobile nav toggle ──────────────────────────────────────────
  const toggle = document.getElementById("navToggle");
  const menu   = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close menu when a nav link is tapped on mobile
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
