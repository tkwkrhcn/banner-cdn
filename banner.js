<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>배너 테스트</title>
</head>
<body>

  <div id="banner-container"></div>

  <script>
  document.addEventListener("DOMContentLoaded", function () {
    const style = document.createElement('style');
    style.textContent = `
#banner-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 10px;
}
.banner {
  flex: 0 1 calc(25% - 10px);
  max-width: calc(25% - 10px);
  border: 1px solid #444;
  border-radius: 8px;
  background: #222;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  overflow: hidden;
}
.banner img {
  display: block;
  width: 100%;
  height: auto;
}
@media (max-width: 768px) {
  .banner {
    flex: 0 1 calc(50% - 10px);
    max-width: calc(50% - 10px);
  }
}
    `;
    document.head.appendChild(style);

    const banners = [
      { url: "https://google.com", img: "https://via.placeholder.com/300x150?text=B1" },
      { url: "https://naver.com", img: "https://via.placeholder.com/300x150?text=B2" },
      { url: "https://kakao.com", img: "https://via.placeholder.com/300x150?text=B3" },
    ];

    const container = document.getElementById('banner-container');
    if (!container) return;

    banners.forEach(b => {
      const div = document.createElement('div');
      div.className = 'banner';

      const a = document.createElement('a');
      a.href = b.url;
      a.target = '_blank';
      a.rel = 'nofollow noopener noreferrer';

      const img = document.createElement('img');
      img.src = b.img;
      img.alt = "Banner";
      img.loading = 'lazy';

      a.appendChild(img);
      div.appendChild(a);
      container.appendChild(div);
    });
  });
  </script>

</body>
</html>
