const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
// const loginBtn = document.querySelector('#login');
const form = document.querySelector('form');
let token = '';
if (window.location.href.includes('login.html')) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (inputEmail.value.trim() == '' || inputPassword.value.trim() == '') {
      alert('請填寫帳號/密碼');
      return;
    }
    let obj = {};
    obj.email = inputEmail.value;
    obj.password = inputPassword.value;
    login(obj);
  });

  function login(obj) {
    axios
      .post('https://demo-q3dk.onrender.com/login', obj)
      .then(function (res) {
        if (res.status == 200) {
          window.location.assign('index.html');
          localStorage.setItem('isLogin', true);
          const memberData = JSON.stringify(obj);
          localStorage.setItem('memberData', memberData);
        } else {
          alert('Login failed. Please check your credentials.');
          localStorage.setItem('isLogin', false);
        }
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }
}
