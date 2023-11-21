'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!e) return;
  const dataArr = [...new FormData(form)];
  const data = Object.fromEntries(dataArr);
  console.log(data);
  return data;
});
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');
  const steps = document.querySelectorAll('.step');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate form submission
    // You can replace this with your actual form submission logic

    // Update step indicator
    steps[0].classList.remove('active');
    steps[1].classList.add('active');
  });
});
