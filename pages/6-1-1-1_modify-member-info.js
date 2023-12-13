import axios from 'axios';

if (window.location.href.includes('6-1-1-1_modify-member-info.html')) {
  let memberData = [];
  const getMemberData = JSON.parse(localStorage.getItem('memberData'));
  // console.log(getMemberData);
  axios
    .get(
      `https://demo-q3dk.onrender.com/users?email=${getMemberData.email}`
    )
    .then(function (res) {
      memberData = res.data;
      renderMemberData();
    })
    .catch(function (error) {});

  const jsInputList = document.querySelector('.js-inputList');
  const jsSaveGroup = document.querySelector('.js-saveGroup');

  function renderMemberData() {
    // console.log(memberData);
    let memberStr = '';
    memberData.forEach(function (item) {
      memberStr = `
            <label for="username" class="mb-1">姓名</label>
            <input type="text" id="username" class="w-100 mb-5 bg-transparent py-1 border border-primary" value="${item.nickName}">
            <label for="phoneNumber" class="mb-1">手機號碼</label>
            <input type="tel" id="phoneNumber" class="w-100 mb-5 bg-transparent py-1 border border-primary" value="${item.Phone}">
            <label for="email" class="mb-1">信箱</label>
            <input type="email" id="email" class="w-100 mb-8 bg-transparent py-1 border border-primary" value="${item.email}">
            
    `;
    });
    jsInputList.innerHTML = memberStr;

    // 渲染儲存按鈕
    let str = '';
    memberData.forEach(function (item) {
      str += `
              <button type="button" class="btn btn-outline-primary px-4 px-md-7">取消</button>
              <button type="button" class="js-saveBtn btn btn-primary px-4 px-md-7" data-userId="${item.id}">儲存</button>
      `;
    });
    jsSaveGroup.innerHTML = str;
  }

  // 儲存會員資料
  jsSaveGroup.addEventListener('click', function (e) {
    const userId = e.target.getAttribute('data-userId');
    const username = document.querySelector('#username');
    const phoneNumber = document.querySelector('#phoneNumber');
    const email = document.querySelector('#email');
    console.log(userId);
    if (userId === null) {
      return;
    }
    axios
      .patch(`https://demo-q3dk.onrender.com/users/${userId}`, {
        email: email.value,
        Phone: phoneNumber.value,
        nickName: username.value,
      })
      .then(function (res) {
        alert('儲存成功');
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}
