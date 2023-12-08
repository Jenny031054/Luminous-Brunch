////功能需求：輸入正確的信箱、驗證碼(先設定有輸入數字就好)後跳轉到輸入新密碼畫面，如果兩格密碼相符的話就發送put請求，更改該帳號的密碼，畫面則跳轉到"密碼更改完成"
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
  const confrimPasswordBtn = document.querySelector("#confrimPasswordBtn");
  confrimPasswordBtn.addEventListener('click',(e)=>{
    finishPassword()
  })
  
};

//跳轉 "密碼重製成功"
function finishPassword(){
  let str = "";

  str =
  `
  <div class="d-flex justify-content-center mb-2">
  <span class="material-symbols-outlined display-3 text-light mx-auto">
    check_circle
  </span>
  </div>
  <h1 class="h3 mb-3 font-weight-normal text-center text-light">密碼重置成功</h1>
  <p class="text-light text-center">您已完成新密碼設定，請按下方按鈕回到登入頁面重新登入</p>

  <div class="text-center mt-4">
    <a 
      class="btn btn-lg btn-blue btn-block w-100"
      href="_login.html"
      id=""
    >
      重新登入
    </a>
  </div>
  `;
  loginBody.innerHTML = str;
}
//程式都寫在這大括號上面
};







