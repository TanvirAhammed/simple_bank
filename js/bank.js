document.getElementById('login-submit').addEventListener('click', function () {

    // get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;


    // get password

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;


    if (userEmail == 'Tanvir@gmail.com' && userPassword == 'shamim') {

        console.log('Valid USer');
        window.location.href = 'banking.html'
    }
    else {

        console.log('Invalid User');
    }
})


