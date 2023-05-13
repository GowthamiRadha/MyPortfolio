document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = navMenu.querySelectorAll(".nav__link");
  const sections = document.querySelectorAll(".page-section");

  // Hide all sections except the first one
  for (let i = 1; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  // Add click event listeners to navigation links
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {

      const href = this.getAttribute("href");

      // Check if the link is the Resume link
      if (href.startsWith("http")) {
        // Resume link, let it navigate to the URL normally
        return;
      }
    
      event.preventDefault();

      // Get the target section from the href attribute
      const target = document.querySelector(this.getAttribute("href"));

      // Hide all sections
      sections.forEach(function (section) {
        section.style.display = "none";
      });

      // Show the target section
      target.style.display = "block";

      // Close the navigation menu if it's open
      navMenu.classList.remove("show");
    });
  });

  // Toggle navigation menu
  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
});


const emailIcon = document.getElementById('email-icon');

emailIcon.addEventListener('click', function(e) {
  e.preventDefault();
  alert('Email is Copied!');
});


const text = "I am actively seeking internship/co-op opportunities for Fall 2023 and full-time positions starting from December 2023.";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("availability-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}

type();
