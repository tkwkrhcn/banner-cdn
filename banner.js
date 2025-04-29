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

  .wide-banner {
    flex: 0 1 calc(50% - 10px);
    max-width: calc(50% - 10px);
  }

  @media (max-width: 768px) {
    .banner {
      flex: 0 1 calc(50% - 10px);
      max-width: calc(50% - 10px);
    }

    .wide-banner {
      flex: 0 1 100%;
      max-width: 100%;
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
  { url: "https://a8l-audi.com/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/42adcbce-2231-4973-8e14-0ee48c8b3f00/public" },
  { url: "https://aha-bmw.com/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/ef33775e-5535-44d3-7638-9e6a0eaf6b00/public" },
  { url: "https://s-16.com?jc=6c8f3b33f054c3cf", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/9d3b636f-934a-441b-4d76-c92ef9eb5e00/public" },
  { url: "http://xn--mi3bz4k.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/9826c574-8fc8-4330-2fbe-d1b6d0456100/public" },
  { url: "http://xn--h11by6u74e3oi.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/215a25ab-4b50-4157-0202-e77deb83b300/public" },
  { url: "http://xn--2i0ba424pba.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/89fb37c7-9e2f-4d87-fbd3-00d13a413500/public" },
  { url: "http://rc337.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/20199e87-2b76-4011-2412-fcb5c5164a00/public" },
  { url: "http://dg745.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ecf0c844-3ea7-48e1-d565-ba1cadf15900/public" },
  { url: "https://www.kcasinojoin.com/?a=53625/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/5f552e98-695e-4df4-473d-6a5c32e74a00/public" },
  { url: "https://www.bet38join.com/?a=40381/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/bff71d34-5f5a-42a9-41c8-9bdd43229200/public" },
  { url: "https://opview75.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/f035c716-5ed6-4d68-2896-fe07c463c300/public" }
];

// 와이드 배너 (600x100)
const wideBanner = {
  url: "https://xn--2j5b2zz4c.net/",
  img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/d20a69f9-c32f-446c-a21e-6d786777a700/public",
  wide: true
};

// 3. 랜덤 섞기
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(banners);

// 4. 최종 배열 만들기
const finalBanners = [...banners];
const insertIndex = Math.floor(Math.random() * (finalBanners.length + 1));
finalBanners.splice(insertIndex, 0, wideBanner);
finalBanners.push(...fixedBanners);

// 5. 배너 렌더링
const bannerContainer = document.getElementById('banner-container');
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
  if (banner.wide) div.classList.add('wide-banner');

  a.appendChild(img);
  div.appendChild(a);
  bannerContainer.appendChild(div);
});
