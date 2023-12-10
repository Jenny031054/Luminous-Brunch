////功能需求：輸入正確的信箱、驗證碼(先設定有輸入數字就好)後跳轉到輸入新密碼畫面，如果兩格密碼相符的話就發送put請求，更改該帳號的密碼，畫面則跳轉到"密碼更改完成"
if (window.location.href.includes('password.html')) {
  const submitValidateEmail = document.querySelector('.submitValidateEmail');
  const passwordNewEmail = document.querySelector('input[name="passwordNewEmail"]');
  const submitValidateCode = document.querySelector('.submitValidateCode');
  const validateCode = document.querySelector('input[name="validateCode"]');
  const loginBody = document.querySelector('.login-body');
  const inputs = document.querySelectorAll('input');
  // 等等把點擊裡面會將使用者的信箱帶入找ID的函式參數中，
  // 宣告放置user資訊的物件
  let usersData = {};
  let userId ;
  submitValidateEmail.addEventListener('click', (e) => {
    submitValidateEmail.textContent = '已發送';
    let userEmail = passwordNewEmail.value;
    
    axios.get('https://json-server-auth-q2r9.onrender.com/users')
      .then(function(res){
        console.log(res.data);
        usersData = res.data;
        searchUserId(userEmail)
      })
      .catch(function(err){
        console.log(err)
      });
   
  });
  // 尋找相同的email，抓出使用者id
  function searchUserId(userEmail){
    usersData.forEach((item)=>{
      if(userEmail == item.email){
        userId = item.id;
      }else{
        alert("此信箱尚無會員資料，請先註冊帳號");
      }
    })
  } 
  // 點擊送出功能
  submitValidateCode.addEventListener('click', (e) => {
    showErrorMessage(inputs,userId);
  });

  // 監聽整個loginBody
  loginBody.addEventListener('click', (e) => {
    if (e.target.getAttribute('id') == 'confrimPasswordBtn') {
      const resetPasswordInput = document.querySelectorAll('input');
      showErrorMessage(resetPasswordInput);
    }
  });

  const errorMessage = document.querySelectorAll('.errorMessage');
  //驗證第一頁忘記密碼 input的狀況
  function showErrorMessage(inputs) {
    let passInputNum = 0;
    inputs.forEach((i, index) => {
      if (i.value == '') {
        errorMessage[index].classList.add('text-warning');
        errorMessage[index].textContent = '此欄不得為空';
      } else {
        errorMessage[index].classList.add('d-none');
        passInputNum++;
      }
    });
    if (passInputNum >= 2) {
      setNewPassword(userId);
    }
  }

  //跳轉填寫新密碼頁面
  function setNewPassword(userId) {
    let str = `
  <h1 class="h3 mb-3 font-weight-normal text-center text-light">重置密碼</h1>
    <p class="text-light">密碼請輸入6-12碼，英文與數字混和</p>
      <label for="inputNewpassword" class="sr-only text-light">輸入新密碼</label>
        <input
          type="password"
          name="inputNewpassword"
          id="inputNewpassword"
          class="form-control w-100 mb-3"
          placeholder="重置新密碼"
          required
          autofocus
        />
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
        <p class="newErrorMessage"></p>
        <div class="text-center mt-4">
          <button
            class="btn btn-lg btn-blue btn-block w-100"
            type="submit"
            id="confrimNewPasswordBtn"
          >
            確認
          </button>
        </div>
      
  `;
  loginBody.innerHTML = str;
  // 監聽這邊的修改密碼按鈕，有驗證成功就發patch請求並跳轉頁面
  const inputNewpassword = document.querySelector("#inputNewpassword");
  const confrimPassword = document.querySelector("#confrimPassword");
  const confrimNewPasswordBtn = document.querySelector("#confrimNewPasswordBtn");
  confrimNewPasswordBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const newErrorMessage = confrimPassword.nextElementSibling;
    if(inputNewpassword.value == confrimPassword.value && inputNewpassword.value !== "" &&confrimPassword.value !== "" && inputNewpassword.value.length >= 6 && confrimPassword.value.length >= 6){
      patchNewPassword(inputNewpassword.value,userId)
    }
    else if(inputNewpassword.value !== confrimPassword.value && inputNewpassword.value !== "" &&confrimPassword.value !== ""){
      newErrorMessage.classList.add("d-block");
      newErrorMessage.classList.add("text-warning");
      newErrorMessage.textContent= '新密碼與再次輸入密碼不一致';
    }
    else if(inputNewpassword.value.length < 6 || confrimPassword.value.length <6){
      newErrorMessage.classList.add("d-block");
      newErrorMessage.classList.add("text-warning");
      newErrorMessage.textContent= '密碼請輸入6-12碼，英文與數字混和';
    };
    
  })
  
};

//跳轉 "密碼重置成功"
function patchNewPassword(newPassword,userId){
  let str = "";
  // 發patch請求
  axios.patch(`https://json-server-auth-q2r9.onrender.com/users/${userId}`,
  {
    password:newPassword
  }
  )
  .then((res)=>{
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })
  // 跳轉頁面的HTML字串
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







