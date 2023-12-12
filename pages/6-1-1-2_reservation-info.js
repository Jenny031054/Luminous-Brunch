if (window.location.href.includes('6-1-1-2_reservation-info.html')) {
  let reservationData = [];
  const jsTbody = document.querySelector('.js-tbody');
  init();
  function init() {
    getReservationData();
  }
  function getReservationData() {
    axios.get(`https://demo-q3dk.onrender.com/bookings`).then(function (res) {
      reservationData = res.data;
      if (reservationData.length === 0) {
        jsTbody.innerHTML = `<tr><td></td><td></td><td></td>
      <td class="p-5">目前無任何訂位資訊</td></tr>`;
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
    axios
      .delete(`https://demo-q3dk.onrender.com/bookings/${id}`)
      .then(function (res) {
        alert('取消訂位成功');
        getReservationData();
      });
  });
}
