
//change the text of main-text
//var element=document.getElementById('main-text');
//element.innerHTML="new value";
//move image
//var img=document.getElementById('image');
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    var request=new XMLHttpRequest();
    counter=counter+1;
    
 var span=document.getElementById('count');
 span.innerHTML=counter.toString();
};