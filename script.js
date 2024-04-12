function getTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function getDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  const dayOfWeek = days[now.getDay()];
  return `${year}年${month}月${day}日 (${dayOfWeek})`;
}

function punch(type) {
  const username = document.getElementById('username').value.trim();
  if (username === '') {
      alert('名前を入力してください！');
      return;
  }
  const time = getTime();
  const date = getDate();
  const log = document.getElementById('log');
  const entry = document.createElement('div');
  entry.textContent = `${date} ${time} ${username} ${type === 'in' ? '出勤' : '退勤'}`;
  log.appendChild(entry);
}

setInterval(function() {
  document.getElementById('clock').textContent = getTime();
  document.getElementById('date').textContent = getDate();
}, 1000);
