document.getElementById('movieForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const getVal = id => document.getElementById(id).value.trim();

  const html = `
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${getVal('title')}</title>
  <style>
    body {
      background-color: #111;
      color: #fff;
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      font-size: 14px;
    }
    header {
      background-color: #222;
      padding: 16px 10px;
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      color: #f1c40f;
      text-shadow: 1px 1px 4px rgba(0, 255, 255, 0.6);
    }
    
    .notice {
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364); /* ডার্ক গ্রেডিয়েন্ট */
  color: #f1c40f; /* গ্লো টাইপ গোল্ডেন কালার */
  padding: 16px 30px;
  border-left: 5px solid #f39c12;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 500;
  text-align: left;
  box-shadow: 0 0 12px rgba(241, 196, 15, 0.4);
  margin: 25px 0;
  animation: slideGlow 5s infinite;
  position: relative;
}

.notice::before {
  content: "⚡ Notice";
  position: absolute;
  top: -10px;
  left: 15px;
  background: #f39c12;
  color: #000;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 5px;
  font-size: 13px;
}

@keyframes slideGlow {
  0%, 100% {
    box-shadow: 0 0 12px rgba(241, 196, 15, 0.4);
  }
  50% {
    box-shadow: 0 0 18px rgba(241, 196, 15, 0.7);
  }
}
    .section-title {
      background-color: #333;
      margin: 12px auto 6px;
      padding: 10px;
      font-size: 16px;
      font-weight: bold;
      border-radius: 6px;
      text-align: center;
      color: #fff;
      max-width: 600px;
      box-shadow: 1px 1px 4px rgba(0, 255, 255, 0.2);
    }
    .quality-block {
      margin: 12px auto;
      padding: 16px;
      background-color: #1a1a1a;
      border-radius: 6px;
      max-width: 600px;
      text-align: center;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }
    .quality-title {
      font-size: 14px;
      margin-bottom: 6px;
      color: #f1c40f;
      font-weight: bold;
      text-transform: uppercase;
    }
    .link-group {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 6px;
    }
    .link-group a {
      background-color: #f1c40f;
      color: #000;
      padding: 8px 14px;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      min-width: 80px;
      font-size: 12px;
      transition: background 0.3s, transform 0.2s;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    }
    .link-group a:hover {
      background-color: #f1c40f;
      transform: translateY(-2px);
    }
    .watch-now {
      text-align: center;
      margin-top: 8px;
      margin-bottom: 16px;
    }
    .watch-now a {
      background-color: #f1c40f;
      color: #000;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: bold;
      border-radius: 6px;
      text-decoration: none;
      box-shadow: 0 3px 6px rgba(0,255,255,0.3);
      transition: 0.3s;
      display: inline-block;
    }
    .watch-now a:hover {
      background-color: #f1c40f;
      transform: translateY(-2px);
    }
    footer {
      text-align: center;
      padding: 14px;
      background-color: #222;
      color: #999;
      font-size: 12px;
    }
    .footer-icons {
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 1000;
    }
    .footer-icons .icon {
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      width: 50px;
      height: 50px;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 22px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
    }
    .footer-icons .icon:hover {
      transform: translateY(-4px) scale(1.05);
      background: rgba(255, 255, 255, 0.25);
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
      cursor: pointer;
    }
    .footer-icons .movie-request {
      background: linear-gradient(135deg, #ff416c, #ff4b2b);
    }
    .footer-icons .telegram {
      background: linear-gradient(135deg, #1c92d2, #f2fcfe);
      color: #0088cc;
    }
  </style>
</head>
<body>

<header>DOWNLOAD</header>

<div class="notice">
  <strong>Watch Now </strong> বাটনে ক্লিক করে দেখতে চাইলে, আপনার ইন্টারনেট স্পিড ভালো হতে হবে, না হলে ভিডিও Play হবে না। ভালো অভিজ্ঞতার জন্য হাই-স্পিড নেটওয়ার্ক ব্যবহার করুন অথবা ডাউনলোড করে দেখুন ।
</div>

<div class="section-title">${getVal('titlemain')}</div>

<div class="watch-now">
  <a href="${getVal('watchlink')}">▶ Watch Now</a>
</div>

<div class="quality-block">
  <div class="quality-title">Quality - 480P / ${getVal('480psize')}</div>
  <div class="link-group">
    <a href="${getVal('480pgdrive1')}">GDrive-1</a>
    <a href="${getVal('480pgdrive2')}">GDrive-2</a>
    <a href="${getVal('480pgdrive3')}">GDrive-3</a>
  </div>
  <div class="link-group">
    <a href="${getVal('gdtot480p')}">GDTOT</a>
    <a href="${getVal('filepress480p')}">FilePress</a>
  </div>
</div>

<div class="quality-block">
  <div class="quality-title">Quality - 720P</div>
  <div class="link-group">
    <a href="${getVal('720pgdrive1')}">GDrive-1</a>
    <a href="${getVal('720pgdrive2')}">GDrive-2</a>
    <a href="${getVal('720pgdrive3')}">GDrive-3</a>
  </div>
  <div class="link-group">
    <a href="${getVal('gdtot720p')}">GDTOT</a>
    <a href="${getVal('filepress720p')}">FilePress</a>
  </div>
</div>

<div class="quality-block">
  <div class="quality-title">1080P</div>
  <div class="link-group">
    <a href="${getVal('1080pgdrive1')}">GDrive-1</a>
    <a href="${getVal('1080pgdrive2')}">GDrive-2</a>
    <a href="${getVal('1080pgdrive3')}">GDrive-3</a>
  </div>
  <div class="link-group">
    <a href="${getVal('gdtot1080p')}">GDTOT</a>
    <a href="${getVal('filepress1080p')}">FilePress</a>
  </div>
</div>

<div class="notice">
  <strong>Fast Download</strong> depends on your net speed. If due to extra visitors one click <strong>GDrive-1, 2, 3</strong> is not downloading then download using other <strong>2 options</strong> <strong>GDTOT</strong> and <strong>FilePress</strong> given below. If all links are not working due to technical issues then request re-upload. Before <strong>requesting</strong> please check the pin post of Telegram channel.
</div>

<div class="notice" style="border-left-color: red; border-color: red;">
  ⚠️ এই পেজের কোন লিংক সেভ রাখবেন না। কারণ লিংকগুলো এক ঘন্টা পর অটোমেটিক পরিবর্তন হয়ে যায়।
</div>

<footer>
  &copy; 2025 Movie Flix. All rights reserved.
</footer>

<script type='text/javascript' src='//pl26610874.profitableratecpm.com/b0/80/37/b080376e2e859f6c371b8dbef6b33fbf.js'></script>

<div class="footer-icons">
  <a href="https://movieflix9.netlify.app/movie-request" class="icon movie-request" title="Request a Movie">
    <i class="fas fa-film"></i>
  </a>
  <a href="https://t.me/movieflixmr" target="_blank" class="icon telegram" title="Join Telegram">
    <i class="fab fa-telegram-plane"></i>
  </a>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</body>
</html>
`.trim();

  document.getElementById('output').value = html;
});

document.getElementById('copyBtn').addEventListener('click', function () {
  const output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
  this.textContent = 'Copied!';
  setTimeout(() => {
    this.textContent = 'Copy';
  }, 2000);
});
