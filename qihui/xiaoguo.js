var textBox = document.querySelector("#text-box");
var planeBox = document.querySelector("#plane-holder-box");
// 监听页面滚动
document.body.onscroll = function () {
    if (document.documentElement.scrollTop >= 100) {
        textBox.classList.add("fixed");
        planeBox.style.display = 'block';
        topBtn.classList.remove("hide");

    } else {
        textBox.classList.remove("fixed");
        planeBox.style.display = 'none';
        topBtn.classList.add("hide");

    }
}
// 回到顶部
var topBtn = document.getElementById("top-btn");
topBtn.onclick = function (e) {
    document.documentElement.scrollTop = 0;
}