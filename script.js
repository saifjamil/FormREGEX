
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let nameRegex = /^[a-zA-Z\s]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let valid = true;

    if (!nameRegex.test(name)) {
        document.getElementById('nameError').innerText = "Invalid name. Only letters and spaces are allowed.";
        valid = false;
    } else {
        document.getElementById('nameError').innerText = "";
    }

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = "Invalid email format.";
        valid = false;
    } else {
        document.getElementById('emailError').innerText = "";
    }

    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').innerText = "Password must be at least 8 characters long and include at least one letter and one number.";
        valid = false;
    } else {
        document.getElementById('passwordError').innerText = "";
    }

    if (valid) {
        alert("Form submitted successfully!");
        document.getElementById('myForm').reset();
    }
});
