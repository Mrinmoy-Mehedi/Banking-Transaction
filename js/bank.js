document.getElementById('login-submit').addEventListener
('click',function(){
    // get user emai
    const emailField = document.getElementById('user-email');
    const userEmail= emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword= passwordField.value;
// check email & password
    if(userEmail == 'mehedi11384@diu.edu.bd' && userPassword=='secret'){
        window.location.href = 'banking.html';
    }

})

