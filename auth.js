var signInAnonymously = document.getElementById('signInAnonymously');
var logOutBtn = document.getElementById('logOutBtn');

var createUserWithEmailAndPassword = document.getElementById('createUserWithEmailAndPassword');
var signInWithEmailPasswordBtn = document.getElementById('signInWithEmailPasswordBtn');
var email = document.getElementById('email');
var password = document.getElementById('email');

signInAnonymously.addEventListener('click', e => {
    firebase.auth().signInAnonymously()
    .catch(error => {
        console.log(error);
    });
});

signInWithEmailPasswordBtn.addEventListener('click', e => {
    firebase.auth().
    signInWithEmailAndPassword(email.value, password.value)
    .catch(error => {
        console.log(error);
    });
});

createUserWithEmailAndPassword.addEventListener('click', e => {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .catch(error => {
        console.log(error);
    })
});

logOutBtn.addEventListener('click', e => {
    firebase.auth().signOut();
    console.log('Não está logado...');
});

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user);
        logOutBtn.style.display = 'inline';
    } else {
        logOutBtn.style.display = 'none';
    }
});