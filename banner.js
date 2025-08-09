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
    { url: "https://xn--vy7ba476b.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/c4352a78-3a5f-42ce-5255-5f9be9ced200/public" },
    { url: "https://xn--p49al7tolbl8o8tj.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ff2d6728-7523-4452-bd48-ecdb8072a600/public" },
    { url: "https://xn--k01bo01c.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/e7ffbf88-05fc-43cb-c033-2b0419995d00/public" }
  ];

  const banners = [
    { url: "https://m-opgo.com/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/42adcbce-2231-4973-8e14-0ee48c8b3f00/public" },
    { url: "https://aha-o300.com/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/ef33775e-5535-44d3-7638-9e6a0eaf6b00/public" },
    { url: "https://jp12t4.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/a123d6e8-bce9-4e40-32e3-ea195f1e7b00/public" },
    { url: "http://nrt-113.com", img: "https://imagedelivery.net/qv2gIkABq4Cpu3cwbEEy-g/d81a9918-16f3-4afe-fc7c-25310bcf9700/public" },
    { url: "https://opview76.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/f035c716-5ed6-4d68-2896-fe07c463c300/public" },
    { url: "https://s-j07.com/", img: "https://imagedelivery.net/qv2gIkABq4Cpu3cwbEEy-g/90a49f9a-30b5-4517-cc29-0cbf99fdc500/public" },
    { url: "https://wja89.com/", img: "https://imagedelivery.net/qv2gIkABq4Cpu3cwbEEy-g/5778e9c3-4c56-4de7-4c97-33a86c618900/public" },
    { url: "https://bcvip1.com/", img: "https://imagedelivery.net/qv2gIkABq4Cpu3cwbEEy-g/d5094907-1a96-40e5-d130-9ce7c2ef3100/public" }
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
