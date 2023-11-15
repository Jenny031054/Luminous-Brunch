// 點擊餐點介紹時收合
const selectMenu = document.querySelector('.selectMenu');
const dropdownMenu = document.querySelector('.dropdownMenu');
// 點擊漢堡選單時收合
const hamberMenu = document.querySelector('.hamberMenu');
const dropdownNavbar = document.querySelector('.dropdownNavbar');
// 導覽列覆蓋的剩餘區塊
const navbarOverlay = document.querySelector('.navbar_overlay');
const scrollableElement = document.body;

const closeIcon = document.querySelector('.closeIcon');
const selectMenuSpan = document.querySelector('.selectMenu span');

// 使用一個變數來追踪是否禁止捲動
let disableScroll = false;

// 定義相同的函數，用於禁止捲動
function preventDefaultScroll(e) {
  e.preventDefault();
}

selectMenu.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.nodeName == 'A' || e.target.nodeName == 'SPAN') {
    dropdownMenu.classList.toggle('active');
    // 展開時餐點介紹為focus狀態
    selectMenu.classList.toggle('focused');
    selectMenuSpan.classList.toggle('arrow_drop_down');
  }
});

hamberMenu.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.nodeName == 'A' || e.target.nodeName == 'SPAN') {
    dropdownNavbar.classList.add('active');
    navbarOverlay.classList.add('navbar_overlay_show');
    disableScroll = !disableScroll;
    // 根據狀態設定是否禁止捲動
    if (disableScroll) {
      scrollableElement.addEventListener('wheel', preventDefaultScroll, {
        passive: false,
      });
    } else {
      scrollableElement.removeEventListener('wheel', preventDefaultScroll);
    }
    hamberMenu.style.display = disableScroll ? 'none' : 'block';
    closeIcon.style.display = disableScroll ? 'block' : 'none';
  }
});

closeIcon.addEventListener('click', function (e) {
  e.preventDefault();
  dropdownNavbar.classList.remove('active');
  navbarOverlay.classList.remove('navbar_overlay_show');
  disableScroll = false;
  scrollableElement.removeEventListener('wheel', preventDefaultScroll);

  hamberMenu.style.display = 'block';
  closeIcon.style.display = 'none';
});
