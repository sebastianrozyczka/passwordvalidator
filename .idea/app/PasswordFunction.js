function showPassword() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword")
    if (password.type === "password") {
        password.type = "text";
        confirmPassword.type = "text";
    } else {
        password.type = "password";
        confirmPassword.type = "password";
    }
}

var showvalidationMessages = function() {
    document.getElementById("message").style.display = "block";
}

var hideValidationMessages = function() {
    document.getElementById("message").style.display = "none";
}

var validator = function () {
    var length = document.getElementById("length")
    var smallLetters = document.getElementById("smallLetters")
    var capitalLetters = document.getElementById("capitalLetters")
    var specialCharacters = document.getElementById("specialCharacters")
    var numbers = document.getElementById("numbers")
    var password = document.getElementById("password")

    var lowerCaseLetters = /[a-z]/g;
    if (password.value.match(lowerCaseLetters)) {
        smallLetters.style.display = "none";
    } else {
        smallLetters.style.display = "block";
    }

    var upperCaseLetters = /[A-Z]/g;
    if (password.value.match(upperCaseLetters)) {
        capitalLetters.style.display = "none";
    } else {
        capitalLetters.style.display = "block";
    }

    var numbersRegex = /[0-9]/g;
    if (password.value.match(numbersRegex)) {
        numbers.style.display = "none";
    } else {
        numbers.style.display = "block";
    }

    var specialCharactersRegex = /[!@#$%^&*()]/g;
    if (password.value.match(specialCharactersRegex)) {
        specialCharacters.style.display = "none";
    } else {
        specialCharacters.style.display = "block";
    }

    if (password.value.length >= 8) {
        length.style.display = "none";
    } else {
        length.style.display = "block";
    }
}

var confirmPasswords = function () {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword")
    var confirmationMessage = document.getElementById("confirmationMessage")
    if (password.value == confirmPassword.value) {
        confirmationMessage.style.color = "green";
        confirmationMessage.innerHTML = "Passwords did match !";
    } else {
        confirmationMessage.style.color = "red";
        confirmationMessage.innerHTML = "Passwords do not match";
    }
}

var validateAndConfirmPassword = function () {
    validator();
    confirmPasswords();
}