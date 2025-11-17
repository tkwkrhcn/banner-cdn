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
    { url: "https://aha-o300.com/", img: "https://imgur.com/U6BsQbf.gif" },
    { url: "https://opview76.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/f035c716-5ed6-4d68-2896-fe07c463c300/public" },
    { url: "https://s-j07.com/", img: "https://imgur.com/h8ZScoC.gif" },
    { url: "https://bcvip1.com/", img: "https://imagedelivery.net/qv2gIkABq4Cpu3cwbEEy-g/d5094907-1a96-40e5-d130-9ce7c2ef3100/public" },
    { url: "https://lula.asia/Main?agentCode=8062", img: "https://avhot-root.com/da/01K8MJCMAFJSCPRKMTC21S3RVT.gif" },
    { url: "https://onetop.space/Main?agentCode=4602", img: "https://avhot-root.com/da/01K8MJEMRR238MXVAYF6MJBGF9.gif" },
    { url: "https://1bet1.one/?regcode=4567", img: "https://avhot-root.com/da/01K8MJ8Q2JJH0QJX0NPMWY61NG.gif" },
    { url: "https://zxx.bet/Main?agentCode=8415", img: "https://avhot-root.com/da/01K8MJBF7PGB9N5B01T74C7ZJ6.gif" }
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
