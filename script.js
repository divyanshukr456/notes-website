// DOM Elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const toast = document.getElementById('toast');

// Toggle between Login and Signup forms with smooth animation
function toggleForms() {
    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');
    
    // Clear inputs when toggling forms
    document.querySelectorAll('input').forEach(input => input.value = '');
}

// Display Toast Notification
function showToast(message, type) {
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Handle Signup Form Submission
signupForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload
    
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    
    // Validation
    if (password !== confirmPassword) {
        showToast('Passwords do not match!', 'error');
        return;
    }
    
    if (password.length < 6) {
        showToast('Password must be at least 6 characters long.', 'error');
        return;
    }
    
    // Check if a user with this email already exists in localStorage
    if (localStorage.getItem(email)) {
        showToast('An account with this email already exists!', 'error');
        return;
    }
    
    // Save new user data to localStorage
    const userData = {
        name: name,
        email: email,
        password: password // In a real application, passwords MUST be hashed securely on the backend
    };
    
    localStorage.setItem(email, JSON.stringify(userData));
    showToast('Account created successfully! Please sign in.', 'success');
    
    // Automatically switch back to login form
    toggleForms();
});

// Handle Login Form Submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload
    
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    
    // Retrieve user data from localStorage
    const storedUserDataJSON = localStorage.getItem(email);
    
    if (storedUserDataJSON) {
        const storedUserData = JSON.parse(storedUserDataJSON);
        
        // Verify password
        if (storedUserData.password === password) {
            showToast(`Welcome back, ${storedUserData.name}!`, 'success');
            // Redirect logic would go here (e.g., window.location.href = '/dashboard.html')
            
            // For demo purposes, we clear the form
            document.getElementById('login-password').value = '';
        } else {
            showToast('Incorrect password. Please try again.', 'error');
        }
    } else {
        showToast('No account found with this email.', 'error');
    }
});
