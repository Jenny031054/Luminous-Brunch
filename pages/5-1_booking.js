'use strict';
import axios from 'axios';
import { postUrl } from './config';

const form = document.querySelector('form');
const steps = document.querySelectorAll('.step');
const formContent = document.querySelector('#formContent');
const btnControl = document.querySelector('#btn-control');

const fields = ['peopleNumber', 'date', 'time', 'name', 'phoneNumber', 'email'];
let formData;
let html;
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
    form.addEventListener('submit', clickHandler);
    function clickHandler(e) {
      e.preventDefault();
      if (!e) return;
      //創建form instance後轉為陣列
      const dataArr = [...new FormData(form)];
      //透過Object.fromEntries將陣列轉為一般物件儲存到setFormData
      formDataManager.setFormData(Object.fromEntries(dataArr));
      //從formDataManage取用formData
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
      const markup = `
      <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    `;
      btnControl.innerHTML = markup;
    }
  }

  //確認訂位資料
  function renderConfirm(formData) {
    setTimeout(() => {
      //撈取本地訂位資料
      localStorage.setItem('formData', JSON.stringify(formData));
      //載入填寫內容
      fields.map((item) => {
        const inputElement = document.querySelector(`#${item}`);
        inputElement.value = formData[item].trim();
        //資料不可再編輯
        inputElement.disabled = true;
      });
      html = `<a class="btn btn-primary form-btn form-btn" href="5-1_booking.html" role="button"
      >重新填寫</a
    ><button type="submit" class="btn btn-primary form-btn" id="submitValue">
    確認
    </button>`;
      btnControl.innerHTML = html;
      handleConfirm(formData);
    }, 1500);
  }
  //確認訂位，跳轉成功畫面
  function handleConfirm() {
    form.addEventListener('submit', function clickFunction(e) {
      e.preventDefault();
      const markup = `
      <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    `;
      formContent.innerHTML = markup;
      setTimeout(() => {
        window.location.href = './5-1-1_booking.html';
      }, 1500);
    });
  }
}
