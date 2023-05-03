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
