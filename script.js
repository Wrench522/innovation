document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle display between flex and none for mobile
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#fff';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 10px 10px rgba(0,0,0,0.1)';
        }
    });

    // 2. Form Submission Handling
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload

        // Get values
        const name = document.getElementById('name').value;
        const dept = document.getElementById('department').value;
        const date = document.getElementById('date').value;

        // Simple Validation & Confirmation
        if (name && dept && date) {
            alert(`Success! Appointment confirmed for ${name} in the ${dept} department on ${date}.`);
            bookingForm.reset(); // Clear form
        } else {
            alert("Please complete all fields.");
        }
    });

    // 3. Smooth Scroll (Fallback for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});