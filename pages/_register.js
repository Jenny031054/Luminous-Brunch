const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const checkPassword = document.querySelector('#checkPassword');
const Name = document.querySelector('#inputName');
const phone = document.querySelector('#inputPhone');
const signupBtn = document.querySelector('#signup');
import axios from 'axios';
if (window.location.href.includes('register.html')) {
  signupBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (
      inputEmail.value.trim() == '' ||
      Name.value.trim() == ''
      // phone.value.trim() == ""
    ) {
      // alert('請確實填寫');
      return;
    } else if (
      inputPassword.value.length < 6 ||
      checkPassword.value.length < 6
    ) {
      // alert('密碼錯誤');
      return;
    }
    let obj = {};
    obj.email = inputEmail.value;
    obj.password = inputPassword.value;
    obj.checkPassword = checkPassword.value;
    obj.nickName = Name.value;
    obj.Phone = phone.value;
    signUp(obj);
  });

  inputEmail.addEventListener("blur",function(e){
    if(validateEmail(inputEmail.value) == false){
      document.querySelector(`[data-message="Email"]`).textContent = "請填寫正確 Email 格式";
      return;
    }
  });
  inputPassword.addEventListener("blur",function(e){
    if(CheckPassword(inputPassword.value) == false){
      document.querySelector(`[data-message="password"]`).textContent = "請填寫正確 密碼 格式";
      return;
    }
  });
  checkPassword.addEventListener("blur",function(e){
    if(CheckPassword(checkPassword.value) !== inputPassword.value){
      document.querySelector(`[data-message="checkpassword"]`).textContent = "請與密碼相同格式";
      return;
    }
  })
  phone.addEventListener("blur",function(e){
    if(validatePhone(phone.value) == false){
      document.querySelector(`[data-message="phone"]`).textContent = "請填寫正確 電話 格式";
      return;
    }
  });

  function signUp(obj) {
    axios
      .post('https://json-server-auth-q2r9.onrender.com/signup', obj)
      .then(function (res) {
        if (res.status == 201) {
          window.location.assign('login.html');
        }
      })
      .catch(function (error) {
        console.log(error);
        alert('未連結');
      });
  }
};
// 驗證js
function validateEmail(mail)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true
  }
    return false
};
function CheckPassword(password) 
{ 
let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(password.match(passw)) 
{ 
return true;
}
else
{ 
return false;
}
};
function validatePhone(phone)
{
 if (/^[09]{2}\d{8}$/.test(phone))
  {
    return true
  }
    return false
};