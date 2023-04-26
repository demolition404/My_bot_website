// Smooth scrolling for anchor links
document.addEventListener('click', function (event) {
    if (event.target.matches('a[href^="#"]')) {
      event.preventDefault();
      let target = document.querySelector(event.target.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
  
  // Form submission
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let message = document.querySelector('textarea[name="message"]').value;
  
    // Do something with the form data (e.g. send to server, show success message)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // Clear form inputs
    document.querySelector('input[name="name"]').value = '';
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
  });
  