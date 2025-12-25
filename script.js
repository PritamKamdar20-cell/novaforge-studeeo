const animatedItems = document.querySelectorAll('.fade, .slide');

function animateOnScroll() {
  animatedItems.forEach(item => {
    const position = item.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// EMAIL SEND FUNCTION
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_2gcfd78",   // ✅ Correct
    "template_lg2ithx",
    this
  ).then(() => {
    alert("Message sent successfully!");
    this.reset();
  }).catch((error) => {
    alert("Failed to send message");
    console.error(error);
  });
});
