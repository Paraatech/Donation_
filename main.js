// script.js
document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.getElementById('payment-method').value;

    // Check if the donation amount and payment method are provided
    if (amount <= 0 || !paymentMethod) {
        alert("Please enter a valid donation amount and select a payment method.");
        return;
    }

    // Simulate donation processing
    console.log(`Donation of ${amount} received through ${paymentMethod}.`);

    // Show a thank you message
    document.getElementById('donation-form').reset();  // Reset form
    document.getElementById('thank-you-message').classList.remove('hidden');
});
// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission
    console.log('Form Submitted:', { name, email, message });

    // Show success message
    document.getElementById('form-response').textContent = "Thank you for reaching out! We'll get back to you soon.";
    document.getElementById('form-message').style.backgroundColor = "#d4edda"; // Green background for success
    document.getElementById('form-message').style.color = "#155724";
    document.getElementById('form-message').classList.remove('hidden');
    
    // Clear form fields
    document.getElementById('contact-form').reset();
});
