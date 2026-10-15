const hobbyImages = [
    "images/hobby/ajisai.jpg",
    "images/hobby/ONOMICHI.JPG",
    "images/hobby/sirasagi.jpg",
    "images/hobby/osakajou.JPG",
    "images/hobby/hanabi.JPG",
    "images/hobby/Halloween.JPG",
    "images/hobby/UME.jpg"
];

// 画像をあらかじめ裏側で読み込んでおく（プリロード）
// 切り替わりの瞬間に画像データがなくて乱れるのを防ぐ
const preloadedImages = [];
for (let i = 0; i < hobbyImages.length; i++) {
    const img = new Image();
    img.src = hobbyImages[i];
    preloadedImages.push(img);
}

let currentIndex = 0;

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

let isImg1Active = true;

// 3秒ごとにクロスフェード
setInterval(function() {
    // 次のインデックスを計算
    currentIndex = (currentIndex + 1) % hobbyImages.length;
    const nextImageSrc = hobbyImages[currentIndex];

    if (isImg1Active) {
        // img1が表示中の場合、img2に次の画像を設定してふんわり浮かび上がらせる
        img2.src = nextImageSrc;
        img2.classList.add("active");    
        img1.classList.remove("active"); 
    } else {
        // img2が表示中の場合、img1に次の画像を設定してふんわり浮かび上がらせる
        img1.src = nextImageSrc;
        img1.classList.add("active");    
        img2.classList.remove("active"); 
    }

    isImg1Active = !isImg1Active;

}, 3000);