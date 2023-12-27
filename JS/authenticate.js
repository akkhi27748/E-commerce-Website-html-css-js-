'use strict'

const loginBtn = document.querySelector("#loginButton");
const email = document.querySelector("#username");
const passwrd = document.querySelector('#password');




loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const username = email.value;
    let at = username.indexOf("@");
    let dot = username.lastIndexOf(".");
    if (at < 1 || dot - at < 2) {
        alert('Please enter a valid email address');
        return;
    }
    const password = passwrd.value;
    if (password.length < 8) {
        alert("Password must be 8 characters long");
        return;
    }
    console.log(username, password);
    login(username, password);
    
});




// Function to check if login credentials match stored data
function login(email, password) {
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        if (email === userData.email && password === userData.password) {
            alert('Login successful!');
            window.location.replace('dashboard.html');
            return;
        } else {
            alert('Incorrect email or password.');
        }
    } else {
        alert('User not found. Please sign up.');
    }
}

// Function to logout
function logout() {
  localStorage.removeItem("userData");
    alert("Logged out.");
    window.location.href = "homepage.html";
}
