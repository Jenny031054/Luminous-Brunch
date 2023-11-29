const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const checkPassword = document.querySelector('#checkPassword');
const Name = document.querySelector('#inputName');
const phone = document.querySelector('#inputPhone');
const signupBtn = document.querySelector('#signup');
import axios from 'axios';
if (window.location.href.includes('_register.html')) {
  signupBtn.addEventListener('click', function () {
    if (
      inputEmail.value.trim() == '' ||
      Name.value.trim() == ''
      // phone.value.trim() == ""
    ) {
      alert('請確實填寫');
      return;
    } else if (
      inputPassword.value.length < 6 ||
      checkPassword.value.length < 6
    ) {
      alert('密碼錯誤');
      return;
    }
    let obj = {};
    obj.email = inputEmail.value;
    obj.password = inputPassword.value;
    obj.checkPassword = checkPassword.value;
    obj.nickName = Name.value;
    // obj.Phone = phone.value;
    signUp(obj);
  });

  function signUp(obj) {
    axios
      .post('https://json-server-auth-q2r9.onrender.com/signup', obj)
      .then(function (res) {
        if (res.status == 201) {
          window.location.assign('_login.html');
        }
      })
      .catch(function (error) {
        console.log(error);
        alert('未連結');
      });
  }
}
