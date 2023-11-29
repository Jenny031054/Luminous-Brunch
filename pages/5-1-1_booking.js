'use strict';
// import { formDataManager } from './5-1_booking';
import { postUrl } from './config';
import axios from 'axios';
if (window.location.href.includes('5-1-1_booking.html')) {
  const storedFormData = JSON.parse(localStorage.getItem('formData'));
  const formConfirmContent = document.querySelector('.form-content-confirm');
  const cancelBtn = document.querySelector('#cancel-btn');
  const deleteBtn = document.querySelector('#delete-btn');
  let htmlFinal = '';

  bookingContents(storedFormData);

  //完成訂位頁
  function bookingContents(storedFormData) {
    axios
      .get(`${postUrl}?name=${storedFormData.name}`)
      .then(() => {})
      .catch((error) => console.log(error));
    htmlFinal = `<div class="booking-Contents"><p>您已完成訂位，訂位資訊如下：</p>
            <p>用餐人數：${storedFormData.peopleNumber}</p>
            <p>日期：${storedFormData.date}</p>
            <button type="button" class="btn btn-primary" id="cancel-btn">
                取消訂位
              </button>
              <a class="btn btn-primary" href="index.html" role="button"
                >回首頁</a
              ></div>`;
    formConfirmContent.innerHTML = htmlFinal;
  }
  cancelBooking(storedFormData);

  function cancelBooking(storedFormData) {
    cancelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      htmlFinal = `<div class="booking-Contents"><p>訂位資訊如下：</p>
  <p>用餐人數：${storedFormData.peopleNumber}</p>
  <p>日期：${storedFormData.date}</p>
  <p>是否確認取消訂位？</p></div>
  <div class="d-flex justify-content-evenly mt-5" id="">
  <button type="button" class="btn btn-primary" id="">
                否</button
              ><button type="button" class="btn btn-primary" id="delete-btn"
                >取消訂位</button
              ></div>`;
      formConfirmContent.innerHTML = htmlFinal;
      deleteBooking(storedFormData);
    });
  }

  function deleteBooking(storedFormData) {
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(storedFormData);
      axios
        .delete(`${postUrl}?name=${storedFormData.id}`)
        .then((response) => console.log(response))
        .catch(() => console.error);
      htmlFinal = `<div class="booking-Contents"><p>已為您取消以下訂位：</p>
        <p>用餐人數：${storedFormData.peopleNumber}</p>
        <p>日期：${storedFormData.date}</p>
        <p>時間：${storedFormData.time}</p></div>
        <div class="d-flex justify-content-evenly mt-5" id="">
        <a class="btn btn-primary" href="index.html" role="button" id="">
                      回首頁</a
                    ><a class="btn btn-primary" href="5-1_booking.html" role="button" id=""
                      >重新訂位</a
                    ></div>`;
      formConfirmContent.innerHTML = htmlFinal;
    });
  }
}
