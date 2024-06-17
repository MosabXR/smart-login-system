if (localStorage.getItem('sessionUser') == null || localStorage.getItem('sessionUser') == '') {
    window.location.href = "index.html";
} else {
    var username = JSON.parse(localStorage.getItem('sessionUser')).userName;
    var email = JSON.parse(localStorage.getItem('sessionUser')).userEmail;
    var password = JSON.parse(localStorage.getItem('sessionUser')).userPassword;
}

var welcomeMessage = document.querySelector('h1');

welcomeMessage.innerHTML = `Hello, ${username}`

var signOutBtn = document.querySelector('#signOutBtn');

signOutBtn.addEventListener('click', function () {
    signOut();
});

function signOut() {
    localStorage.setItem('sessionUser', '');
    window.location.href = "index.html";
}