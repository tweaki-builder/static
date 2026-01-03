document.addEventListener('DOMContentLoaded', function() {
    // Automatically find all forms with data-enquiry attribute
    document.querySelectorAll('form').forEach(function(form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            let actionUrl = "https://tweaki.in/api/user/4/enquiry";

            // Collect all form inputs
            let details = [];
            form.querySelectorAll('input, textarea, select').forEach(function(input) {
                details.push({
                    name: input.getAttribute('name') || input.getAttribute('placeholder'),
                    value: input.value,
                    name_attr: input.name
                });
            });

            // Send via Fetch API
            try {
                const response = await fetch(actionUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        details: JSON.stringify(details)
                    })
                });

                const result = await response.json();
                if (response.ok) {
                    alert(result.message || 'Enquiry submitted successfully!');
                    form.reset();
                } else {
                    alert(result.error || 'Something went wrong.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Network error.');
            }
        });
    });
});

