const passwd = document.querySelector('#password');
const confPwd = document.querySelector('#confirm-pwd');
const errorMsg = document.querySelector('#error');
const createBtn = document.querySelector('button');

confPwd.addEventListener("change",() => {
    if (passwd.value !== confPwd.value) {
        errorMsg.style.opacity = "1";
        createBtn.classList.add('off');

    } else {
        errorMsg.style.opacity = "0";
        createBtn.classList.remove('off');
    }
    console.log(confPwd.value);
});