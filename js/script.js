// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Form submitted successfully!');
// });

function setupContactForm() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const numbertInput = document.getElementById('number');
        const esubtInput = document.getElementById('esub');
        const messageInput = document.getElementById('message');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const number = numbertInput.value.trim();
        const esub = esubtInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !number || !esub || !message) {
            alert('Please fill out all fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Number:', number);
        console.log('Email Subject:', esub);
        console.log('Message:', message);

        alert('Your message has been sent successfully!');
        
        form.reset();
    });
}

setupContactForm();
