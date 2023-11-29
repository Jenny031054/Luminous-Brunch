'use strict';
import axios from 'axios';
import { postUrl } from './config';

const form = document.querySelector('form');
const steps = document.querySelectorAll('.step');
const submitBtn = document.querySelector('#submitBtn');
const fields = ['peopleNumber', 'date', 'time', 'name', 'phoneNumber', 'email'];
let formData;

//將表單資料統一儲存
export const formDataManager = (function () {
  return {
    setFormData: function (data) {
      formData = data;
    },
    getFormData: function () {
      return formData;
    },
  };
})();

if (window.location.href.includes('5-1_booking.html')) {
  restoreBooking();
  //儲存訂位資料
  function restoreBooking() {
    function clickHandler(e) {
      e.preventDefault();
      if (!e) return;
      const dataArr = [...new FormData(form)];
      formDataManager.setFormData(Object.fromEntries(dataArr));
      formData = formDataManager.getFormData();

      axios
        .post(postUrl, formData)
        .then((res) => {
          console.log(res);
          renderConfirm(formData);
        })
        .catch(() => console.error);
      steps[0].classList.remove('active');
      steps[1].classList.add('active');
    }
    submitBtn.addEventListener('click', clickHandler);
  }

  //確認訂位資料
  function renderConfirm(formData) {
    console.log(formData);
    localStorage.setItem('formData', JSON.stringify(formData));

    const btnControl = document.querySelector('#btn-control');
    //載入填寫內容
    fields.map((item) => {
      const inputElement = document.querySelector(`#${item}`);
      inputElement.value = formData[item];
      inputElement.disabled = true;
    });
    const buttons = [
      {
        type: 'button',
        text: '重新填寫',
        id: 'rewrite',
        onClick: handleRewrite,
      },
      {
        type: 'submit',
        text: '確認',
        id: 'submitValue',
        onClick: handleConfirm,
      },
    ];

    btnControl.innerHTML = '';
    //將buttons資料用迴圈賦予值
    buttons.forEach((buttonInfo) => {
      const button = document.createElement('button');
      button.type = buttonInfo.type;
      button.className = 'btn btn-primary';
      button.id = buttonInfo.id;
      button.innerText = buttonInfo.text;

      button.addEventListener('click', buttonInfo.onClick);
      btnControl.appendChild(button);
    });

    handleRewrite();
    handleConfirm(formData);
  }
  //重新填寫按鈕
  function handleRewrite() {
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
    <div class="d-flex justify-content-evenly mt-5" id="btn-control">
      <button
        type="click"
        class="btn btn-primary act-btn"
        id="submitBtn"
      >
        立即訂位
      </button>
    </div>
  </div>`;
      form.innerHTML = html;
    });
  }
  //確認訂位
  function handleConfirm(formData) {
    form.addEventListener('submit', function clickFunction(e) {
      e.preventDefault();
      console.log('完成跳轉');
      window.location.href = './5-1-1_booking.html';
    });
  }
}
