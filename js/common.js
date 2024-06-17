var users = [];

if (localStorage.getItem('users') == null) {
    users = [];
} else {
    users = JSON.parse(localStorage.getItem('users'));
}