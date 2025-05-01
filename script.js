document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop the page from refreshing
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields! 💌");
      } else {
        alert(`Thank you, ${name}! Your message has been sent successfully 🥰`);
        form.reset(); // clears the form
      }
    });
  });
  