if (localStorage.getItem('sessionUser') != null && localStorage.getItem('sessionUser') != '') {
    window.location.href = "home.html";
}

var userEmailField = document.querySelector('#emailField');
var userPasswordField = document.querySelector('#passwordField');
var signInBtn = document.querySelector('#signInBtn');

signInBtn.addEventListener('click', function () {
    logUser();
});

userEmailField.addEventListener('keyup', function () {
    validateInput(userEmailField);
});


function validateInput(element) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].userEmail != userEmailField.value) {
            element.classList.add('is-invalid');
            element.nextElementSibling.innerHTML = element.placeholder;
        } else {
            element.classList.replace('is-invalid','is-valid')
        }
    }
}

function logUser() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].userEmail == userEmailField.value && users[i].userPassword == userPasswordField.value) {
            sessionUser(users[i]);
            window.location.href = "home.html";
        } else {
            console.log("Login Unsuccessful");
        }
    }
}

function sessionUser(user) {
    localStorage.setItem('sessionUser', JSON.stringify(user));
}