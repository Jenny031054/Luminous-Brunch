'use strict';

const form = document.querySelector('form');
const steps = document.querySelectorAll('.step');
const formContent = document.querySelector('#formContent');
const submitButton = document.querySelector('#submitBtn');
const fields = ['peopleNumber', 'date', 'time', 'name', 'phoneNumber', 'email'];
console.log(submitButton);
const formDataManager = (function () {
  let formData;

  return {
    setFormData: function (data) {
      formData = data;
    },
    getFormData: function () {
      return formData;
    },
  };
})();
//儲存訂位資料
restoreBooking();
function restoreBooking() {
  submitButton.addEventListener('click', function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!e) return;
    const dataArr = [...new FormData(form)];
    formDataManager.setFormData(Object.fromEntries(dataArr));
    console.log(formDataManager.getFormData());
    const formData = formDataManager.getFormData();

    steps[0].classList.remove('active');
    steps[1].classList.add('active');
    return formData;
  });
  renderConfirm(formData);
}

//確認訂位資料
function renderConfirm(formData) {
  const btnControl = document.querySelector('#btn-control');
  fields.map((item) => {
    const inputElement = document.querySelector(`#${item}`);
    inputElement.value = formData[item];
    inputElement.disabled = true;
  });

  let htmlBooking = `<button type="button" class="btn btn-primary" id="rewrite">
  重新填寫
</button><button type="submit" class="btn btn-primary" id="submitValue">
確認
</button>`;
  btnControl.innerHTML = htmlBooking;
  rewriteData();
  bookingConfirm();
  bookingContents(formData);
}
//重新填寫按鈕
function rewriteData() {
  const rewriteBtn = document.querySelector('#rewrite');
  rewriteBtn.addEventListener('click', (e) => {
    let html = `<div class="step-indicator">
    <div class="step active" id="step1"><span>填寫預訂</span></div>
    <div class="line"></div>
    <div class="step" id="step2"><span>資料確認</span></div>
    <div class="line"></div>
    <div class="step" id="step3"><span>訂位完成</span></div>
  </div>
  <div id="formContent">
    <div class="mb-3">
      <label for="peopleNumber" class="form-label">用餐人數</label>
      <select
        class="form-select"
        aria-label="Default select example"
        id="peopleNumber"
        name="peopleNumber"
        required
      >
        <option value="1" selected>1位</option>
        <option value="2">2位</option>
        <option value="3">3位</option>
        <option value="4">4位</option>
      </select>

      <div class="form-text">
        <label for="date" class="form-label">用餐日期</label>
        <label for="time" class="form-label">時間</label>
      </div>
      <div class="d-flex justify-content-between">
        <input
          type="date"
          class="form-control"
          id="date"
          name="date"
          required
        /><input
          type="time"
          id="time"
          name="time"
          min="09:00"
          max="18:00"
          required
          class="form-control"
        />
      </div>
    </div>
    <div class="mb-3">
      <label for="name" class="form-label">姓名</label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="範例:陳曉明"
        style="width: 100%"
        name="name"
        required
      />
    </div>
    <div class="mb-3">
      <label for="phoneNumber" class="form-label">電話</label>
      <input
        type="tel"
        class="form-control"
        id="phoneNumber"
        placeholder="範例:0939123456"
        style="width: 100%"
        name="phoneNumber"
        required
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">信箱</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="範例:abc@gmail.com"
        style="width: 100%"
        name="email"
        required
      />
    </div>
    <div class="d-flex justify-content-evenly mt-5" id="submitBtn">
      <button
        type="submit"
        class="btn btn-primary act-btn"
        id="submitValue"
      >
        立即訂位
      </button>
    </div>
  </div>`;
    form.innerHTML = html;
  });
}
//確認訂位
function bookingConfirm() {
  form.addEventListener('submit', function clickFunction(e) {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = './5-1-1_booking.html';
    console.log('完成跳轉');
  });
}
//完成訂位頁
function bookingContents(formData) {
  window.addEventListener('load', function () {
    const contentsField = document.querySelector('#confirm-text');
    console.log('contentsField:', contentsField);

    let htmlFinal = `<p>您已完成訂位，訂位資訊如下：</p>
  <p>用餐人數：${formData.peopleNumber}</p>
  <p>日期：${formData.date}</p>`;
    console.log(formData);
    console.log(htmlFinal);
    contentsField.innerHTML = htmlFinal;
  });
}
