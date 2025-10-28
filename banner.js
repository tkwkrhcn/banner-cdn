<style>
#banner-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 0;
    background-color: transparent;
    max-width: 1200px;
    margin: 0 auto;
}
.banner {
    flex: 0 1 calc(25% - 10px);
    max-width: calc(25% - 10px);
    min-width: 250px;
    box-sizing: border-box;
    border: 1px solid #444;
    border-radius: 8px;
    overflow: hidden;
    background: #181818;
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
}
.wide-banner {
    flex: 0 1 calc(50% - 10px);
    max-width: calc(50% - 10px);
    min-width: 510px;
}
.banner img {
    width: 100%;
    height: auto;      /* ← 여기만 auto로 고치면 공간 사라짐 */
    object-fit: cover;
    display: block;
}
@media (max-width: 991px) {
    .banner { flex: 0 0 calc(50% - 10px); max-width: calc(50% - 10px); min-width: 180px;}
    .wide-banner { flex: 0 0 100%; max-width: 100%; min-width: 0;}
}
@media (max-width: 600px) {
    .banner, .wide-banner { flex: 0 0 100%; max-width: 100%; min-width: 0;}
}
</style>


<div id="banner-container"></div>

<script>
  // 1. 맨끝 고정 배너만 따로
  const fixedBanner = {
    url: "https://xn--vy7ba476b.com/",
    img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/c4352a78-3a5f-42ce-5255-5f9be9ced200/public"
  };

  // 2. 나머지 랜덤 배너만 분리
  const banners = [
    { url: "https://m-opgo.com/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/42adcbce-2231-4973-8e14-0ee48c8b3f00/public" },
    { url: "https://aha-o300.com/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/ef33775e-5535-44d3-7638-9e6a0eaf6b00/public" },
    { url: "https://jp12t4.com/", img: "https://imgur.com/SWjdiLE.gif" },
    { url: "https://opview76.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/f035c716-5ed6-4d68-2896-fe07c463c300/public" },
    { url: "https://gt206.com/", img: "https://imgur.com/JmMtKAP.gif"},
    { url: "https://lula.asia/Main?agentCode=8062", img: "https://avhot-6969.com/da/01K8MJCMAFJSCPRKMTC21S3RVT.gif"},
    { url: "https://onetop.space/Main?agentCode=4602", img: "https://avhot-6969.com/da/01K8MJEMRR238MXVAYF6MJBGF9.gif"},
    { url: "https://1bet1.one/?regcode=4567", img: "https://avhot-6969.com/da/01K8MJ8Q2JJH0QJX0NPMWY61NG.gif"},
    { url: "https://zxx.bet/Main?agentCode=8415", img: "https://avhot-6969.com/da/01K8MJBF7PGB9N5B01T74C7ZJ6.gif"},
    { url: "https://bcvip1.com/_views/6_main/main.php", img: "https://imagedelivery.net/qv2gIkABq4Cpu3cwbEEy-g/d5094907-1a96-40e5-d130-9ce7c2ef3100/public" },
  ];

  // 3. 랜덤 섞기
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(banners);

  // 4. 합치기(랜덤+맨끝)
  const allBanners = [...banners, fixedBanner];

  // 5. 렌더링
  const bannerContainer = document.getElementById('banner-container');
  allBanners.forEach(banner => {
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
</script>

