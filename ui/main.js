console.log('Loaded!');
//change the text of main-text
var element=document.getElementById('main-text');
element.innerHTML="new value";
//move image
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft +10;
    img.style.marginLeft=marginLeft('px');
}
var image=document.getElementById('img');
image.onClick=function(){
    var interval=setInterval(moveRight,10);

};