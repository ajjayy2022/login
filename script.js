function toggleForms(showFormId, hideFormId) {
    var showForm = document.getElementById(showFormId);
    var hideForm = document.getElementById(hideFormId);

    showForm.classList.remove('hidden');
    hideForm.classList.add('hidden');
}

function register() {
    var registerName = document.getElementById('register-name').value;
    var registerContact = document.getElementById('register-contact').value;
    var registerEmail = document.getElementById('register-email').value;
    var registerPassword = document.getElementById('register-password').value;
    var registerErrorMessage = document.getElementById('register-error-message');

    // Client-side validation
    if (registerName === '' || registerContact === '' || registerEmail === '' || registerPassword === '') {
        registerErrorMessage.textContent = 'Please fill in all registration fields.';
        return false;
    }

    // Simulate AJAX request to the server (replace this with your actual AJAX call)
    // Assume successful registration for this example
    toggleForms('login-form', 'register-form');
    resetForm('registerForm');

    return false;
}

function login() {
    var loginEmail = document.getElementById('login-email').value;
    var loginPassword = document.getElementById('login-password').value;
    var loginErrorMessage = document.getElementById('login-error-message');

    // Client-side validation
    if (loginEmail === '' || loginPassword === '') {
        loginErrorMessage.textContent = 'Please enter both email/number and password.';
        return false;
    }

    // Simulate AJAX request to the server (replace this with your actual AJAX call)
    // Check if the user is registered, and if so, proceed with login
    if (isUserRegistered(loginEmail, loginPassword)) {
        showWelcomePage(loginEmail);
        resetForm('loginForm');
    } else {
        loginErrorMessage.textContent = 'Invalid email/number or password.';
    }

    return false;
}

function isUserRegistered(email, password) {
    // In a real application, you would perform a check against your server/database
    // For the sake of this example, let's assume there is a predefined user
    var registeredUser = { email: 'test@example.com', contact: '1234567890', password: 'testpassword' };

    return (email === registeredUser.email || email === registeredUser.contact) && password === registeredUser.password;
}

function showWelcomePage(email) {
    var registerForm = document.getElementById('register-form');
    var loginForm = document.getElementById('login-form');
    var welcomePage = document.getElementById('welcome-page');

    registerForm.classList.add('hidden');
    loginForm.classList.add('hidden');
    welcomePage.classList.remove('hidden');
}

function resetForm(formId) {
    document.getElementById(formId).reset();
    document.getElementById(formId + '-error-message').textContent = '';
}