import axios from "axios";
if (window.location.href.includes('6-1-1-2_reservation-info.html')) {
  let reservationData = [];
  const jsTbody = document.querySelector('.js-tbody');
  init();
  function init() {
    getReservationData();
  }
  function getReservationData() {
    // 加入loading圖片
    jsTbody.innerHTML = `
    <tr>
      <td class="w-100" colspan="9">
        <img class="d-block mx-auto" src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" width="40" height="40" alt="Loading Loading Forever Sticker - Loading Loading Forever Bobux Loader Stickers" style="max-width: 280px; background-color: unset;">
      </td>
    </tr>`;

    // 
    const getFormData = JSON.parse(localStorage.getItem('formData'));
    axios.get(`https://demo-q3dk.onrender.com/bookings?email=${getFormData.email}`).then(function (res) {
      reservationData = res.data;
      if (reservationData.length === 0) {
        jsTbody.innerHTML = `<tr><td class="p-5 text-center fw-bold" colspan="9">目前無任何訂位資訊</td></tr>`;
        return;
      }
      renderReservationData();
    });
  }

  function renderReservationData() {
    let str = '';
    reservationData.forEach(function (item) {
      // console.log(item);
      str += `
      <tr class="text-center">
        <td class="px-5 py-4">${item.id}</td>
        <td class="px-5 py-4">${item.date}</td>
        <td class="px-5 py-4">${item.time}</td>
        <td class="px-5 py-4">${item.peopleNumber}位</td>
        <td class="px-5 py-4">${new Date().toLocaleDateString()} <br/> ${new Date().toLocaleTimeString()}</td>
        <td class="px-5 py-4">${item.name}</td>
        <td class="px-5 py-4">${item.phoneNumber}</td>
        <td class="px-5 py-4">${item.email}</td>
        <td class="px-5 py-4"><button data-id="${
          item.id
        }" class="btn btn-dark px-4" type="button">取消訂位</button></td>
      </tr>
      `;
    });
    jsTbody.innerHTML = str;
  }

  // 點擊取消訂位按鈕
  jsTbody.addEventListener('click', function (e) {
    const id = e.target.getAttribute('data-id');
    if (id === null) {
      return;
    }
    Swal.fire({
      title: '確認取消訂位',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '是',
      cancelButtonText: '否'
    }).then((result) => {
      if (result.isConfirmed) {
        // 如果按下"是"按鈕後執行的程式碼
        axios
        .delete(`https://demo-q3dk.onrender.com/bookings/${id}`)
        .then(function (res) {
          Swal.fire({
            title: '已成功取消訂位',
            icon: 'success',
          });
          getReservationData();
        });
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // 如果按下"否"按鈕後執行的程式碼
        Swal.fire({
          title: '已保留訂位',
          icon: 'info',
        });
      }
    });
    
  });
}
