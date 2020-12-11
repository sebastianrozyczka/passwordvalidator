function showPassword() {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    if (password.type === "password") {
        password.type = "text";
        confirmPassword.type = "text";
    } else {
        password.type = "password";
        confirmPassword.type = "password";
    }
}

let validator = function () {
    let message = document.getElementById("message");
    let password = document.getElementById("password");
    let messages = "";
    const length = "Password is too short. Min. 8 characters !";
    const smallLetters = "Min. 1 small letter";
    const capitalLetters = "Min. 1 capital letter";
    const specialCharacters = "Min. 1 special character";
    const numbers = "Min. 1 small number";

    const lowerCaseLetters = /[a-z]/g;
    if (!password.value.match(lowerCaseLetters)) {
        messages += smallLetters;
    }

    const upperCaseLetters = /[A-Z]/g;
    if (!password.value.match(upperCaseLetters)) {
        messages += capitalLetters;
    }

    const numbersRegex = /[0-9]/g;
    if (!password.value.match(numbersRegex)) {
        messages += numbers;
    }

    const specialCharactersRegex = /[!@#$%^&*()]/g;
    if (!password.value.match(specialCharactersRegex)) {
        messages += specialCharacters;
    }

    if (password.value.length < 8) {
        messages += length;
    }
    message.innerHTML = messages;
}

let confirmPasswords = function () {
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

let validateAndConfirmPassword = function () {
    validator();
    confirmPasswords();
}