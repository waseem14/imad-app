
//change the text of main-text
//var element=document.getElementById('main-text');
//element.innerHTML="new value";
//move image
//var img=document.getElementById('image');
var button=document.getElementById('counter');

button.onclick=function(){
    //create request
    var request=new XMLHttpRequest();
    
    //capture the response
    request.onreadystateChange=function(){
        if(request.readyState === XMLHttpRequet.DONE){
            //take action
            if(request.status === 200){
               var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','https://waseem1997.imad.hasura-app.io/counter',true);
    request.send(null);
};    