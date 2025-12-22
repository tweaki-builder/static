(function () {
    'use strict';

    try {
        const form = document.getElementById('contact-form');
        if (form) {
            const formMessages = document.getElementById('form-messages');
            
            if (!formMessages) {
                console.warn('Form messages element not found');
                return;
            }

            form.addEventListener('submit', function (e) {
                try {
                    e.preventDefault();

                    // Serialize form data
                    const formData = new FormData(form);
                    const actionUrl = form.getAttribute('action');
                    
                    if (!actionUrl) {
                        console.error('Form action URL not found');
                        formMessages.textContent = 'Form configuration error: no action URL.';
                        return;
                    }

                    // Submit using fetch
                    fetch(actionUrl, {
                        method: 'POST',
                        body: formData
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`HTTP error! status: ${response.status}`);
                            }
                            return response.text();
                        })
                        .then(responseText => {
                            try {
                                if (!formMessages) return;
                                
                                // Update success classes
                                formMessages.classList.remove('text-warning', 'fw-bolder', 'mt-2');
                                formMessages.classList.add('text-dark', 'fw-bold', 'mt-3', 'border', 'py-2', 'px-3');

                                // Set the message text
                                formMessages.textContent = responseText || 'Message sent successfully!';

                                // Clear form fields
                                const formInputs = form.querySelectorAll('#name, #email, #subject, #message');
                                formInputs.forEach(input => {
                                    if (input) input.value = '';
                                });
                            } catch (error) {
                                console.error('Error processing form response:', error);
                                if (formMessages) {
                                    formMessages.textContent = 'Error processing response.';
                                }
                            }
                        })
                        .catch(error => {
                            try {
                                if (!formMessages) return;
                                
                                // Update error classes
                                formMessages.classList.add('text-warning', 'fw-bolder', 'mt-2');
                                formMessages.classList.remove('text-dark', 'fw-bold', 'mt-3', 'border', 'py-2', 'px-3');

                                // Show error message
                                console.error('Form submission error:', error);
                                formMessages.textContent = 'Oops! An error occurred and your message could not be sent.';
                            } catch (innerError) {
                                console.error('Error handling form error:', innerError);
                            }
                        });
                } catch (error) {
                    console.error('Error in form submit handler:', error);
                    if (formMessages) {
                        formMessages.textContent = 'An unexpected error occurred.';
                    }
                }
            });
        }
    } catch (error) {
        console.error('Critical error in contact form initialization:', error);
    }
})();
