const menu = document.getElementById("menu-toggle");
const icon = menu.querySelector("i"); // target icon properly
const navbar = document.getElementById("navList");

menu.onclick = () => {
    navbar.classList.toggle("active");

    // Toggle icon on <i>, not div
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
};

// Close menu on link click
document.querySelectorAll(".navLinks").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});


//smooth scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navLinks");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // Adjust the offset (150px) to trigger the highlight slightly earlier
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        
        // Check if the link's href matches the current section ID
        if (link.getAttribute("href").includes(current) && current !== "") {
            link.classList.add("active");
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


// Amination
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Triggers when element is 150px into view

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Listen for scroll events
window.addEventListener("scroll", reveal);

// Run once on load to catch elements already in view
reveal();

//scroll to top button
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  // Show button after scrolling down 400px
  if (window.pageYOffset > 400) {
      scrollBtn.classList.add("show");
  } else {
      scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  // Smooth scroll to the hero section (id="home")
  document.getElementById("home").scrollIntoView({
      behavior: "smooth"
  });
});
