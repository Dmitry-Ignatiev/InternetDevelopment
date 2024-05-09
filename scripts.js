function button_clicked() {
    // Reset all error messages at the beginning of the function
    document.getElementById("errname").innerHTML = "";
    document.getElementById("errphone").innerHTML = "";
    document.getElementById("erremail").innerHTML = "";
    document.getElementById("errpassword").innerHTML = "";

    let isOk = true; // Flag to track form validity

    // Validate name and last name fields
    const name = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        document.getElementById("errname").innerHTML = "Invalid first name. Only letters and spaces allowed.";
        isOk = false;
    }
    if (!namePattern.test(lastName)) {
        document.getElementById("errname").innerHTML = "Invalid last name. Only letters and spaces allowed.";
        isOk = false;
    }

    // Validate phone number field
    const phoneNum = document.getElementById("phoneNum").value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNum)) {
        document.getElementById("errphone").innerHTML = "Invalid phone number. Must be 10 digits.";
        isOk = false;
    }

    // Validate email field
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("erremail").innerHTML = "Invalid email address.";
        isOk = false;
    }

    // Validate password fields
    const password = document.getElementById("password").value;
    const repeatPass = document.getElementById("repeat_pass").value;
    if (password.length < 8) {
        document.getElementById("errpassword").innerHTML = "Password must be at least 8 characters long.";
        isOk = false;
    } else if (password !== repeatPass) {
        document.getElementById("errpassword").innerHTML = "Passwords do not match.";
        isOk = false;
    }

    // Perform actions if all validations pass
    if (isOk) {
        // Display thank-you message
        document.getElementById("list2").innerHTML = "<li>Thank you for joining us!</li>";

        // Disable all text boxes
        const textBoxes = document.getElementsByTagName("input");
        for (let i = 0; i < textBoxes.length; i++) {
            textBoxes[i].disabled = true;
        }
    }
}
