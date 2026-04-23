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

document.getElementById('inquire-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the page from refreshing

    // 1. Get the values from all input fields
    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    const plans = document.querySelector('select[name="plans"]').value;
    
    // NEW FIELDS
    const profession = document.querySelector('select[name="profession"]').value;
    const startTime = document.querySelector('select[name="start_time"]').value;
    
    // Get radio button value (checks which one is selected)
    const interest = document.querySelector('input[name="interest"]:checked')?.value || "Not specified";

    // 2. Format the WhatsApp message
    const phoneNumber = "+919619525492"; 
    
    // We use encodeURIComponent to handle spaces and special characters safely
    const sendText = `Hello! I'm interested in this program.%0A%0A` +
        `*Name:* ${name}%0A` +
        `*Phone:* ${phone}%0A` +
        `*Email:* ${email}%0A` +
        `*Profession:* ${profession}%0A` +
        `*Interested:* ${interest}%0A` +
        `*Plan:* ${plans}%0A` +
        `*Start Time:* ${startTime}%0A` +
        `*Message:* ${message}`;

    // 3. Open WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${sendText}`;
    window.open(whatsappUrl, '_blank');
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
