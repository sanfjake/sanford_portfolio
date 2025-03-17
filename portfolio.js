const form = document.getElementById('contact-form');
const statusDiv = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            statusDiv.textContent = 'Thank you! Your message has been sent.';
            statusDiv.className = 'success';
            form.reset(); // Clear the form
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        statusDiv.textContent = 'Oops! There was an issue submitting your form. Please try again.';
        statusDiv.className = 'error';
    }
});
// Form Response
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const statusDiv = document.createElement('div'); // Create a status message container
    statusDiv.id = 'form-status'; // Assign an ID for styling
    form.appendChild(statusDiv); // Add the status message below the form

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                statusDiv.textContent = 'Thank you! Your message has been successfully sent.';
                statusDiv.className = 'success'; // Apply success styling
                form.reset(); // Clear the form
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            statusDiv.textContent = 'Oops! Something went wrong. Please try again later.';
            statusDiv.className = 'error'; // Apply error styling
        }
    });
});
