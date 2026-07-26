const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("lesson3-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

if (savedTheme === "dark" || savedTheme === "light") {
  root.dataset.theme = savedTheme;
}

function isDarkMode() {
  return root.dataset.theme
    ? root.dataset.theme === "dark"
    : systemPrefersDark.matches;
}

function updateToggle() {
  const darkModeActive = isDarkMode();
  toggle.setAttribute("aria-pressed", String(darkModeActive));
  toggle.textContent = darkModeActive ? "Light mode" : "Dark mode";
}

toggle.addEventListener("click", () => {
  const nextTheme = isDarkMode() ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("lesson3-theme", nextTheme);
  updateToggle();
});

systemPrefersDark.addEventListener("change", () => {
  if (!root.dataset.theme) {
    updateToggle();
  }
});

updateToggle();
