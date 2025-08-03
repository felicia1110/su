document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    alert('已加入购物车');
  });
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const body = `姓名: ${name}\nEmail: ${email}\n留言: ${message}`;
  const mailtoLink = `mailto:fsu8257@gmail.com?subject=${encodeURIComponent('新的留言')}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;

  alert('感谢您的留言！');
  e.target.reset();
});
