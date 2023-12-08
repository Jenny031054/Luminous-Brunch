//
if (window.location.href.includes('password.html')) {
  const submitValidateEmail = document.querySelector('.submitValidateEmail');
  const passwordNewEmail = document.querySelector(
    'input[name="passwordNewEmail"]'
  );
  const submitValidateCode = document.querySelector('.submitValidateCode');
  const validateCode = document.querySelector('input[name="validateCode"]');
  const loginBody = document.querySelector('.login-body');
  const inputs = document.querySelectorAll('input');
  console.log(inputs);

  // 等等把點擊裡面會處發的程式包在一個函示裡面
  submitValidateEmail.addEventListener('click', (e) => {
    submitValidateEmail.textContent = '已發送';

    let newEmail = passwordNewEmail.value;
    console.log(newEmail);
  });

  // 點擊送出功能
  submitValidateCode.addEventListener('click', (e) => {
    showErrorMessage(inputs);
  });

  // 監聽整個loginBody
  loginBody.addEventListener('click', (e) => {
    if (e.target.getAttribute('id') == 'confrimPasswordBtn') {
      const resetPasswordInput = document.querySelectorAll('input');
      console.log(resetPasswordInput);
      showErrorMessage(resetPasswordInput);
      console.log(e.target.getAttribute('id'));
    }
  });

  const errorMessage = document.querySelectorAll('.errorMessage');
  //驗證input狀況
  function showErrorMessage(inputs) {
    let passInputNum = 0;
    console.log(inputs);
    inputs.forEach((i, index) => {
      if (i.value == '') {
        console.log(errorMessage[index]);
        errorMessage[index].classList.add('text-warning');
        errorMessage[index].textContent = '此欄不得為空';
      } else {
        errorMessage[index].classList.add('d-none');
        passInputNum++;
      }
    });
    if (passInputNum >= 2) {
      setNewPassword();
    }
  }

  //跳轉填寫新密碼頁面
  function setNewPassword() {
    let str = `
  <h1 class="h3 mb-3 font-weight-normal text-center text-light">重置密碼</h1>
    <p class="text-light">密碼請輸入6-12碼，英文與數字混和</p>
      <label for="inputNewpassword" class="sr-only text-light">輸入新密碼</label>
        <input
          type="password"
          name="passwordNewEmail"
          id="inputNewpassword"
          class="form-control w-100 mb-3"
          placeholder="重置新密碼"
          required
          autofocus
        />
        <!-- 放錯誤訊息的區塊 -->
        <p class="errorMessage"></p>
        <label for="confrimPassword" class="sr-only text-light">再次輸入新密碼</label>
        <input
          type="password"
          name="passwordNewEmail"
          id="confrimPassword"
          class="form-control w-100"
          placeholder="再次輸入重置新密碼"
          required
          autofocus
        />
        <!-- 放錯誤訊息的區塊 -->
        <p class="errorMessage"></p>
        <div class="text-center mt-4">
          <button
            class="btn btn-lg btn-blue btn-block w-100"
            type="submit"
            id="confrimPasswordBtn"
          >
            確認
          </button>
        </div>
      
  `;
    loginBody.innerHTML = str;
  }
}
