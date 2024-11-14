// JavaScript to handle the login functionality
function login() {
    // Get the values entered in the login form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Credentials validation
    if (email === 'Chenryrose15' && password === 'Laliee15') {
        // Hide the login form
        document.querySelector('.form').style.display = 'none';

        // Show the welcome page with "I Love You!" message
        document.getElementById('welcomePage').style.display = 'flex';
    } else {
        alert('Invalid email or password');
    }
}