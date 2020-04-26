// li需要拿出来
var liImg =document.querySelectorAll(".imgBox li");
var liTab =document.querySelectorAll(".tabBox li");
// 第一个
var prevSpan =document.querySelector("span");
var nextSpan =document.querySelectorAll("span")[1];

var timer;
var bannerBox =document.querySelector(".bannerBox");
// 需要把六张图铺开
var showIndex =0;
function show(){
    // 找出所有的图片的li和引导点的li
    for(var i =0;i<liTab.length;i++){
        // class全部清空
        liTab[i].className ="";
        liImg[i].className ="";
    }
    liTab[showIndex].className ="current";
    liImg[showIndex].className ="active"; 
}
show();
// 上一张下一张的实现和定时器自动播放的实现是一个原理
// 下一张的方法
function next()
{
    showIndex =showIndex +1;
    if (showIndex >= liTab.length) {
        showIndex =0;
    }
    show();
}

function prev()
{
    showIndex --;
    if (showIndex <0) {
        showIndex =liTab.length -1 ;
    }
    show();
}
nextSpan.onclick =function(){
    next();
}
prevSpan.onclick =function(){
    prev();
}
// 自动播放
timer =setInterval(function(){
    prev();
},1000);
// 当鼠标移动图片的时候需要停止轮播
bannerBox.onmouseover =function(){
    console.log("进来?");
    
    clearInterval(timer);
}
bannerBox.onmouseleave =function(){
    timer =setInterval(function(){
    prev();
    },1000);
}
// 索引
for(var i =0;i<liTab.length;i++){
    // 为每一个小点添加了一个属性  0~~5
    liTab[i].index =i;
    // 事件是满足条件才触发
    liTab[i].onmouseover =function(e){
        console.log("///");
        // 当鼠标检进入到当前的li时，让索引换成当前li的索引
        // e.target>>>>事件的对象
        showIndex =e.target.index;
        show();
    }
}
