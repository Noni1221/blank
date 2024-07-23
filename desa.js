// Select elements
const navLinks = document.querySelectorAll('nav a');
const signInButton = document.querySelector('.sign-in');
const heroMsg = document.querySelector('.hero-msg');
const boxElements = document.querySelectorAll('.box');
const responseList = document.querySelector('.response ul');
const emergencyContact = document.querySelector('.Emergency');
const footerLinks = document.querySelectorAll('.footer ul a');

// Add event listeners
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(`Navigating to ${link.textContent}`);
  });
});

signInButton.addEventListener('click', () => {
  console.log('Sign in button clicked');
  // Add authentication logic here
});

// Manipulate the DOM
heroMsg.addEventListener('mouseover', () => {
  heroMsg.style.color = 'blue';
});

heroMsg.addEventListener('mouseout', () => {
  heroMsg.style.color = 'black';
});

boxElements.forEach((box) => {
  box.addEventListener('mouseover', () => {
    box.style.transform = 'scale(1.1)';
  });

  box.addEventListener('mouseout', () => {
    box.style.transform = 'scale(1)';
  });
});

// Create animations or effects
responseList.addEventListener('mouseover', () => {
  responseList.style.animation = 'fadeIn 0.5s';
});

// Add validation to forms (assuming there's a form element)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  console.log(formData);
  // Add form validation logic here
});

// Interact with a backend API or database (using fetch API)
emergencyContact.addEventListener('click', () => {
  fetch('/emergency-contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'Emergency contact clicked' }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

// Add event listeners to footer links
footerLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(`Footer link clicked: ${link.textContent}`);
  });
});