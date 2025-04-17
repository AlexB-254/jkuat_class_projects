//script for menu selector
document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll('.menu a');

  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Stop default jump

      const targetId = this.getAttribute('href').substring(1); // Get 'about', 'services', etc.
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

//script for greetings
document.addEventListener("DOMContentLoaded", function () {
  const greetingElement = document.getElementById("greeting");
  const currentHour = new Date().getHours();

  let greeting;

  if (currentHour >= 1 && currentHour < 12) {
    greeting = "Good Morning, I am Alex Ohuru";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon, I am Alex Ohuru";
  } else {
    greeting = "Good Evening, I am Alex Ohuru";
  }

  greetingElement.textContent = greeting;
});


//script for collapsing text and preview button
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn_preview");

  buttons.forEach(button => {
      const preview = button.previousElementSibling;

      button.addEventListener('click', () => {
        preview.classList.toggle('expanded');
        
        if (preview.classList.contains('expanded')) {
          button.textContent = 'Read Less';
        } else {
          button.textContent = 'Read More';
        }
      });
    });
  });

//script for animate counting
document.addEventListener("DOMContentLoaded", () => {
  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 1); 
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        current = target;
      }
      element.textContent = Math.floor(current).toLocaleString();
    }, 16);
  }

  const counters = document.querySelectorAll(".count-number");
  counters.forEach(counter => {
    const target = parseInt(counter.textContent.replace(/,/g, ''));
    counter.textContent = '0';
    animateCounter(counter, target);
  });
});


//script for clearing input holders displaying and hiding the tahnk you massage
document.addEventListener("DOMContentLoaded", function() {
  const btnSub = document.getElementById("btn_sub");
  const thankYouMsg = document.getElementById("msg");

  btnSub.addEventListener("click", function(e) {
    e.preventDefault();
    
   
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    
    thankYouMsg.style.display = "block";
    
    setTimeout(() => {
      thankYouMsg.style.display = "none";
    }, 20000);
  });
});