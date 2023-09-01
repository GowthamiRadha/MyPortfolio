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

emailIcon.addEventListener('click', function (e) {
  e.preventDefault();
  
  const emailAddress = emailIcon.getAttribute('href');
  copyToClipboard(emailAddress);
  alert('Email is Copied!');
});

function copyToClipboard(text) {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}



const text = "I am actively seeking full-time positions starting from January 2024.";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("availability-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 30);
  }
}

function startTyping() {
  // Clear the text and reset the index
  document.getElementById("availability-text").innerHTML = "";
  index = 0;
  
  // Start typing animation
  type();
}

function initTypeWriter() {
  var typedText = "Hello!!!";
  var i = 0;
  var speed = 500; // Speed in milliseconds
  var elem = document.getElementById("typed-text");
  var cursor = document.getElementById("cursor");

  elem.innerHTML = ""; // Clear the text

  // Make cursor visible
  cursor.style.display = "inline";
  cursor.classList.add("blinking-cursor");
  
  function typeWriter() {
    if (i < typedText.length) {
      elem.innerHTML += typedText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      // Remove cursor when typing is done
      cursor.style.display = "none";
      cursor.classList.remove("blinking-cursor");
    }
  }

  typeWriter();
}

// Initialize the typing effect when the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initTypeWriter();
});
