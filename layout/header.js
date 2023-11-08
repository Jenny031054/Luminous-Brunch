// 點擊餐點介紹時收合
const selectMenu = document.querySelector(".selectMenu");
const dropdown = document.querySelector(".dropdown");
// console.log(selectMenu);

selectMenu.addEventListener("click", function (e) {
  // console.log(e.target.nodeName);
  e.preventDefault();
  if (e.target.nodeName == "A" || e.target.nodeName == "SPAN") {
    dropdown.classList.toggle("active");
    // 展開時餐點介紹為focus狀態
    selectMenu.classList.toggle("focused");
  }
});
