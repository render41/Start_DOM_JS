const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const darkModePreference = localStorage.getItem("darkMode");

  if (darkModePreference === "enabled") {
    body.classList.add("dark-mode");
  }
});
