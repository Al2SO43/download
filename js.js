// 定义背景图片数组
var backgroundImages = [
    './img/background1.jpeg','./img/background2.jpeg','./img/background3.jpeg','./img/background4.jpeg','./img/background5.jpeg','./img/background6.jpeg','./img/background7.jpeg','./img/background8.jpeg','./img/background9.jpeg','./img/background10.jpeg'
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
  modal.innerHTML = '<p>请在阅读<a href="DownloadDocument.pdf" target="_blank">『硫酸铝的下载站---相关文档』</a>之后浏览本站内容,否则因各种原因发生的任何问题的后果将全部由您承担!</p>';
  document.body.appendChild(modal);
  modal.style.display = 'block';
  setTimeout(function() {
    modal.style.display = 'none';
  }, 7000); // 7秒后自动隐藏
};

function displayTime() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Shanghai' };
  const beijingTime = new Date().toLocaleString('zh-CN', options);
  document.getElementById('datetime').textContent = beijingTime;
}

// 每秒更新时间
setInterval(displayTime, 1000);

// 初次加载页面时显示时间
displayTime();