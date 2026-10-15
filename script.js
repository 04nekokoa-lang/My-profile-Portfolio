const hobbyImages = [
    "images/hobby/ajisai.jpg",
    "images/hobby/ONOMICHI.JPG",
    "images/hobby/sirasagi.jpg",
    "images/hobby/osakajou.JPG",
    "images/hobby/hanabi.JPG",
    "images/hobby/Halloween.JPG",
    "images/hobby/UME.jpg",
];

let currentIndex = 0;

// 2つのimg要素を取得
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

// どちらが今表に出ているかを管理するフラグ（trueならimg1、falseならimg2）
let isImg1Active = true;

// 3秒ごとに画像をクロスフェードさせる
setInterval(function() {
    // 次の画像のインデックスを計算
    currentIndex = (currentIndex + 1) % hobbyImages.length;
    const nextImageSrc = hobbyImages[currentIndex];

    if (isImg1Active) {
        // 現在 img1 が見えている場合：裏側にある img2 に次の画像を設定し、img2 を表に出す
        img2.src = nextImageSrc;
        img2.classList.add("active");    // img2を不透明に（フワッと現れる）
        img1.classList.remove("active"); // img1を透明に（フワッと消える）
    } else {
        // 現在 img2 が見えている場合：裏側にある img1 に次の画像を設定し、img1 を表に出す
        img1.src = nextImageSrc;
        img1.classList.add("active");    // img1を不透明
        img2.classList.remove("active"); // img2を透明
    }

    // フラグを反転させる
    isImg1Active = !isImg1Active;

}, 3000);