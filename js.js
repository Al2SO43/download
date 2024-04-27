// 定义背景图片数组
var backgroundImages = [
    './img/background1.jpg','./img/background2.jpg','./img/background3.jpg','./img/background4.jpg','./img/background5.jpg','./img/background6.jpg','./img/background7.jpg','./img/background8.jpg','./img/background9.jpg','./img/background10.jpg'
];
// 随机选择背景图片
var randomIndex = Math.floor(Math.random() * backgroundImages.length);
var selectedImage = backgroundImages[randomIndex];
// 设置背景图片
document.body.style.backgroundImage = 'url(' + selectedImage + ')';
// 显示弹窗
window.onload = function() {
  var modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = '<p>请在阅读<a href="https://wwt.lanzouj.com/b00l0qk7cd">『硫酸铝的下载站』</a>相关文档之后浏览本站内容,否则因各种原因发生的任何问题的后果将全部由您承担!</p>';
  document.body.appendChild(modal);
  modal.style.display = 'block';
  setTimeout(function() {
    modal.style.display = 'none';
  }, 7000); // 7秒后自动隐藏
};