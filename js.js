function displayTime() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Shanghai' };
  const beijingTime = new Date().toLocaleString('zh-CN', options);
  document.getElementById('datetime').textContent = beijingTime;
}

setInterval(displayTime, 1000);

displayTime();