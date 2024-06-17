if (localStorage.getItem('sessionUser') != null && localStorage.getItem('sessionUser') != '') {
    window.location.href = "home.html";
}

var userNameField = document.querySelector('#nameField');
var userEmailField = document.querySelector('#emailField');
var userPasswordField = document.querySelector('#passwordField');
var signUpBtn = document.querySelector('#signUpBtn');
var regex = {
    nameField: /[A-za-z]{3,}/,
    emailField: /[A-za-z0-9]+@[A-za-z]+\.(com|org|net)/,
    passwordField: /.{8,}/
};

userNameField.addEventListener('keyup', function () {
    validateInput(userNameField);
});

userEmailField.addEventListener('keyup', function () {
    validateInput(userEmailField);
});

userPasswordField.addEventListener('keyup', function () {
    validateInput(userPasswordField);
});

signUpBtn.addEventListener('click', function () {
    addUser();
});

function addUser() {
    user = {
        userName: userNameField.value,
        userEmail: userEmailField.value,
        userPassword: userPasswordField.value
    };

    if (validateInputGeneral()) {

        users.push(user);

        localStorage.setItem('users', JSON.stringify(users));

    }


}

function validateInput(element) {

    if (regex[element.id].test(element.value)) {
        element.classList.replace('is-invalid', 'is-valid');
        return 1;
    } else {
        element.classList.add('is-invalid');
        element.nextElementSibling.innerHTML = element.placeholder;
        return 0;
    }

}

function validateInputGeneral() {
    if (regex[nameField.id].test(userNameField.value) &&
        regex[emailField.id].test(userEmailField.value) &&
        regex[passwordField.id].test(userPasswordField.value)) {
        return 1;
    } else {
        return 0;
    }
}