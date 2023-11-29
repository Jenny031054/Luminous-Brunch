const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const checkPassword = document.querySelector('#checkPassword');
const Name = document.querySelector('#inputName');
const Phone = document.querySelector('#inputPhone');
const signupBtn = document.querySelector('#signup');
if (window.location.href.includes('register.html')) {
  signupBtn.addEventListener('click', function (e) {
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
    e.preventDefault();
    let obj = {};
    obj.email = inputEmail.value;
    obj.password = inputPassword.value;
    obj.checkPassword = checkPassword.value;
    obj.nickName = Name.value;
    obj.phone = Phone.value;
    signUp(obj);
  });

  function signUp(obj) {
    axios
      .post('https://json-server-auth-q2r9.onrender.com/users/signup', obj)
      .then(function (res) {
        console.log(res);
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
