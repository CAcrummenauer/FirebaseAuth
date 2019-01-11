var loginBtn = document.getElementById('loginBtn');
var logOutBtn = document.getElementById('logOutBtn');

loginBtn.addEventListener('click', e => {
    firebase.auth().signInAnonymously();
});

logOutBtn.addEventListener('click', e => {
    firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user);
        logOutBtn.style.display = 'inline';
    } else {
        logOutBtn.style.display = 'none';
    }
});
