const passwd = document.querySelector('#password');
const confPwd = document.querySelector('#confirm-pwd');
const errorMsg = document.querySelector('#error');
const createBtn = document.querySelector('button');
const passwdDiv = document.querySelectorAll("div.has( input[type='password'])");

confPwd.addEventListener("change",() => {
    if (passwd.value !== confPwd.value) {
        errorMsg.style.opacity = "1";
        createBtn.classList.add('off');
        passwdDiv.classList.add('invalid');
    } else {
        errorMsg.style.opacity = "0";
        createBtn.classList.remove('off');
        passwdDiv.classList.add('invalid');
    }
    console.log(confPwd.value);
});