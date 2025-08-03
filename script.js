document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    alert('已加入購物車');
  });
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('感謝您的留言！');
  e.target.reset();
});
