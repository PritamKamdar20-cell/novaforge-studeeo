// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// OS button placeholder
document.querySelectorAll(".os-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log(btn.innerText + " selected");
  });
});
