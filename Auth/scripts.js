// Tab switching logic
const signinTab = document.getElementById('signin-tab');
const signupTab = document.getElementById('signup-tab');
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');

signinTab.addEventListener('click', () => {
    signinTab.classList.add('active');
    signupTab.classList.remove('active');
    signinForm.classList.add('active');
    signupForm.classList.remove('active');
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    signinTab.classList.remove('active');
    signupForm.classList.add('active');
    signinForm.classList.remove('active');
});

// Mock sign-in and sign-up functions
// Mock sign-in function
// Mock sign-in and sign-up functions
function signin() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    // Send AJAX request to the server for authentication
    fetch('signin.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '../Home/home.html'; // Redirect to home page
        } else {
            alert(data.message); // Show error message
        }
    })
    .catch(error => console.error('Error:', error));
}

function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Send AJAX request to the server for registration
    fetch('signup.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '../Home/home.html'; // Redirect to home page
        } else {
            alert(data.message); // Show error message
        }
    })
    .catch(error => console.error('Error:', error));
}
