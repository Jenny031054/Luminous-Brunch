'use strict';
import axios from 'axios';
import { postUrl } from './config';

const form = document.querySelector('form');
const steps = document.querySelectorAll('.step');
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
  }

  //確認訂位資料
  function renderConfirm(formData) {
    //撈取訂位資料
    localStorage.setItem('formData', JSON.stringify(formData));
    const btnControl = document.querySelector('#btn-control');
    //載入填寫內容
    fields.map((item) => {
      const inputElement = document.querySelector(`#${item}`);
      inputElement.value = formData[item];
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
  }
  //確認訂位
  function handleConfirm() {
    form.addEventListener('submit', function clickFunction(e) {
      e.preventDefault();
      console.log('完成跳轉');
      window.location.href = './5-1-1_booking.html';
    });
  }
}
