// Smooth scrolling effect for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Sticky Navbar on scroll
window.onscroll = function() {stickyNavbar()};
let navbar = document.querySelector('nav');
let sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Mobile navbar toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Scroll to Top Button
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scrollToTop');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// Closing the mobile menu after a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Real-time input validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // Function to validate name (only letters and spaces)
    function validateName() {
        const nameValue = name.value.trim();
        if (nameValue.length > 0 && /^[a-zA-Z\s]+$/.test(nameValue)) {
            name.classList.remove('invalid');
            name.classList.add('valid');
        } else {
            name.classList.remove('valid');
            name.classList.add('invalid');
        }
    }

    // Function to validate email
    function validateEmail() {
        const emailValue = email.value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailPattern.test(emailValue)) {
            email.classList.remove('invalid');
            email.classList.add('valid');
        } else {
            email.classList.remove('valid');
            email.classList.add('invalid');
        }
    }

    // Function to validate phone number (basic pattern for US phone numbers)
    function validatePhone() {
        const phoneValue = phone.value.trim();
        const phonePattern = /^[0-9]{10}$/; // 10 digits for US phone numbers
        if (phonePattern.test(phoneValue)) {
            phone.classList.remove('invalid');
            phone.classList.add('valid');
        } else {
            phone.classList.remove('valid');
            phone.classList.add('invalid');
        }
    }

    // Function to validate subject (non-empty)
    function validateSubject() {
        const subjectValue = subject.value.trim();
        if (subjectValue.length > 0) {
            subject.classList.remove('invalid');
            subject.classList.add('valid');
        } else {
            subject.classList.remove('valid');
            subject.classList.add('invalid');
        }
    }

    // Function to validate message (non-empty)
    function validateMessage() {
        const messageValue = message.value.trim();
        if (messageValue.length > 0) {
            message.classList.remove('invalid');
            message.classList.add('valid');
        } else {
            message.classList.remove('valid');
            message.classList.add('invalid');
        }
    }

    // Attach event listeners to validate after every character
    name.addEventListener('input', validateName);
    email.addEventListener('input', validateEmail);
    phone.addEventListener('input', validatePhone);
    subject.addEventListener('input', validateSubject);
    message.addEventListener('input', validateMessage);
    
    // Validate the form before submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Ensure all fields are valid before submitting
        if (name.classList.contains('valid') &&
            email.classList.contains('valid') &&
            phone.classList.contains('valid') &&
            subject.classList.contains('valid') &&
            message.classList.contains('valid')) {
            form.submit(); // Submit the form if valid
        } else {
            alert("Please fill in the form correctly.");
        }
    });
});



