// 定义背景图片数组
var backgroundImages = [
    './img/background1.jpeg','./img/background2.jpeg','./img/background3.jpeg','./img/background4.jpeg','./img/background5.jpeg','./img/background6.jpeg','./img/background7.jpeg','./img/background8.jpeg','./img/background9.jpeg','./img/background10.jpeg'
];
// 随机选择背景图片
var randomIndex = Math.floor(Math.random() * backgroundImages.length);
var selectedImage = backgroundImages[randomIndex];
// 设置背景图片
document.body.style.backgroundImage = 'url(' + selectedImage + ')';

function displayTime() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Shanghai' };
  const beijingTime = new Date().toLocaleString('zh-CN', options);
  document.getElementById('datetime').textContent = beijingTime;
}

// 每秒更新时间
setInterval(displayTime, 1000);

// 初次加载页面时显示时间
displayTime();