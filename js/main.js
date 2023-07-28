var userName = document.querySelector('#userName');
var userEmail = document.querySelector('#userEmail');
var userPass = document.querySelector('#userPassword');
var button = document.querySelector('.signUp');
var btn = document.querySelector('.Login');
var home = document.querySelector('.home');
var nav = document.querySelector('nav')
var logDiv = document.querySelector('#logDiv');
var signDiv = document.querySelector('#signDiv');
var z;
var failLog = document.querySelector('.failLog');
var dangerP = document.querySelector('.dangerP');
var successP = document.querySelector('.successP');
var logOut = document.querySelector('.btn-outline-warning');
var logLink = document.querySelector('#signDiv span');
var signLink = document.querySelector('#logDiv span');
var userEmailCheck = document.querySelector('#userEmailCheck');
var userPassCheck = document.querySelector('#userPassCheck');
var welcomeUser = document.querySelector('.home h1')
var userContainer;


if (localStorage.getItem('Users') != null) {
        userContainer = JSON.parse(localStorage.getItem('Users'));
}
else {
        userContainer = [];
}
function addUser() {
        for (var i = 0; i < userContainer.length; i++) {
                if (userContainer[i].email == userEmail.value) {
                        dangerP.classList.remove('d-none');
                        successP.classList.add('d-none');
                        break;
                }
                else {
                        if (z == 2) {
                                dangerP.classList.remove('d-none');
                                dangerP.innerHTML = `Write Valid Email Please`;
                                successP.classList.add('d-none');
                                break;
                        }
                        else {
                                var user = {
                                        name: userName.value,
                                        email: userEmail.value,
                                        pass: userPass.value
                                }
                                userContainer.push(user);
                                localStorage.setItem('Users', JSON.stringify(userContainer));
                                successP.classList.remove('d-none');
                                dangerP.classList.add('d-none');
                                break;
                        }
                }


        }

}
button.addEventListener('click', function (e) {

        validateUser();
        addUser();



});

logLink.addEventListener('click', function (e) {
        logDiv.classList.remove('d-none');
        signDiv.classList.add('d-none');
});

signLink.addEventListener('click', function (e) {
        logDiv.classList.add('d-none');
        signDiv.classList.remove('d-none');
});


function validateUser() {

        var regx = /^\w{2,}(@)\w{2,}(\.com)$/gm
        if (regx.test(userEmail.value)) {
                z = 1;
                return z;
        }
        else {
                z = 2;
                return z;
        }


}
//  check in login
function check() {

        for (var i = 0; i < userContainer.length; i++) {
                if (userContainer[i].email == userEmailCheck.value && userContainer[i].pass == userPassCheck.value) {
                        home.classList.remove('d-none');
                        nav.classList.remove('d-none');
                        logDiv.classList.add('d-none');
                        welcomeUser.innerHTML = `welcome ` + userContainer[i].name;



                }
                else {
                        failLog.classList.remove('d-none');

                }


        }
}



btn.addEventListener('click', function () {
        check();


})

logOut.addEventListener('click', function () {
        home.classList.add('d-none');
        nav.classList.add('d-none');
        logDiv.classList.remove('d-none');
        failLog.classList.add('d-none');
})

