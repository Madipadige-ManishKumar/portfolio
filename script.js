const tl = gsap.timeline();

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

tl.to("#monitor", {
  x: screenWidth * 0.3,
  y: screenHeight * 1,
  duration: 2,
  scrollTrigger: {
    trigger: "#home",
    scroller: "body",
    start: "top top",
    scrub: 1,
    
  }
});


tl.from("#service-card1",{
    x: -screenWidth * 2,
    
    duration: 2,
  scrollTrigger: {
    trigger: "#services",
    scroller: "body",
    start:"top 100%",
    end :"top 20%",
    scrub: 1,
    
  }
})

tl.from("#service-card2",{
    y: screenWidth * 2,
    duration: 2,
    opacity:-1,
  scrollTrigger: {
    trigger: "#services",
    scroller: "body",
    start:"top 100%",
    end :"top 20%",
    scrub: 1,
    
  }
})

tl.from("#service-card3",{
    x: screenWidth * 2,
    duration: 2,
    opacity:-1,
  scrollTrigger: {
    trigger: "#services",
    scroller: "body",
    start:"top 100%",
    end :"top 20%",
    scrub: 1,
    
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('mousemove', (e) => {
    const spheres = document.querySelectorAll('.floating-sphere');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    spheres.forEach((sphere, index) => {
        const speed = (index + 1) * 0.5;
        const xOffset = (x - 0.5) * speed * 10;
        const yOffset = (y - 0.5) * speed * 10;
        
        sphere.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

const monitor = document.querySelector('.monitor');
monitor.addEventListener('click', () => {
    monitor.style.animation = 'none';
    setTimeout(() => {
        monitor.style.animation = 'float 6s ease-in-out infinite';
    }, 100);
});

// Form submission handling
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // You can send the data to your backend here with fetch or display a success message
    console.log("Form Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Example: Show success alert
    alert("Thank you, " + name + "! Your message has been sent successfully.");

    // Optional: Reset the form
    this.reset();
});
