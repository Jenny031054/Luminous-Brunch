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
        if (res.status === 200) {
          Swal.fire({
            title: '登入提示',
            text: '已成功登入。',
            icon: 'success',
          });
          setTimeout(() => {
            window.location.assign('index.html');
            localStorage.setItem('isLogin', true);
            const memberData = JSON.stringify(obj);
            localStorage.setItem('memberData', memberData);
          }, 2000);
        } else {
          //登入失敗不會到這裡，會直接跳到catch
          // console.log(res);
          // Swal.fire({
          //   title: '登入提示',
          //   text: `登入失敗：${res.data}`,
          //   icon: 'success',
          // });
          // alert('Login failed. Please check your credentials.');
          // localStorage.setItem('isLogin', false);
        }
      })
      .catch(function (error) {
        // console.log(error.response);
        Swal.fire({
          title: '登入提示',
          text: `登入失敗：${error.response.data}`,
          icon: 'warning',
        });
        // alert('Login failed. Please check your credentials.');
        localStorage.setItem('isLogin', false);
      });
  }
}
