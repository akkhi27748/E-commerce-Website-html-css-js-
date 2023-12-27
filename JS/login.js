const signup_form = document.getElementById("signupform");

const submit_button = document.getElementById("submitbutton");

submit_button.addEventListener("click", () => {
    const username = signup_form.EmailId.value;
    //console.log(username);
    let at = username.indexOf("@");
    let dot = username.lastIndexOf(".");
    if (at < 1 || dot - at < 2) {
        alert('Please enter a valid email address');
        return;
    }
    const password = signup_form.password.value;
    //console.log(password);
    const confirmpassword = signup_form.confirmpassword.value;
    if (password.length < 8) {
        alert("Password must be 8 characters long");
        return;
    }
    if (password === confirmpassword) {
        signup(username, password);
    }
    else if (!password || !confirmpassword) {
        alert('Please enter password');
    }
    else {
        alert('Passwords do not match');
    }
});

function signup(email, password) {
  // Check if user already exists or perform other validations

  // For demonstration purposes, directly storing in local storage
  const userData = { email, password };
  localStorage.setItem("userData", JSON.stringify(userData));
    alert("Signup successful!");
    window.location.href = "login.html";
  // Redirect to login page or perform other actions
}

function myPage(){
    window.location.href="index.html";
}