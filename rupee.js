const scriptURL = 'https://script.google.com/macros/s/AKfycby2nOj-RLV8ZJkAVR6pzgQ6XAQibKBredNC4kQ9ap9g6wcLhNjRAiSjidDzUyvgsGLhJA/exec'; 

// Handle expense form submission
const form = document.getElementById('expense-form');
form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append('action', 'submitExpense'); // Append action type

    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success!', data);
        alert('Expense submitted successfully!');
        form.reset(); // Reset the form after submission
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert('There was an error submitting the expense.');
    });
});
