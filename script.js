document.getElementById("sign-up").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value;
    const confirmPass = document.getElementById("confirm-pass").value;
    const terms = document.getElementById('terms');
    const status = document.querySelector('input[name="gender"]:checked');
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password validation
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and contain an uppercase letter, lowercase letter, number, and special character.");
        return;
    }

    if(confirmPass===""){
        alert("please Confirm your Password");
        return;
    }
    if(password != confirmPass){
        alert("Password not matched");
        return;
    }

    if(!terms.checked){
        alert("Accept the terms and condition");
        return;
    }
   

if (status === null) {
    alert("Please select your status.");
    return;
}
    alert("Form submitted successfully!");
});