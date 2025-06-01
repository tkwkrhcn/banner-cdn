<div id="banner-container"></div>

<style>
  #banner-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 20px;
  }

  .banner {
    flex: 0 1 calc(25% - 10px);
    max-width: calc(25% - 10px);
    box-sizing: border-box;
    border: 1px solid #444;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    background-color: #222;
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
</style>

<script>
  const fixedBanners = [
    { url: "https://xn--vy7ba476b.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/c4352a78-3a5f-42ce-5255-5f9be9ced200/public" },
    { url: "https://xn--p49al7tolbl8o8tj.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ff2d6728-7523-4452-bd48-ecdb8072a600/public" },
    { url: "https://xn--k01bo01c.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/e7ffbf88-05fc-43cb-c033-2b0419995d00/public" }
  ];

  const banners = [
    { url: "https://m-opgo.com/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/42adcbce-2231-4973-8e14-0ee48c8b3f00/public" },
    { url: "https://aha-bmw.com/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/ef33775e-5535-44d3-7638-9e6a0eaf6b00/public" },
    { url: "https://www.kcasinojoin.com/?a=53625", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/5f552e98-695e-4df4-473d-6a5c32e74a00/public" },
    { url: "https://www.bet38join.com/?a=40381", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/bff71d34-5f5a-42a9-41c8-9bdd43229200/public" },
    { url: "http://xn--mi3bz4k.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/9826c574-8fc8-4330-2fbe-d1b6d0456100/public" },
    { url: "http://xn--h11by6u74e3oi.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/215a25ab-4b50-4157-0202-e77deb83b300/public" },
    { url: "http://xn--2i0ba424pba.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/89fb37c7-9e2f-4d87-fbd3-00d13a413500/public" },
    { url: "https://jp12t4.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/a123d6e8-bce9-4e40-32e3-ea195f1e7b00/public" },
    { url: "https://opview76.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/f035c716-5ed6-4d68-2896-fe07c463c300/public" }
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(banners);
  const finalBanners = [...banners, ...fixedBanners];

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

    a.appendChild(img);
    div.appendChild(a);
    bannerContainer.appendChild(div);
  });
</script>
