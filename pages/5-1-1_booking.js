'use strict';
// import { formDataManager } from './5-1_booking';
// import { postUrl } from './config';
// import axios from 'axios';

// // const formData = formDataManager.getFormData();
// // console.log(formData);
// //完成訂位頁
// // bookingContents();

// function bookingContents(formData) {
//   const contentsField = document.querySelector('#confirm-text-id');
//   // console.log('contentsField:', contentsField);
//   axios
//     .get(`${postUrl}?name=${formData.name}`)
//     .then((res) => {
//       console.log(res);
//       let htmlFinal = `<p>您已完成訂位，訂位資訊如下：</p>
//           <p>用餐人數：${res.data[0].peopleNumber}</p>
//           <p>日期：${res.data[0].date}</p>`;
//       console.log(htmlFinal);
//       contentsField.innerHTML = htmlFinal;
//     })
//     .catch((error) => console.log(error));
// }
