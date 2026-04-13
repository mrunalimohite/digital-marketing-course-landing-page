const menuIcon = document.getElementById('menu');
const nav = document.getElementById('navList');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    // Toggle icon between bars and X
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

//scrolling 
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-list");

  window.addEventListener("scroll", () => {
    let current = "";

    // Find the current section in view
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 90; // Adjust if you have a fixed header
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id"); // Get ID of current section
      }
    });

    // Update the nav links
    navLinks.forEach(link => {
      link.classList.remove("active"); // Remove highlight
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active"); // Highlight the active one
      }
    });
  });


// contact form submission
 document.getElementById('inquire-form').addEventListener('submit', function(e) {
    // 1. Get the values from your input fields
    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const plans = document.querySelector('select[name="plans"]').value;
    const meassage = document.querySelector('textarea[name="message"]').value;

    // 2. Format the WhatsApp message
    const phoneNumber = "+919619525492"; // Enter client's phone number with country code
    const Sendmessage = `Hello! I'm interested in this program. %0A%0A%0A` +
        `*name:* ${name}%0A` +
        `*Phone:* ${phone}%0A` +
        `*Email:* ${email}%0A` +
        `*Message:* ${meassage}%0A` +
        `*Plan:* ${plans}`;

    // 3. Open WhatsApp in a new tab
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${Sendmessage}`;
    window.open(whatsappUrl, '_blank');
});

document.addEventListener('DOMContentLoaded', () => {
    const courseOverview = document.querySelector('.dropdown > a');
    const dropdownParent = document.querySelector('.dropdown');

    courseOverview.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents the page from jumping to #courses
        dropdownParent.classList.toggle('active'); // Toggles the menu visibility
    });
});