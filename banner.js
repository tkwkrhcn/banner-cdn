document.addEventListener("DOMContentLoaded", function () {
  // 1. 스타일 삽입
  const style = document.createElement('style');
  style.textContent = `
    #banner-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      padding: 10px;
      background-color: transparent;
    }

    .banner {
      flex: 0 1 calc(25% - 10px);
      max-width: calc(25% - 10px);
      box-sizing: border-box;
      border: 1px solid #444;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .banner img {
      width: 100%;
      height: auto;
      display: block;
    }

    @media (max-width: 768px) {
      .banner {
        flex: 0 1 calc(50% - 10px);
        max-width: calc(50% - 10px);
      }
    }
  `;
  document.head.appendChild(style);

  // 2. 배너 데이터
  const fixedBanners = [
    { url: "https://xn--vy7ba476b.com/", img: "https://imgur.com/dTUnYMz.gif" },
    { url: "https://xn--p49al7tolbl8o8tj.com/", img: "https://imgur.com/X9UgP7y.png" }
  ];

  const banners = [
    { url: "https://m-opgo.com/", img: "https://imgur.com/FMHlKQh.gif" },
    { url: "https://aha-bbc.com/", img: "https://imgur.com/U6BsQbf.gif" },
    { url: "https://1bet1.one/?regcode=4567", img: "https://soranet3.com/da/01K8MJ8Q2JJH0QJX0NPMWY61NG.gif" },
    { url: "https://zxx.bet/Main?agentCode=8415", img: "https://soranet3.com/da/01K8MJBF7PGB9N5B01T74C7ZJ6.gif" },
    { url: "https://lula.asia/Main?agentCode=8062", img: "https://soranet3.com/da/01K8MJCMAFJSCPRKMTC21S3RVT.gif" },
    { url: "https://onetop.space/Main?agentCode=4602", img: "https://soranet3.com/da/01K8MJEMRR238MXVAYF6MJBGF9.gif" },
    { url: "https://opview78.com/", img: "https://soranet3.com/da/01KF0C8RM3VJJ9K66JBPR2T65S.webp" },
    { url: "http://jk-357.com/", img: "https://soranet3.com/da/01KFWHNCS9DN9Q2K9Z7BQVK38Z.gif" },
    { url: "https://bk-777.com/", img: "https://soranet3.com/da/01KFWHMTGJ2TP2YPV7HDP0T81J.gif" }
  ];

  // 3. 랜덤 섞기
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(banners);

  // 4. 최종 배열 만들기 (와이드 배너 없이)
  const finalBanners = [...banners, ...fixedBanners];

  // 5. 배너 렌더링
  const bannerContainer = document.getElementById('banner-container');
  if (!bannerContainer) return;

  finalBanners.forEach(banner => {
    const a = document.createElement('a');
    a.href = banner.url;
    a.target = "_blank";
    a.rel = "nofollow noopener noreferrer";

    const img = document.createElement('img');
    img.src = banner.img;
    img.alt = "Banner";

    const div = document.createElement('div');
    div.className = 'banner';

    a.appendChild(img);
    div.appendChild(a);
    bannerContainer.appendChild(div);
  });
});
