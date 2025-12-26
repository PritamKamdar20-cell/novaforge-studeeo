// Button click feedback
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    alert(`${button.innerText} coming soon!`);
  });
});

// Navbar item click
document.querySelectorAll(".nav-links li").forEach(item => {
  item.addEventListener("click", () => {
    console.log(`${item.innerText} clicked`);
  });
});

