// 랜덤 격려 문구 변경
function changeText() {
  const intro = document.getElementById('intro');
  const messages = [
    '웹 개발은 정말 재미있어요! 🎉',
    'JavaScript로 상호작용을 만들 수 있습니다.',
    'GitHub Pages로 무료 호스팅이 가능해요! 🚀',
    '꾸준히 하면 더 멋진 것을 만들 수 있어요 ✨',
    '오늘 한 줄 더! 어제가 만든 너를 이기자 💪'
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  intro.textContent = randomMessage;
  toast('한 줄 격려가 도착했습니다!');
}

// 페이지 로드 로그 + 빌드 시간 표기
window.addEventListener('load', () => {
  console.log('웹사이트가 성공적으로 로드되었습니다!');
  document.getElementById('buildTime').textContent = new Date().toLocaleString();
});

// 간단한 토스트
function toast(msg){
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

// 스크롤 리빌
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .15 });
revealEls.forEach(el => io.observe(el));

// 라이트/다크 테마 토글
const themeBtn = document.getElementById('themeToggle');
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved === 'light') root.classList.add('light');

function syncIcon(){
  themeBtn.textContent = root.classList.contains('light') ? '🌙' : '☀️';
}
syncIcon();

themeBtn.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  syncIcon();
});
