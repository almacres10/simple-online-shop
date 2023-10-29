const menuButton = document.getElementById("menu-button");
const dropdownMenu = document.querySelector(".absolute");

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !isExpanded);
  dropdownMenu.classList.toggle("hidden");
});

// Close the dropdown when clicking outside of it
document.addEventListener("click", (event) => {
  if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
    menuButton.setAttribute("aria-expanded", "false");
    dropdownMenu.classList.add("hidden");
  }
});