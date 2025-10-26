var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passInput = document.getElementById("passInput");
var btnSignUp = document.getElementById("btn-signup");
var btnLogin = document.getElementById("btn-login")
var signMsg = document.getElementById("sign-msg");
var loginMsg = document.getElementById("login-msg");
var toLogin = document.getElementById("to-login");
var toSign = document.getElementById("to-sign");
var emailInputLogin = document.getElementById("emailInputLogin");
var passInputLogin = document.getElementById("passInputLogin");
var logoutBtn = document.getElementById("logout");
var users = [];
if(localStorage.getItem("users") !== null) {
    users = JSON.parse(localStorage.getItem("users"));
}
btnSignUp.addEventListener("click",function(){
    addUser();
})

function display(index) {
    document.getElementById("heading").innerHTML += `<span>${users[index].userName}</span>`
    
    
}

logoutBtn.addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("home-sec").classList.add("d-none");
    document.getElementById("login-sec").classList.remove("d-none");
})

function check(){
    var userCheck = {
        emailCheck : emailInputLogin.value ,
        passCheck : passInputLogin.value ,
    }
    if(userCheck.emailCheck == "" ||
        userCheck.passCheck == "" ) {
        loginMsg.innerHTML = `
                 <span class="text-danger m-3">All inputs is required</span>
            ` 
            return ;
        }
    for (let i = 0; i < users.length; i++) {
        if(userCheck.emailCheck == users[i].userEmail &&
            userCheck.passCheck == users[i].userPass
        ) {
            document.getElementById("login-sec").classList.add("d-none");
            document.getElementById("home-sec").classList.remove("d-none");
            clear();
            display(i);
            return;
        }
        
    }
    loginMsg.innerHTML = `
                 <span class="text-danger m-3">incorrect email or password</span>
            `
}

btnLogin.addEventListener("click",function(e){
    e.preventDefault();
    check();
})

toLogin.addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("login-sec").classList.remove("d-none");
    document.getElementById("Signup-sec").classList.add("d-none");
    signMsg.innerHTML = "";
})

toSign.addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("login-sec").classList.add("d-none");
    document.getElementById("Signup-sec").classList.remove("d-none");
    clear();
})
function emptyInput() {
     if(nameInput.value == "" ||
        emailInput.value == "" ||
        passInput.value == ""
    ) {
        signMsg.innerHTML = `
                 <span class="text-danger m-3">All inputs is required</span>
            `
            return 0;
    }
}

function existEmail() {
    for (var i = 0; i < users.length; i++) {
        if(emailInput.value == users[i].userEmail) {
            signMsg.innerHTML = `
                 <span class="text-danger m-3">email already exists</span>
            `
            return 0;
        }
    }
}
function addUser() {
   
    if (emptyInput() == 0) {
        return;
    }
    
    if (existEmail() == 0) {
        return;
    }

    var user = {
        userName : nameInput.value ,
        userEmail : emailInput.value ,
        userPass : passInput.value 
    }
    users.push(user);
    signMsg.innerHTML = `
                 <span class="t-success m-3">Success</span>
            `
    storageData();
    clear();
    
}

function storageData(){
    localStorage.setItem("users",JSON.stringify(users));
}

function clear() {
    nameInput.value = "";
    emailInput.value = "";
    passInput.value = "";
    emailInputLogin.value = "";
    passInputLogin.value = "";
    loginMsg.innerHTML = "";
}

