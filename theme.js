const toggle = document.getElementById("themeToggle");
const current = localStorage.getItem("theme");

if (current) document.documentElement.setAttribute("data-theme", current);

toggle.addEventListener("click", () => {
  const now = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", now);
  localStorage.setItem("theme", now);
});
