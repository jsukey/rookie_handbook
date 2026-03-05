// login.js

// PASTE YOUR APPS SCRIPT WEB APP URL HERE
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwCAzBmW3amcvETJFzKvUH_i-Oi5ZBXnGmwLHOmjue9gwQk8CeGMxf85aFeNZXOXGpDig/exec'; 

document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent page reload
    
    const userEmail = document.getElementById('userEmail').value;
    const password = document.getElementById('password').value;
    const loginBtn = document.getElementById('loginBtn');
    const errorMsg = document.getElementById('error-message');
    
    // UI Update: Loading State
    loginBtn.innerText = 'Authenticating...';
    loginBtn.disabled = true;
    errorMsg.style.display = 'none';

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            body: JSON.stringify({
            action: 'login',
            userEmail: userEmail,
            password: password
        })
        });

        const data = await response.json();

        if (data.success) {
            // LOGIN SUCCESS: Write to localStorage
            localStorage.setItem('activeUser', JSON.stringify(data.user));
            localStorage.setItem('userProgress', JSON.stringify(data.progress));
            
            // Redirect to dashboard
            window.location.href = 'index.html';
        } else {
            // LOGIN FAILED: Show error
            showError(data.message);
        }
    } catch (error) {
        console.error("Login Error:", error);
        showError("Network error. Could not connect to the server.");
    } finally {
        // Reset UI
        loginBtn.innerText = 'Login';
        loginBtn.disabled = false;
    }
});

function showError(message) {
    const errorMsg = document.getElementById('error-message');
    errorMsg.innerText = message;
    errorMsg.style.display = 'block';
}
