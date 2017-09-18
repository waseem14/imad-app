console.log('Loaded!');
//change the text of main-text
var element=document.getElementById('main-text');
element.innerHTML="new value";
//move image
var image=document.getElementById('img');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft +5;
    image.style.marginLeft=marginLeft +'px';
}

image.onClick=function(){
    var interval=setInterval(moveRight,50);

};