// 點擊餐點介紹時收合
const selectMenu = document.querySelector(".selectMenu");
const dropdownMenu = document.querySelector(".dropdownMenu");
const hamberMenu = document.querySelector(".hamberMenu");
const dropdownNavbar = document.querySelector(".dropdownNavbar");
// console.log(selectMenu);

selectMenu.addEventListener("click", function (e) {
  // console.log(e.target.nodeName);
  e.preventDefault();
  if (e.target.nodeName == "A" || e.target.nodeName == "SPAN") {
    dropdownMenu.classList.toggle("active");
    // 展開時餐點介紹為focus狀態
    selectMenu.classList.toggle("focused");
  }
});

hamberMenu.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.nodeName == "A" || e.target.nodeName == "SPAN") {
    dropdownNavbar.classList.toggle("active");
  }
});
